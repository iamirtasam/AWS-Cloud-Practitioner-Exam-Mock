/* Data integrity check for the CLF-C02 bank. Run: node validate.js */
const fs = require("fs");
const path = require("path");

global.window = {};
const dataDir = path.join(__dirname, "data");

const QB_FILES = fs.readdirSync(dataDir).filter((f) => f.startsWith("qb-")).sort();
const NOTE_FILES = fs.readdirSync(dataDir).filter((f) => f.startsWith("notes-")).sort();
const CARD_FILES = fs.readdirSync(dataDir).filter((f) => f.startsWith("cards-")).sort();

let problems = [];
function bad(msg) { problems.push(msg); }

// ---- Questions
const perFile = {};
QB_FILES.forEach((f) => {
  const before = (global.window.QBANK || []).length;
  try {
    require(path.join(dataDir, f));
  } catch (e) {
    bad(`${f}: FAILED TO LOAD - ${e.message}`);
    return;
  }
  perFile[f] = (global.window.QBANK || []).length - before;
});

const Q = global.window.QBANK || [];
const ids = new Set();
Q.forEach((q) => {
  const where = `${q.id || "(no id)"}`;
  if (!q.id) bad(`${where}: missing id`);
  if (ids.has(q.id)) bad(`${where}: DUPLICATE id`);
  ids.add(q.id);
  if (!q.stem) bad(`${where}: missing stem`);
  if (!q.explanation) bad(`${where}: missing explanation`);
  if (!Array.isArray(q.options) || q.options.length < 2) bad(`${where}: bad options`);
  if (!Array.isArray(q.answer) || !q.answer.length) bad(`${where}: bad answer`);
  else if (q.answer.some((i) => typeof i !== "number" || i < 0 || i >= q.options.length)) bad(`${where}: answer index out of range`);
  if (q.type === "single" && q.answer.length !== 1) bad(`${where}: single with ${q.answer.length} answers`);
  if (q.type === "multi") {
    // CLF-C02 multiple response: two or more correct responses out of five or more.
    // The bank uses 2 or 3; the stem must announce the count to match.
    if (q.answer.length < 2 || q.answer.length > 3) bad(`${where}: multi with ${q.answer.length} answers (need 2 or 3)`);
    else {
      const word = q.answer.length === 2 ? "TWO" : "THREE";
      if (!new RegExp(`\\(Select ${word}\\.\\)\\s*$`).test(q.stem)) bad(`${where}: multi stem missing "(Select ${word}.)"`);
    }
  }
  if (q.type === "ordering") {
    if (q.answer.length !== q.options.length) bad(`${where}: ordering answer not a full permutation`);
    const sorted = q.answer.slice().sort((a, b) => a - b);
    if (sorted.some((v, i) => v !== i)) bad(`${where}: ordering answer is not a permutation of indices`);
    const identity = q.answer.every((v, i) => v === i);
    if (identity) bad(`${where}: ordering options already in correct order`);
  } else {
    if (!Array.isArray(q.rationales) || q.rationales.length !== q.options.length) bad(`${where}: rationales length != options length`);
    else {
      q.answer.forEach((ai) => { if (q.rationales[ai] !== "") bad(`${where}: rationale at correct index ${ai} should be ""`); });
      q.rationales.forEach((r, i) => { if (!q.answer.includes(i) && !r) bad(`${where}: missing rationale at incorrect index ${i}`); });
    }
  }
  if (typeof q.domain !== "number") bad(`${where}: bad domain`);
  if (!q.task) bad(`${where}: missing task`);
  // Angle-bracket text like <instructions> is legitimate prompt-delimiter content and is
  // escaped before render; only flag newlines and actual HTML tags.
  [q.stem, q.explanation].concat(q.options).forEach((s) => {
    if (typeof s !== "string") return;
    if (/[\n\r]/.test(s)) bad(`${where}: newline in a string`);
    if (/<\/?(div|span|p|br|b|i|em|strong|ul|ol|li|table|tr|td|a|img|script)\b[^>]*>/i.test(s)) bad(`${where}: HTML tag in a string`);
  });
});

// ---- Blueprint coverage
require(path.join(dataDir, "blueprint.js"));
const BP = global.window.BLUEPRINT;
const byTask = {};
Q.forEach((q) => { byTask[q.task] = (byTask[q.task] || 0) + 1; });

console.log("=== QUESTION BANK ===");
console.log(`Total questions: ${Q.length}`);
Object.entries(perFile).forEach(([f, n]) => console.log(`  ${f.padEnd(14)} ${n}`));
console.log("\nPer task statement:");
BP.domains.forEach((d) => {
  d.tasks.forEach((t) => {
    const n = byTask[t.id] || 0;
    const flag = n < 20 ? "  <-- THIN" : "";
    console.log(`  D${d.n} ${t.id}: ${String(n).padStart(3)}${flag}`);
  });
});
console.log("\nPer domain (vs blueprint weight):");
BP.domains.forEach((d) => {
  const n = Q.filter((q) => q.domain === d.n).length;
  const pct = Q.length ? ((n / Q.length) * 100).toFixed(1) : 0;
  console.log(`  D${d.n} ${d.short.padEnd(24)} ${String(n).padStart(3)} (${pct}% of bank, blueprint ${d.weight}%)`);
});
const typeMix = {};
Q.forEach((q) => { typeMix[q.type] = (typeMix[q.type] || 0) + 1; });
console.log("\nType mix:", JSON.stringify(typeMix));
const posCount = {};
Q.filter((q) => q.type === "single").forEach((q) => { posCount[q.answer[0]] = (posCount[q.answer[0]] || 0) + 1; });
console.log("Single-answer key positions (A/B/C/D):", JSON.stringify(posCount));

// ---- Notes / cards / extras
["glossary.js", "confusions.js", "examday.js"].forEach((f) => {
  const p = path.join(dataDir, f);
  if (!fs.existsSync(p)) { bad(`MISSING FILE: data/${f}`); return; }
  try { require(p); } catch (e) { bad(`${f}: FAILED TO LOAD - ${e.message}`); }
});
NOTE_FILES.forEach((f) => { try { require(path.join(dataDir, f)); } catch (e) { bad(`${f}: FAILED TO LOAD - ${e.message}`); } });
CARD_FILES.forEach((f) => { try { require(path.join(dataDir, f)); } catch (e) { bad(`${f}: FAILED TO LOAD - ${e.message}`); } });

const NOTES = global.window.NOTES || [];
const CARDS = global.window.FLASHCARDS || [];
const GLOSS = global.window.GLOSSARY || [];
const CONF = global.window.CONFUSIONS || [];
const EDAY = global.window.EXAMDAY;

console.log("\n=== STUDY CONTENT ===");
console.log(`Notes entries: ${NOTES.length} (need 19, one per task statement)`);
const noteIds = new Set(NOTES.map((n) => n.id));
BP.domains.forEach((d) => d.tasks.forEach((t) => { if (!noteIds.has(t.id)) bad(`MISSING notes entry for task ${t.id}`); }));
console.log(`Flashcards: ${CARDS.length}`);
const cardByDomain = {};
CARDS.forEach((c) => { cardByDomain[c.domain] = (cardByDomain[c.domain] || 0) + 1; });
console.log("  by domain:", JSON.stringify(cardByDomain));
console.log(`Glossary terms: ${GLOSS.length}`);
console.log(`Confusion sets: ${CONF.length}`);
console.log(`Exam-day data: ${EDAY ? "present" : "MISSING"}`);

NOTES.forEach((n) => {
  const w = `notes ${n.id}`;
  if (!n.title || !n.summary) bad(`${w}: missing title/summary`);
  if (!Array.isArray(n.sections) || !n.sections.length) bad(`${w}: no sections`);
  else n.sections.forEach((s, i) => {
    if (!s.heading) bad(`${w} section ${i}: no heading`);
    if (!Array.isArray(s.body) || !s.body.length) bad(`${w} section ${i}: no body`);
    if (s.table) {
      if (!Array.isArray(s.table.headers) || !Array.isArray(s.table.rows)) bad(`${w} section ${i}: malformed table`);
      else s.table.rows.forEach((r, ri) => { if (r.length !== s.table.headers.length) bad(`${w} section ${i} row ${ri}: ${r.length} cells vs ${s.table.headers.length} headers`); });
    }
  });
  if (!Array.isArray(n.mustKnow) || !n.mustKnow.length) bad(`${w}: no mustKnow`);
  if (!Array.isArray(n.examTips) || !n.examTips.length) bad(`${w}: no examTips`);
});
const cardIds = new Set();
CARDS.forEach((c) => {
  if (!c.id || !c.front || !c.back) bad(`card ${c.id || "(no id)"}: missing field`);
  if (cardIds.has(c.id)) bad(`card ${c.id}: DUPLICATE id`);
  cardIds.add(c.id);
});

console.log("\n=== PROBLEMS ===");
if (!problems.length) console.log("None. All checks passed.");
else { problems.forEach((p) => console.log("  ✗ " + p)); console.log(`\n${problems.length} problem(s).`); }
process.exit(problems.length ? 1 : 0);
