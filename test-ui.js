/* Browser smoke test: loads the real app, walks every view, runs an exam,
   and fails on any console error. Run: node test-ui.js */
const { chromium } = require("playwright");
const path = require("path");

const URL = "file:///" + path.join(__dirname, "index.html").replace(/\\/g, "/");

// Final content counts, updated as content lands. While the bank is empty this
// suite runs scaffold checks only; content checks activate once it lands.
const TARGETS = { bank: 528, notes: 19, glossary: 174 };

let pass = 0, fail = 0;
function check(name, cond, detail) {
  if (cond) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name}${detail ? " -> " + detail : ""}`); }
}

(async () => {
  // Use the full chromium build rather than the separate headless-shell download.
  const browser = await chromium.launch({ channel: "chromium" });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  const errors = [];
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  page.on("pageerror", (e) => errors.push("pageerror: " + e.message));

  console.log("\n=== Boot ===");
  await page.goto(URL);
  await page.waitForSelector(".mode-grid", { timeout: 20000 });
  check("home renders mode picker", await page.locator(".mode-card").count() >= 6);

  const bankSize = await page.evaluate(() => window.QBANK.length);
  const contentReady = bankSize > 0;
  const expectedTasks = await page.evaluate(() => window.BLUEPRINT.domains.flatMap((d) => d.tasks).length);
  const expectedDomains = await page.evaluate(() => window.BLUEPRINT.domains.length);

  if (!contentReady) {
    console.log("\nBank is empty - content has not landed yet. Scaffold checks only (boot, settings, theme).");
    await page.goto(URL + "#/settings");
    await page.waitForTimeout(400);
    check("settings renders", await page.locator(".card").count() > 0);
    await page.locator("#themeBtn").click();
    await page.waitForTimeout(300);
    check("theme toggle sets data-theme", (await page.getAttribute("html", "data-theme")) === "dark");
    const realErrors = errors.filter((e) => !/favicon/i.test(e));
    check("no console errors", realErrors.length === 0, realErrors.slice(0, 5).join(" | "));
    await browser.close();
    console.log(`\n${pass} passed, ${fail} failed`);
    process.exit(fail ? 1 : 0);
  }

  const bankText = await page.locator(".page-head p").first().textContent();
  check("home reports full bank", new RegExp(TARGETS.bank + " practice questions in rotation").test(bankText), bankText);

  console.log("\n=== Navigation: every view renders ===");
  const views = [
    ["study", ".study-layout", "Study Notes"],
    ["flashcards", ".flash-card, .flash-empty", "Flashcards"],
    ["glossary", ".gloss-item", "Glossary"],
    ["confusions", ".conf-card", "Easily Confused"],
    ["examday", ".keyword-map", "Exam Day"],
    ["progress", ".gauge-wrap", "Progress"],
    ["settings", ".card", "Settings"]
  ];
  for (const [route, sel, label] of views) {
    await page.goto(URL + "#/" + route);
    await page.waitForTimeout(400);
    const ok = await page.locator(sel).count() > 0;
    check(`${label} renders`, ok);
  }

  console.log("\n=== Study notes content ===");
  await page.goto(URL + "#/study");
  await page.waitForTimeout(400);
  check(`TOC lists ${expectedTasks} task statements`, await page.locator(".study-toc a").count() === expectedTasks,
    String(await page.locator(".study-toc a").count()));
  check("note has sections", await page.locator(".note-section").count() > 0);
  check("note has must-know box", await page.locator(".mustknow-box").count() === 1);
  check("note has tables", await page.locator(".note-table").count() > 0);

  console.log("\n=== Glossary search ===");
  await page.goto(URL + "#/glossary");
  await page.waitForTimeout(300);
  const allTerms = await page.locator(".gloss-item").count();
  check(`glossary loaded ${TARGETS.glossary} terms`, allTerms === TARGETS.glossary, String(allTerms));
  await page.fill('input[type="search"]', "ec2");
  await page.waitForTimeout(300);
  const filtered = await page.locator(".gloss-item").count();
  check("search filters results", filtered > 0 && filtered < allTerms, `${filtered} of ${allTerms}`);

  console.log("\n=== Exam runner: 65-question real exam ===");
  await page.goto(URL + "#/exam?mode=exam");
  await page.waitForSelector(".q-options, .order-list", { timeout: 15000 });
  check("exam shows timer", await page.locator("#examTimer").count() === 1);
  // 90 minutes renders as h:mm:ss, so 1:30:00 (or 1:29:5x once ticking).
  const timerVal = await page.locator("#examTimerVal").textContent();
  check("timer paints immediately at 90 minutes", /^1:(30:00|29:5\d)$/.test(timerVal), timerVal);
  check("footer has 65 nav dots", await page.locator(".nav-dot").count() === 65,
    String(await page.locator(".nav-dot").count()));
  // The navigator must be on screen, not pushed below the fold by the topbar.
  const footerBox = await page.locator("#examFooter").boundingBox();
  const vh = page.viewportSize().height;
  check("question navigator is visible in viewport", footerBox && footerBox.y + footerBox.height <= vh + 2,
    footerBox ? `bottom=${Math.round(footerBox.y + footerBox.height)} vh=${vh}` : "no box");

  // Answer the first question and confirm no immediate reveal in exam mode
  const firstOpt = page.locator(".q-option").first();
  if (await firstOpt.count()) {
    await firstOpt.click();
    await page.waitForTimeout(250);
    check("selection marks the option", await page.locator(".q-option.selected").count() >= 1);
    check("exam mode does NOT reveal answer", await page.locator(".q-feedback-panel").count() === 0);
  }

  // Flag, then navigate
  await page.locator("button:has-text('Flag')").first().click();
  await page.waitForTimeout(200);
  check("flagging marks the nav dot", await page.locator(".nav-dot.flagged").count() === 1);

  await page.locator("button:has-text('Next')").first().click();
  await page.waitForTimeout(300);
  check("advanced to question 2", (await page.locator("#examProgressTxt").textContent()).includes("Question 2 of 65"));

  console.log("\n=== Keyboard shortcuts ===");
  // Start from a clean session: the previous section left state behind, and
  // navigating to an identical hash URL would not re-render.
  await page.goto(URL + "#/home");
  await page.evaluate(() => localStorage.removeItem("clf.session"));
  await page.goto(URL + "#/exam?mode=exam");
  await page.waitForSelector(".q-options", { timeout: 15000 });
  await page.keyboard.press("c");
  await page.waitForTimeout(250);
  const selectedIdx = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".q-option")).findIndex((b) => b.classList.contains("selected")));
  check("pressing C selects option C", selectedIdx === 2, `selected index ${selectedIdx}`);

  const flaggedBefore = await page.locator(".nav-dot.flagged").count();
  await page.keyboard.press("f");
  await page.waitForTimeout(250);
  check("pressing F flags the question", await page.locator(".nav-dot.flagged").count() === flaggedBefore + 1);

  const qBefore = Number((await page.locator("#examProgressTxt").textContent()).match(/Question (\d+)/)[1]);
  await page.keyboard.press("ArrowRight");
  await page.waitForTimeout(250);
  const qAfter = Number((await page.locator("#examProgressTxt").textContent()).match(/Question (\d+)/)[1]);
  check("arrow right advances", qAfter === qBefore + 1, `${qBefore} -> ${qAfter}`);
  await page.keyboard.press("ArrowLeft");
  await page.waitForTimeout(250);
  const qBack = Number((await page.locator("#examProgressTxt").textContent()).match(/Question (\d+)/)[1]);
  check("arrow left goes back", qBack === qBefore, `back to ${qBack}`);
  check("answer persists after navigating away and back",
    await page.locator(".q-option.selected").count() === 1);
  // Exam mode must let you change your mind before submitting.
  await page.keyboard.press("a");
  await page.waitForTimeout(250);
  const changedIdx = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".q-option")).findIndex((b) => b.classList.contains("selected")));
  check("exam mode allows changing an answer", changedIdx === 0, `now ${changedIdx}`);

  console.log("\n=== Resume an interrupted session ===");
  // Leave the exam mid-way, then come back to it from Home.
  await page.goto(URL + "#/home");
  await page.waitForSelector(".mode-grid", { timeout: 15000 });
  const resumeBtn = page.locator("button:has-text('Resume')");
  check("home offers to resume the unfinished session", await resumeBtn.count() === 1);
  if (await resumeBtn.count()) {
    await resumeBtn.click();
    await page.waitForSelector(".q-options", { timeout: 15000 });
    const resumedTxt = await page.locator("#examProgressTxt").textContent();
    check("resumed into the same exam", /Real Exam/.test(resumedTxt), resumedTxt);
    // Wait for the restored selection rather than sampling the DOM instantly.
    let answerRestored = true;
    try {
      await page.waitForSelector(".q-option.selected", { timeout: 5000 });
    } catch (e) {
      answerRestored = false;
    }
    const savedGiven = await page.evaluate(() => {
      const s = JSON.parse(localStorage.getItem("clf.session") || "null");
      return s ? JSON.stringify(s.answers[s.currentIndex] || null) : "null";
    });
    check("resumed with the previous answer intact", answerRestored, `saved answer = ${savedGiven}`);
    check("resumed with the flag intact", await page.locator(".nav-dot.flagged").count() >= 1);
  }
  await page.goto(URL + "#/home");
  await page.waitForTimeout(300);
  const discardBtn = page.locator("button:has-text('Discard')");
  if (await discardBtn.count()) {
    await discardBtn.click();
    await page.waitForTimeout(300);
    check("discard clears the banner", await page.locator("button:has-text('Resume')").count() === 0);
  }

  console.log("\n=== Practice mode: immediate feedback ===");
  await page.goto(URL + "#/exam?mode=practice");
  await page.waitForSelector(".q-options, .order-list", { timeout: 15000 });
  const pOpt = page.locator(".q-option").first();
  if (await pOpt.count()) {
    await pOpt.click();
    await page.waitForTimeout(200);
    const submit = page.locator("button:has-text('Submit answer')");
    if (await submit.count() && await submit.isEnabled()) {
      await submit.click();
      await page.waitForTimeout(400);
      check("practice reveals feedback panel", await page.locator(".q-feedback-panel").count() === 1);
      check("correct option highlighted", await page.locator(".q-option.correct").count() >= 1);
      check("explanation shown", (await page.locator(".q-feedback-panel").textContent()).length > 40);
    } else {
      check("practice submit available", false, "submit button missing or disabled");
    }
  }

  console.log("\n=== Complete a short session and reach results ===");
  await page.goto(URL + "#/exam?mode=sprint");
  await page.waitForSelector(".q-options, .order-list", { timeout: 15000 });
  // Walk to the end. Give the loop slack rather than exactly 10 turns: a click
  // that lands mid-re-render can cost an iteration, and running out of turns
  // before reaching Finish would look like an app failure when it isn't.
  let finished = false;
  for (let i = 0; i < 30 && !finished; i++) {
    const enabled = page.locator(".q-option:not([disabled])");
    if (await enabled.count() > 0) {
      await enabled.first().click();
      await page.waitForTimeout(100);
      // Multi-select items need all their picks before they count as answered.
      if (await page.locator(".q-options >> text=/Select exactly/").count()) {
        const need = await page.evaluate(() => {
          const el = Array.from(document.querySelectorAll(".q-options .text-muted")).find((n) => /Select exactly/.test(n.textContent));
          return el ? Number(el.textContent.match(/\/(\d+)/)[1]) : 1;
        });
        for (let k = 1; k < need; k++) {
          const stillEnabled = page.locator(".q-option:not([disabled])");
          if (await stillEnabled.count() > 1) await stillEnabled.nth(k).click();
          await page.waitForTimeout(80);
        }
      }
    }
    await page.waitForTimeout(120);
    const finish = page.locator("button:has-text('Finish')");
    if (await finish.count()) { await finish.click(); finished = true; break; }
    const next = page.locator("button:has-text('Next')");
    if (await next.count()) await next.click();
    await page.waitForTimeout(150);
  }
  check("walked the session through to the Finish button", finished);
  await page.waitForSelector(".score-hero", { timeout: 10000 });
  check("results page renders score", await page.locator(".score-num").count() === 1);
  const scoreTxt = await page.locator(".score-num").textContent();
  check("score is a percentage", /^\d+%$/.test(scoreTxt), scoreTxt);
  check("results show domain table", await page.locator(".results-domain-table").count() >= 1);
  check("results show full review", await page.locator(".review-item").count() === 10,
    String(await page.locator(".review-item").count()));
  check("review shows explanations", await page.locator(".ri-explain").count() === 10);

  console.log("\n=== Progress charts populate after an attempt ===");
  await page.goto(URL + "#/progress");
  await page.waitForTimeout(600);
  check("readiness gauge renders", await page.locator(".gauge-svg").count() === 1);
  check("gauge shows a value", /%$/.test((await page.locator(".gauge-value").textContent()) || ""));
  check("trend chart renders", await page.locator(".trend-svg").count() === 1);
  check("trend has a data point", await page.locator(".trend-dot").count() >= 1);
  check("domain bars render", await page.locator(".dbar-row").count() === expectedDomains);
  check("domain bars have fills", await page.locator(".dbar-fill").count() >= 1);
  check("charts ship table-view toggles", await page.locator(".table-toggle").count() >= 2);

  // table view toggle actually works
  await page.locator(".table-toggle").first().click();
  await page.waitForTimeout(200);
  check("table view reveals a table", await page.locator(".a11y-table:visible").count() >= 1);

  console.log("\n=== Flashcards flip + rate ===");
  await page.goto(URL + "#/flashcards");
  await page.waitForTimeout(500);
  check("flashcard renders", await page.locator(".flash-card").count() === 1);
  await page.locator(".flash-card").click();
  await page.waitForTimeout(500);
  check("card flips", await page.locator(".flash-card.flipped").count() === 1);
  const knew = page.locator("button:has-text('Knew it')");
  if (await knew.count()) {
    await knew.click();
    await page.waitForTimeout(400);
    check("rating advances the deck", (await page.locator(".flash-progress").textContent()).includes("Card 2"));
  }

  console.log("\n=== Dark mode ===");
  await page.goto(URL + "#/home");
  await page.waitForTimeout(400);
  await page.locator("#themeBtn").click();
  await page.waitForTimeout(300);
  const theme = await page.getAttribute("html", "data-theme");
  check("theme toggle sets data-theme", theme === "dark", String(theme));
  const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  check("dark surface applied", bg === "rgb(13, 13, 13)", bg);

  console.log("\n=== Console errors ===");
  const realErrors = errors.filter((e) => !/favicon/i.test(e));
  check("no console errors", realErrors.length === 0, realErrors.slice(0, 5).join(" | "));

  await page.screenshot({ path: "screenshot-home-dark.png", fullPage: false });
  await page.goto(URL + "#/progress");
  await page.waitForTimeout(700);
  await page.screenshot({ path: "screenshot-progress-dark.png", fullPage: false });
  await page.locator("#themeBtn").click();
  await page.waitForTimeout(300);
  await page.goto(URL + "#/home");
  await page.waitForTimeout(500);
  await page.screenshot({ path: "screenshot-home-light.png", fullPage: false });
  await page.goto(URL + "#/exam?mode=practice");
  await page.waitForSelector(".q-options, .order-list", { timeout: 15000 });
  await page.screenshot({ path: "screenshot-exam-light.png", fullPage: false });

  await browser.close();
  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail ? 1 : 0);
})();
