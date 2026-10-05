/* Core exam engine: question bank access, weighted rotation-aware selection,
   session state machine, scoring, and the timer. No framework - plain objects
   + callbacks, consumed by js/views/*.js. */
(function () {
  "use strict";

  // ---------------------------------------------------------------- Bank

  const Bank = {
    all: [],       // flat list of every question, every source file
    byId: new Map(),
    byDomain: new Map(),  // domain(n) -> [] questions
    byTask: new Map(),    // task("1.1") -> [] questions
    ready: false,

    init() {
      const raw = (window.QBANK || []);
      this.all = raw;
      raw.forEach((q) => {
        this.byId.set(q.id, q);
        if (!this.byDomain.has(q.domain)) this.byDomain.set(q.domain, []);
        this.byDomain.get(q.domain).push(q);
        if (!this.byTask.has(q.task)) this.byTask.set(q.task, []);
        this.byTask.get(q.task).push(q);
      });
      this.ready = raw.length > 0;
      return this;
    },

    get(id) { return this.byId.get(id); },
    domainPool(n) { return this.byDomain.get(n) || []; },
    taskPool(t) { return this.byTask.get(t) || []; },
    count() { return this.all.length; }
  };

  // -------------------------------------------------------- Selection / rotation

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Rank a pool of questions for "freshest first" selection: never-shown beats
  // shown-long-ago beats shown-recently. This is what makes repeat sessions
  // rotate through the bank instead of drilling the same handful of items.
  function rankByFreshness(pool, seenMap) {
    const now = Date.now();
    return pool
      .map((q) => {
        const rec = seenMap[q.id];
        const lastShownAt = rec ? rec.lastShownAt : 0;
        const shown = rec ? rec.shown : 0;
        // Small random jitter so ties (e.g. many never-seen items) don't sort
        // in file order every time.
        const jitter = Math.random() * 1000;
        return { q, key: shown === 0 ? -1 : lastShownAt, shown, jitter };
      })
      .sort((a, b) => {
        if (a.shown === 0 && b.shown !== 0) return -1;
        if (b.shown === 0 && a.shown !== 0) return 1;
        if (a.key !== b.key) return a.key - b.key; // older lastShownAt first
        return a.jitter - b.jitter;
      })
      .map((x) => x.q);
  }

  // Split N across domains by blueprint weight, largest-remainder method so
  // the total always sums exactly to N.
  function splitByWeight(n, domains) {
    const raw = domains.map((d) => (n * d.weight) / 100);
    const base = raw.map(Math.floor);
    let used = base.reduce((s, x) => s + x, 0);
    let remaining = n - used;
    const order = raw
      .map((v, i) => ({ i, frac: v - Math.floor(v) }))
      .sort((a, b) => b.frac - a.frac);
    let k = 0;
    while (remaining > 0 && k < order.length) {
      base[order[k].i] += 1;
      remaining -= 1;
      k += 1;
    }
    return base; // aligned with domains[]
  }

  /**
   * Build a session's question list.
   * opts: { count, weighted, domainFilter: [n], taskFilter: [id], idPool: [id] }
   * idPool, when given, restricts selection to exactly those ids (used by
   * Weak Areas / Missed & Flagged modes) - freshness ranking still applies
   * within it so repeats of that pool also rotate.
   */
  function buildSession(opts) {
    const seen = Store.getSeen();
    const blueprint = window.BLUEPRINT;
    let candidatePool;

    if (opts.idPool) {
      candidatePool = opts.idPool.map((id) => Bank.get(id)).filter(Boolean);
    } else if (opts.taskFilter && opts.taskFilter.length) {
      candidatePool = opts.taskFilter.flatMap((t) => Bank.taskPool(t));
    } else if (opts.domainFilter && opts.domainFilter.length) {
      candidatePool = opts.domainFilter.flatMap((n) => Bank.domainPool(n));
    } else {
      candidatePool = Bank.all;
    }

    const count = Math.min(opts.count, candidatePool.length || opts.count);
    if (candidatePool.length === 0) return [];

    let picked = [];

    if (opts.weighted && !opts.idPool && !(opts.taskFilter && opts.taskFilter.length)) {
      const domains = blueprint.domains.filter((d) =>
        !opts.domainFilter || opts.domainFilter.includes(d.n)
      );
      const totalWeight = domains.reduce((s, d) => s + d.weight, 0);
      const normDomains = domains.map((d) => ({ ...d, weight: (d.weight / totalWeight) * 100 }));
      const perDomain = splitByWeight(count, normDomains);

      normDomains.forEach((d, i) => {
        const pool = Bank.domainPool(d.n);
        const ranked = rankByFreshness(pool, seen);
        picked.push(...ranked.slice(0, perDomain[i]));
      });

      // If any domain's pool was smaller than its quota, backfill from the
      // overall freshest-ranked remainder so we still hit `count`.
      if (picked.length < count) {
        const pickedIds = new Set(picked.map((q) => q.id));
        const remainder = rankByFreshness(candidatePool.filter((q) => !pickedIds.has(q.id)), seen);
        picked.push(...remainder.slice(0, count - picked.length));
      }
    } else {
      picked = rankByFreshness(candidatePool, seen).slice(0, count);
    }

    return shuffle(picked).slice(0, count);
  }

  // Shuffle option order per question per attempt (with ordering-type items,
  // this scrambles the *displayed* sequence while answer[] stays a set of
  // indices into `options` as authored - we remap both together).
  function withShuffledOptions(q) {
    if (q.type === "ordering") {
      const idx = shuffle(q.options.map((_, i) => i));
      // idx[displayPos] = originalIndex. Correct display order = positions of
      // answer[] entries within idx.
      const options = idx.map((oi) => q.options[oi]);
      const correctOrder = q.answer.map((origIdx) => idx.indexOf(origIdx));
      return Object.assign({}, q, { options, _correctDisplayOrder: correctOrder, _origIndex: idx });
    }
    const idx = shuffle(q.options.map((_, i) => i));
    const options = idx.map((oi) => q.options[oi]);
    const rationales = idx.map((oi) => (q.rationales || [])[oi] || "");
    const answer = q.answer.map((origIdx) => idx.indexOf(origIdx)).sort((a, b) => a - b);
    return Object.assign({}, q, { options, rationales, answer, _origIndex: idx });
  }

  // ------------------------------------------------------------------ Scoring

  function isCorrect(q, given) {
    if (q.type === "ordering") {
      const target = q._correctDisplayOrder || q.answer;
      if (!given || given.length !== target.length) return false;
      return given.every((v, i) => v === target[i]);
    }
    const target = (q.answer || []).slice().sort((a, b) => a - b);
    const g = (given || []).slice().sort((a, b) => a - b);
    if (g.length !== target.length) return false;
    return g.every((v, i) => v === target[i]);
  }

  // -------------------------------------------------------------------- Timer

  function Timer(totalSeconds, onTick, onDone) {
    this.total = totalSeconds;
    this.remaining = totalSeconds;
    this.onTick = onTick;
    this.onDone = onDone;
    this.handle = null;
  }
  Timer.prototype.start = function () {
    if (this.handle) return;
    const tick = () => {
      this.remaining -= 1;
      if (this.onTick) this.onTick(this.remaining);
      if (this.remaining <= 0) {
        this.stop();
        if (this.onDone) this.onDone();
        return;
      }
      this.handle = setTimeout(tick, 1000);
    };
    this.handle = setTimeout(tick, 1000);
  };
  Timer.prototype.stop = function () {
    if (this.handle) { clearTimeout(this.handle); this.handle = null; }
  };
  Timer.prototype.addSeconds = function (s) { this.remaining += s; };

  function formatClock(seconds) {
    const s = Math.max(0, Math.round(seconds));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    const pad = (n) => String(n).padStart(2, "0");
    return h > 0 ? `${h}:${pad(m)}:${pad(sec)}` : `${pad(m)}:${pad(sec)}`;
  }

  // -------------------------------------------------------------- Weak areas

  // Aggregate per-task accuracy from stored attempts to find weak spots.
  function weakTasks(minAttempts) {
    const seen = Store.getSeen();
    const byTask = new Map();
    Object.entries(seen).forEach(([qid, rec]) => {
      const q = Bank.get(qid);
      if (!q) return;
      if (!byTask.has(q.task)) byTask.set(q.task, { shown: 0, correct: 0, domain: q.domain });
      const t = byTask.get(q.task);
      t.shown += rec.shown;
      t.correct += rec.correct;
    });
    const out = [];
    byTask.forEach((v, task) => {
      if (v.shown >= (minAttempts || 1)) {
        out.push({ task, domain: v.domain, accuracy: v.correct / v.shown, shown: v.shown });
      }
    });
    return out.sort((a, b) => a.accuracy - b.accuracy);
  }

  function missedAndFlaggedIds() {
    const seen = Store.getSeen();
    const flags = Store.getFlags();
    const now = Date.now();
    const ids = new Set();
    Object.keys(flags).forEach((id) => ids.add(id));
    Object.entries(seen).forEach(([id, rec]) => {
      if (rec.lastCorrect === false) ids.add(id);
      else if (rec.dueAt && rec.dueAt <= now) ids.add(id);
    });
    return Array.from(ids).filter((id) => Bank.get(id));
  }

  window.Engine = {
    Bank, buildSession, withShuffledOptions, isCorrect,
    Timer, formatClock, weakTasks, missedAndFlaggedIds, shuffle, splitByWeight
  };
})();
