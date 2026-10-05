/* Regenerates the README screenshots in docs/.
   Seeds a plausible study history first so the Progress page shows a real
   trend instead of a single lonely attempt. Run: node tools/screenshots.js */
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "docs");
const URL = "file:///" + path.join(ROOT, "index.html").replace(/\\/g, "/");

// Per-domain accuracy for the seeded history: deliberately uneven so the
// domain bars and "weakest task statements" panel have something to say.
const DOMAIN_ACC = { 1: 0.86, 2: 0.79, 3: 0.71, 4: 0.9, 5: 0.62 };
const SCORES = [58, 64, 63, 72, 78, 81];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ channel: "chromium" });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 2 });
  page.on("pageerror", (e) => console.log("PAGEERROR:", e.message));

  await page.goto(URL);
  await page.waitForSelector(".mode-grid", { timeout: 20000 });

  await page.evaluate(({ DOMAIN_ACC, SCORES }) => {
    const day = 86400000;
    const now = Date.now();
    const bank = Engine.Bank.all;

    // Deterministic pseudo-random in [0,1) so runs are reproducible.
    const rnd = (n) => Math.abs(Math.sin(n * 12.9898) * 43758.5453) % 1;

    // Seen map: mark ~40% of the bank as practised, at each domain's hit rate.
    // Correctness is sampled per showing — rounding shown*acc would collapse
    // every domain to 0% or 100%.
    const seen = {};
    bank.forEach((q, i) => {
      if (i % 5 > 1) return;                      // deterministic ~40% sample
      const acc = DOMAIN_ACC[q.domain] || 0.75;
      const shown = 1 + (i % 3);
      let correct = 0;
      for (let k = 0; k < shown; k++) if (rnd(i * 7 + k + 1) < acc) correct += 1;
      const lastShownAt = now - ((i * 37) % 21) * day;
      seen[q.id] = {
        shown, correct, lastShownAt,
        lastCorrect: correct === shown,
        box: correct === shown ? 3 : 1,
        dueAt: lastShownAt + (correct === shown ? 7 : 1) * day
      };
    });
    localStorage.setItem("clf.seen", JSON.stringify(seen));

    // Attempt history: six exam-style sittings walking up towards the target.
    const attempts = SCORES.map((pct, n) => {
      const total = 65;
      const correct = Math.round((pct / 100) * total);
      const finishedAt = now - (SCORES.length - 1 - n) * 4 * day;
      const domainTally = {};
      window.BLUEPRINT.domains.forEach((d) => {
        const t = Math.round((d.weight / 100) * total);
        domainTally[d.n] = { total: t, correct: Math.round(t * (DOMAIN_ACC[d.n] || 0.75) * (pct / 78)) };
      });
      return {
        id: "seed-" + n, modeId: "exam", label: "Real Exam",
        total, correct, pct, domainTally, taskTally: {},
        startedAt: finishedAt - 78 * 60000, finishedAt, timedOut: false
      };
    });
    localStorage.setItem("clf.attempts", JSON.stringify(attempts));

    // A handful of flagged questions so Missed & Flagged is non-empty.
    const flags = {};
    bank.slice(0, 9).forEach((q) => { flags[q.id] = true; });
    localStorage.setItem("clf.flags", JSON.stringify(flags));
    localStorage.removeItem("clf.session");
  }, { DOMAIN_ACC, SCORES });

  const shots = [
    ["home", "#/home", ".mode-grid", false],
    ["progress", "#/progress", ".dbar-row", true],
    ["study", "#/study", ".note-section", false],
    ["flashcards", "#/flashcards", ".flash-card", false],
    ["confusions", "#/confusions", ".conf-card", false],
    ["examday", "#/examday", ".keyword-map", false]
  ];

  for (const theme of ["light", "dark"]) {
    await page.evaluate((t) => {
      const s = JSON.parse(localStorage.getItem("clf.settings") || "{}");
      s.theme = t;
      localStorage.setItem("clf.settings", JSON.stringify(s));
      document.documentElement.setAttribute("data-theme", t);
    }, theme);

    for (const [name, hash, sel, full] of shots) {
      await page.goto(URL + hash);
      await page.waitForSelector(sel, { timeout: 20000 });
      await page.waitForTimeout(600);
      const file = path.join(OUT, `${name}-${theme}.png`);
      await page.screenshot({ path: file, fullPage: !!full });
      console.log("wrote", path.relative(ROOT, file));
    }

    // Exam runner needs a session, so drive it rather than just navigating.
    await page.goto(URL + "#/exam?mode=exam");
    await page.waitForSelector(".q-options, .order-list", { timeout: 20000 });
    // Answer a few and flag one so the navigator shows real state.
    for (let i = 0; i < 6; i++) {
      const opts = page.locator(".q-option:not([disabled])");
      if (await opts.count() > 0) await opts.nth(i % 3).click();
      if (i === 2) await page.locator("button:has-text('Flag')").first().click();
      const next = page.locator("button:has-text('Next')");
      if (await next.count()) await next.click();
      await page.waitForTimeout(150);
    }
    // Leave one option selected so the shot shows the selected state.
    const last = page.locator(".q-option:not([disabled])");
    if (await last.count() > 1) await last.nth(1).click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(OUT, `exam-${theme}.png`) });
    console.log("wrote", `docs/exam-${theme}.png`);
    await page.evaluate(() => localStorage.removeItem("clf.session"));
  }

  await browser.close();
  console.log("\nDone.");
})();
