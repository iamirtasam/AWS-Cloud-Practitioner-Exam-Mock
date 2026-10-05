/* Headless test of the engine: selection, rotation, shuffling, scoring.
   Runs without a browser by stubbing the few globals the engine touches.
   Run: node test-engine.js */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

// Final bank size, updated as content lands. validate.js is the per-batch gate;
// this is the finish-line gate for the engine.
const TARGETS = { bank: 528 };

// ---- Minimal browser-ish sandbox
const store = {};
const localStorage = {
  getItem: (k) => (k in store ? store[k] : null),
  setItem: (k, v) => { store[k] = String(v); },
  removeItem: (k) => { delete store[k]; }
};
// In a browser, `window` IS the global object, so `window.Store = x` also defines
// a bare global `Store`. Mirror that by making window self-referential.
const sandbox = { localStorage, console, Date, Math, JSON, setTimeout, clearTimeout };
sandbox.window = sandbox;
sandbox.globalThis = sandbox;
vm.createContext(sandbox);

function load(rel) {
  const code = fs.readFileSync(path.join(__dirname, rel), "utf8");
  vm.runInContext(code, sandbox, { filename: rel });
}

// data
load("data/blueprint.js");
["1-1", "1-2", "1-3", "1-4", "2-1", "2-2", "2-3", "2-4",
 "3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7", "3-8",
 "4-1", "4-2", "4-3"].forEach((t) => load(`data/qb-${t}.js`));

// app code (storage.js and engine.js reference bare `localStorage` and `Store`)
load("js/storage.js");
load("js/engine.js");

const { window } = sandbox;
const Engine = window.Engine;
const Store = window.Store;
const BP = window.BLUEPRINT;
Engine.Bank.init();

let pass = 0, fail = 0;
function check(name, cond, detail) {
  if (cond) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name}${detail ? " -> " + detail : ""}`); }
}

if (!Engine.Bank.count()) {
  console.log("\nBank is empty - content has not landed yet. Engine checks activate once the question bank exists.");
  console.log("(validate.js is the integrity gate while content is being generated.)");
  process.exit(0);
}

console.log("\n=== Bank ===");
check(`bank loaded ${TARGETS.bank} questions`, Engine.Bank.count() === TARGETS.bank, `got ${Engine.Bank.count()}`);
check(`all ${BP.domains.length} domains indexed`, BP.domains.every((d) => Engine.Bank.domainPool(d.n).length > 0));
check(`all ${BP.domains.flatMap((d) => d.tasks).length} tasks indexed`,
  BP.domains.flatMap((d) => d.tasks).every((t) => Engine.Bank.taskPool(t.id).length > 0));

console.log("\n=== Weighted selection (exam mode) ===");
const exam = Engine.buildSession({ count: 65, weighted: true });
check("exam session returns exactly 65", exam.length === 65, `got ${exam.length}`);
check("no duplicate questions in a session", new Set(exam.map((q) => q.id)).size === exam.length);
const dist = {};
exam.forEach((q) => { dist[q.domain] = (dist[q.domain] || 0) + 1; });
console.log("  domain distribution:", JSON.stringify(dist));
BP.domains.forEach((d) => {
  const expected = Math.round((d.weight / 100) * 65);
  const actual = dist[d.n] || 0;
  check(`D${d.n} within 1 of blueprint quota (${expected})`, Math.abs(actual - expected) <= 1, `got ${actual}`);
});

console.log("\n=== splitByWeight sums exactly ===");
[10, 25, 65, 130].forEach((n) => {
  const parts = Engine.splitByWeight(n, BP.domains);
  const sum = parts.reduce((s, x) => s + x, 0);
  check(`splitByWeight(${n}) sums to ${n}`, sum === n, `got ${sum} from ${JSON.stringify(parts)}`);
});

console.log("\n=== Rotation: repeat sessions surface fresh questions ===");
const s1 = Engine.buildSession({ count: 65, weighted: true });
s1.forEach((q) => Store.recordAnswer(q.id, true));
const s2 = Engine.buildSession({ count: 65, weighted: true });
const overlap = s2.filter((q) => s1.some((x) => x.id === q.id)).length;
check("second session overlaps first by <10%", overlap < 7, `overlap ${overlap}/65`);

// Exhaust the smallest task pool and confirm it still returns without crashing
const nonEmptyTasks = BP.domains.flatMap((d) => d.tasks).map((t) => t.id)
  .filter((id) => Engine.Bank.taskPool(id).length > 0)
  .sort((a, b) => Engine.Bank.taskPool(a).length - Engine.Bank.taskPool(b).length);
const smallTask = nonEmptyTasks[0];
const poolSize = Engine.Bank.taskPool(smallTask).length;
const t1 = Engine.buildSession({ count: poolSize + 20, taskFilter: [smallTask] });
check("over-requesting a task pool caps at pool size", t1.length === poolSize, `got ${t1.length} of ${poolSize}`);

console.log("\n=== Option shuffling ===");
const sample = Engine.Bank.all[0];
const shuffledSeen = new Set();
for (let i = 0; i < 40; i++) {
  const sh = Engine.withShuffledOptions(sample);
  shuffledSeen.add(sh.options.join("|"));
  // the keyed option text must still be a correct option after remap
  const keyedText = sh.answer.map((ai) => sh.options[ai]).sort().join("|");
  const originalText = sample.answer.map((ai) => sample.options[ai]).sort().join("|");
  if (keyedText !== originalText) { fail++; console.log("  FAIL shuffle broke the answer mapping"); break; }
}
check("shuffling produces multiple orderings", shuffledSeen.size > 1, `${shuffledSeen.size} distinct`);
check("shuffle preserves the correct answer text", true);

// rationale realignment
const multi = Engine.Bank.all.find((q) => q.type === "multi");
if (multi) {
  for (let i = 0; i < 20; i++) {
    const sh = Engine.withShuffledOptions(multi);
    const okBlank = sh.answer.every((ai) => sh.rationales[ai] === "");
    const okFilled = sh.rationales.every((r, idx) => sh.answer.includes(idx) || r.length > 0);
    if (!okBlank || !okFilled) { fail++; console.log("  FAIL shuffle broke rationale alignment"); break; }
  }
  check("shuffle preserves rationale alignment", true);
}

console.log("\n=== Ordering items ===");
// The CLF-C02 guide lists only multiple choice and multiple response, so the bank
// ships no ordering items - but the engine supports them, so the checks stay ready.
const ordering = Engine.Bank.all.filter((q) => q.type === "ordering");
if (!ordering.length) {
  console.log("  skip - no ordering items in the bank (CLF-C02 has none)");
} else {
  let orderingOk = true;
  ordering.forEach((q) => {
    const sh = Engine.withShuffledOptions(q);
    if (!sh._correctDisplayOrder || sh._correctDisplayOrder.length !== q.options.length) orderingOk = false;
    // Submitting the correct display order must score correct
    if (!Engine.isCorrect(sh, sh._correctDisplayOrder)) orderingOk = false;
    // A wrong order must score incorrect
    const wrong = sh._correctDisplayOrder.slice().reverse();
    if (q.options.length > 1 && Engine.isCorrect(sh, wrong) && wrong.join() !== sh._correctDisplayOrder.join()) orderingOk = false;
  });
  check("every ordering item scores correctly after shuffle", orderingOk);
}

console.log("\n=== Scoring ===");
const single = Engine.Bank.all.find((q) => q.type === "single");
if (single) {
  check("single: correct answer scores true", Engine.isCorrect(single, single.answer));
  check("single: wrong answer scores false", !Engine.isCorrect(single, [(single.answer[0] + 1) % single.options.length]));
  check("single: empty answer scores false", !Engine.isCorrect(single, []));
}
if (multi) {
  check("multi: all correct scores true", Engine.isCorrect(multi, multi.answer));
  check("multi: only one of them scores false", !Engine.isCorrect(multi, [multi.answer[0]]));
  check("multi: order does not matter", Engine.isCorrect(multi, multi.answer.slice().reverse()));
}

console.log("\n=== Weak areas & review pool ===");
// Answer some questions from the last domain's first task wrong to create a weak area
const drillTask = BP.domains[BP.domains.length - 1].tasks[0].id;
Engine.Bank.taskPool(drillTask).slice(0, 6).forEach((q) => Store.recordAnswer(q.id, false));
const weak = Engine.weakTasks(3);
check("weakTasks returns ranked results", weak.length > 0);
check("worst task is the one we failed", weak[0].task === drillTask, `got ${weak[0] && weak[0].task}`);
const missed = Engine.missedAndFlaggedIds();
check("missed pool includes the failed questions", missed.length >= 6, `got ${missed.length}`);
const reviewSession = Engine.buildSession({ count: 20, idPool: missed });
check("review session builds from missed pool", reviewSession.length > 0 && reviewSession.every((q) => missed.includes(q.id)));

console.log("\n=== Flags ===");
const probeId = Engine.Bank.all[0].id;
Store.toggleFlag(probeId);
check("flag set", Store.isFlagged(probeId));
Store.toggleFlag(probeId);
check("flag cleared", !Store.isFlagged(probeId));

console.log("\n=== Timer formatting ===");
check("formatClock 0", Engine.formatClock(0) === "00:00", Engine.formatClock(0));
check("formatClock 90s", Engine.formatClock(90) === "01:30", Engine.formatClock(90));
check("formatClock 5400s", Engine.formatClock(5400) === "1:30:00", Engine.formatClock(5400));

console.log("\n=== Attempts history ===");
Store.addAttempt({ id: "t1", modeId: "exam", label: "Real Exam", total: 65, correct: 50, pct: 76.9, finishedAt: Date.now() });
check("attempt recorded", Store.getAttempts().length === 1);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
