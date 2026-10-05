/* Persistence layer. Everything lives in localStorage under the "clf." prefix.
   No network calls - this app is fully offline. */
(function () {
  "use strict";

  const KEYS = {
    seen: "clf.seen",           // qid -> { shown, correct, lastShownAt, lastCorrect, dueAt, box }
    attempts: "clf.attempts",   // array of session summaries, newest last
    flags: "clf.flags",         // qid -> true  (persistent "flag for review")
    settings: "clf.settings",
    checklist: "clf.checklist", // key -> bool
    flash: "clf.flash",         // cardId -> { box, dueAt, seen, correct }
    session: "clf.session"      // in-progress session, for resume-on-reload
  };

  function readJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }
  function writeJSON(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* storage full or blocked */ }
  }

  const Store = {
    getSeen() { return readJSON(KEYS.seen, {}); },
    setSeen(map) { writeJSON(KEYS.seen, map); },

    recordAnswer(qid, wasCorrect) {
      const seen = Store.getSeen();
      const now = Date.now();
      const rec = seen[qid] || { shown: 0, correct: 0, lastShownAt: 0, lastCorrect: null, dueAt: 0, box: 1 };
      rec.shown += 1;
      if (wasCorrect) rec.correct += 1;
      rec.lastShownAt = now;
      rec.lastCorrect = wasCorrect;
      // Leitner-style spacing for the "due for review" pool used by Review mode.
      const gapsDays = [0, 1, 3, 7, 16, 35];
      if (wasCorrect) {
        rec.box = Math.min(5, (rec.box || 1) + 1);
      } else {
        rec.box = 1;
      }
      rec.dueAt = now + gapsDays[rec.box] * 86400000;
      seen[qid] = rec;
      Store.setSeen(seen);
      return rec;
    },

    getAttempts() { return readJSON(KEYS.attempts, []); },
    addAttempt(summary) {
      const list = Store.getAttempts();
      list.push(summary);
      // Cap history so localStorage never balloons.
      if (list.length > 200) list.splice(0, list.length - 200);
      writeJSON(KEYS.attempts, list);
      return list;
    },

    getFlags() { return readJSON(KEYS.flags, {}); },
    toggleFlag(qid) {
      const f = Store.getFlags();
      if (f[qid]) delete f[qid]; else f[qid] = true;
      writeJSON(KEYS.flags, f);
      return !!f[qid];
    },
    isFlagged(qid) { return !!Store.getFlags()[qid]; },

    getSettings() {
      return Object.assign({ theme: "auto", motion: "full" }, readJSON(KEYS.settings, {}));
    },
    setSettings(patch) {
      const s = Object.assign(Store.getSettings(), patch);
      writeJSON(KEYS.settings, s);
      return s;
    },

    getChecklist() { return readJSON(KEYS.checklist, {}); },
    setChecklistItem(key, val) {
      const c = Store.getChecklist();
      c[key] = val;
      writeJSON(KEYS.checklist, c);
      return c;
    },

    getFlashState() { return readJSON(KEYS.flash, {}); },
    recordFlash(cardId, knewIt) {
      const state = Store.getFlashState();
      const now = Date.now();
      const rec = state[cardId] || { box: 1, dueAt: 0, seen: 0, correct: 0 };
      const gapsDays = [0, 0.5, 1, 3, 7, 16, 35];
      rec.seen += 1;
      if (knewIt) { rec.correct += 1; rec.box = Math.min(6, rec.box + 1); }
      else { rec.box = 1; }
      rec.dueAt = now + gapsDays[rec.box] * 86400000;
      state[cardId] = rec;
      writeJSON(KEYS.flash, state);
      return rec;
    },

    getInProgressSession() { return readJSON(KEYS.session, null); },
    saveInProgressSession(session) { writeJSON(KEYS.session, session); },
    clearInProgressSession() { localStorage.removeItem(KEYS.session); },

    exportAll() {
      const out = {};
      Object.values(KEYS).forEach((k) => { out[k] = readJSON(k, null); });
      out._exportedAt = new Date().toISOString();
      return out;
    },
    importAll(obj) {
      Object.entries(KEYS).forEach(([name, k]) => {
        if (obj && obj[k] !== undefined && obj[k] !== null) writeJSON(k, obj[k]);
      });
    },
    resetAll() {
      Object.values(KEYS).forEach((k) => localStorage.removeItem(k));
    }
  };

  window.Store = Store;
})();
