/* Serves the repo over plain HTTP and checks the app boots the same way it does
   over file://. Worth having separately: the deployed build is the HTTP one, and
   the loader behaves differently there (parallel fetches, real caching).
   Run: node test-http.js */
const http = require("http");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

// Final content counts, updated as content lands. While the bank is empty this
// suite runs scaffold checks only; the content checks activate once it lands.
const TARGETS = { bank: 528, notes: 19, cards: 244, glossary: 179, confusions: 30 };

const ROOT = __dirname;
const PORT = 8731;
const TYPES = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".svg": "image/svg+xml", ".png": "image/png", ".json": "application/json"
};

let pass = 0, fail = 0;
function check(name, cond, detail) {
  if (cond) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name}${detail ? " -> " + detail : ""}`); }
}

const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split("?")[0]).replace(/^\/+/, "") || "index.html";
  const file = path.join(ROOT, rel);
  // Keep the server inside the repo.
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); res.end("not found"); return;
  }
  res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});

(async () => {
  await new Promise((r) => server.listen(PORT, r));
  const base = `http://localhost:${PORT}/`;
  const browser = await chromium.launch({ channel: "chromium" });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  const errors = [];
  const requests = [];
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
  page.on("requestfailed", (r) => requests.push(r.url() + " -> " + (r.failure() || {}).errorText));

  console.log("\n=== Boot over HTTP ===");
  const t0 = Date.now();
  await page.goto(base);
  await page.waitForSelector(".mode-grid", { timeout: 30000 });
  const bootMs = Date.now() - t0;
  check(`app boots (${bootMs}ms)`, true);
  check("no failed requests", requests.length === 0, requests.slice(0, 3).join(" | "));

  const urls = await page.evaluate(() =>
    Array.from(document.querySelectorAll('script[src^="data/"]')).map((s) => s.getAttribute("src")));
  const failedCount = await page.evaluate(() => window.Loader.status.failed.length);
  check(`no data file failed to load (of ${urls.length})`, failedCount === 0, `${failedCount} failed`);

  console.log("\n=== Data files are cacheable ===");
  check("data scripts carry a fixed version token, not a timestamp",
    urls.length > 0 && urls.every((u) => /\?v=\d+\.\d+\.\d+$/.test(u)), urls[0]);

  const counts = await page.evaluate(() => ({
    questions: window.QBANK.length,
    notes: window.NOTES.length,
    cards: window.FLASHCARDS.length,
    glossary: window.GLOSSARY.length,
    confusions: window.CONFUSIONS.length,
    examday: !!window.EXAMDAY
  }));

  if (!counts.questions) {
    console.log("\nBank is empty - content has not landed yet. Scaffold checks passed; content checks activate once it does.");
    check("static asset: favicon.svg", await page.evaluate(async (u) => (await fetch(u)).status, base + "favicon.svg") === 200);
    const real = errors.filter((e) => !/favicon/i.test(e));
    check("no console errors", real.length === 0, real.slice(0, 3).join(" | "));
    await browser.close();
    server.close();
    console.log(`\n${pass} passed, ${fail} failed`);
    process.exit(fail ? 1 : 0);
  }

  console.log("\n=== Content counts ===");
  check(`${TARGETS.bank} questions in the bank`, counts.questions === TARGETS.bank, String(counts.questions));
  check(`${TARGETS.notes} study notes`, counts.notes === TARGETS.notes, String(counts.notes));
  check(`${TARGETS.cards} flashcards`, counts.cards === TARGETS.cards, String(counts.cards));
  check(`${TARGETS.glossary} glossary terms`, counts.glossary === TARGETS.glossary, String(counts.glossary));
  check(`${TARGETS.confusions} confusion sets`, counts.confusions === TARGETS.confusions, String(counts.confusions));
  check("exam-day content present", counts.examday);

  console.log("\n=== Routes respond over HTTP ===");
  for (const [route, sel] of [["exam?mode=sprint", ".q-options, .order-list"], ["study", ".study-layout"],
                              ["glossary", ".gloss-item"], ["progress", ".gauge-wrap"], ["examday", ".keyword-map"]]) {
    await page.goto(base + "#/" + route);
    await page.waitForSelector(sel, { timeout: 20000 });
    check(`#/${route} renders`, true);
  }

  console.log("\n=== Static assets ===");
  for (const asset of ["favicon.svg", "docs/banner.svg", "docs/icons/rocket.svg"]) {
    const status = await page.evaluate(async (u) => (await fetch(u)).status, base + asset);
    check(`${asset} serves 200`, status === 200, String(status));
  }

  console.log("\n=== Console errors ===");
  const real = errors.filter((e) => !/favicon/i.test(e));
  check("no console errors", real.length === 0, real.slice(0, 3).join(" | "));

  await browser.close();
  server.close();
  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail ? 1 : 0);
})();
