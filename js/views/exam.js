/* The exam runner: single/multi/ordering item types, timer, flag-and-return,
   immediate or end-of-session reveal, and resume-on-reload via Store. */
(function () {
  "use strict";
  const { el, letterFor, inlineMd } = U;

  let session = null; // active in-memory session
  let timer = null;
  let keyHandler = null;

  function modeById(id) { return window.BLUEPRINT.modes.find((m) => m.id === id); }

  function buildNewSession(params) {
    const modeId = params.mode || "practice";
    const mode = modeById(modeId) || modeById("practice");
    let questions = [];
    let label = mode.label;

    if (modeId === "domain") {
      if (params.task) {
        questions = Engine.buildSession({ count: mode.count, taskFilter: [params.task] });
        label = `Domain Drill · ${params.task}`;
      } else if (params.domain) {
        const n = Number(params.domain);
        questions = Engine.buildSession({ count: mode.count, domainFilter: [n] });
        const d = window.BLUEPRINT.domains.find((x) => x.n === n);
        label = `Domain Drill · ${d ? d.short : n}`;
      }
    } else if (modeId === "weak") {
      const tasks = (params.tasks || "").split(",").filter(Boolean);
      questions = Engine.buildSession({ count: mode.count, taskFilter: tasks });
      label = "Weak Areas";
    } else if (modeId === "review") {
      const ids = Engine.missedAndFlaggedIds();
      questions = Engine.buildSession({ count: Math.min(mode.count, ids.length), idPool: ids });
      label = "Missed & Flagged";
    } else if (modeId === "tmpreview") {
      let ids = [];
      try { ids = JSON.parse(sessionStorage.getItem("clf.tmpPool") || "[]"); } catch (e) { ids = []; }
      questions = Engine.buildSession({ count: ids.length, idPool: ids });
      label = "Missed Questions Drill";
    } else {
      questions = Engine.buildSession({ count: mode.count, weighted: mode.weighted });
    }

    questions = questions.map((q) => Engine.withShuffledOptions(q));

    return {
      id: "s" + Date.now(),
      modeId, label,
      reveal: mode.reveal,
      minutes: mode.minutes,
      timeLimitSeconds: mode.minutes ? mode.minutes * 60 : null,
      remainingSeconds: mode.minutes ? mode.minutes * 60 : null,
      questions,
      answers: {},        // index -> { given:[], locked:bool }
      flagged: {},         // index -> true
      currentIndex: 0,
      startedAt: Date.now(),
      finished: false
    };
  }

  function render(params) {
    const root = document.getElementById("viewRoot");

    if (!Engine.Bank.ready) {
      root.appendChild(el("div", { class: "container narrow" }, [emptyBank()]));
      return;
    }

    const resumable = Store.getInProgressSession();
    if (params.resume === "1" && resumable) {
      session = resumable;
    } else if (!session || params.mode) {
      session = buildNewSession(params);
      if (session.questions.length === 0) {
        root.appendChild(el("div", { class: "container narrow" }, [
          el("div", { class: "empty-state" }, [
            el("div", { class: "es-icon" }, [Icons.icon("searchX", 30)]),
            el("h3", { text: "No questions matched this selection" }),
            el("p", { text: "Try a broader domain drill or answer more questions first." }),
            el("button", { class: "btn btn-primary", text: "Back home", onclick: () => navigate("home") })
          ])
        ]));
        return;
      }
      Store.saveInProgressSession(session);
    }

    buildShell(root);
    renderQuestion();
    startTimerIfNeeded();
    installKeyboard();
  }

  // Keyboard shortcuts. In a 90-minute exam, reaching for the mouse for every
  // answer costs real time, so A-E select, 1-5 select, arrows navigate, F flags.
  function installKeyboard() {
    if (keyHandler) document.removeEventListener("keydown", keyHandler);
    keyHandler = (e) => {
      if (!session || session.finished) return;
      if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (!document.querySelector(".exam-shell")) {
        document.removeEventListener("keydown", keyHandler);
        keyHandler = null;
        return;
      }

      const i = session.currentIndex;
      const q = session.questions[i];
      const ans = session.answers[i];
      const locked = !!(ans && ans.locked);

      const key = e.key.toLowerCase();
      const letterIdx = /^[a-e]$/.test(key) ? key.charCodeAt(0) - 97 : -1;
      const numIdx = /^[1-5]$/.test(key) ? Number(key) - 1 : -1;
      const optIdx = letterIdx >= 0 ? letterIdx : numIdx;

      if (optIdx >= 0 && !locked && q.type !== "ordering" && optIdx < q.options.length) {
        e.preventDefault();
        const btns = document.querySelectorAll(".q-option");
        if (btns[optIdx]) btns[optIdx].click();
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        if (i < session.questions.length - 1) { session.currentIndex = i + 1; persistSession(); renderQuestion(); }
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (i > 0) { session.currentIndex = i - 1; persistSession(); renderQuestion(); }
        return;
      }
      if (key === "f") {
        e.preventDefault();
        session.flagged[i] = !session.flagged[i];
        persistSession(); renderQuestion();
        return;
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const submit = Array.from(document.querySelectorAll("button"))
          .find((b) => /Submit answer|Next →|Finish & see results/.test(b.textContent) && !b.disabled);
        if (submit) submit.click();
      }
    };
    document.addEventListener("keydown", keyHandler);
  }

  function emptyBank() {
    return el("div", { class: "empty-state" }, [
      el("div", { class: "es-icon" }, [Icons.icon("package", 30)]),
      el("h3", { text: "Question bank not loaded yet" }),
      el("button", { class: "btn btn-primary", text: "Back home", onclick: () => navigate("home") })
    ]);
  }

  function buildShell(root) {
    const shell = el("div", { class: "exam-shell" });
    const top = el("div", { class: "exam-topbar" });
    top.appendChild(el("div", { class: "exam-progress-txt", id: "examProgressTxt" }));
    top.appendChild(el("div", { class: "spacer" }));
    if (session.timeLimitSeconds) {
      top.appendChild(el("div", { class: "exam-timer", id: "examTimer" }, [Icons.icon("clock", 15), el("span", { id: "examTimerVal" })]));
    }
    top.appendChild(el("span", { class: "text-sm text-muted kbd-hint", text: "A-E select · ← → navigate · F flag · Enter next" }));
    const exitBtn = el("button", { class: "btn btn-sm", text: "Exit" });
    exitBtn.addEventListener("click", confirmExit);
    top.appendChild(exitBtn);
    shell.appendChild(top);

    const body = el("div", { class: "exam-body" });
    body.appendChild(el("div", { class: "exam-main", id: "examMain" }));
    shell.appendChild(body);

    const footer = el("div", { class: "exam-footer", id: "examFooter" });
    shell.appendChild(footer);

    root.appendChild(shell);
    renderFooterDots();
    updateProgressTxt();
  }

  function updateProgressTxt() {
    const el2 = document.getElementById("examProgressTxt");
    if (el2) el2.textContent = `${session.label} · Question ${session.currentIndex + 1} of ${session.questions.length}`;
  }

  function renderFooterDots() {
    const footer = document.getElementById("examFooter");
    if (!footer) return;
    footer.innerHTML = "";
    session.questions.forEach((q, i) => {
      const ans = session.answers[i];
      const classes = ["nav-dot"];
      if (i === session.currentIndex) classes.push("current");
      if (session.flagged[i]) classes.push("flagged");
      if (ans) {
        classes.push("answered");
        if (session.reveal === "immediate" && ans.locked) {
          classes.push(ans.correct ? "correct" : "incorrect");
        }
      }
      const dot = el("button", { class: classes.join(" "), text: String(i + 1), title: `Question ${i + 1}` });
      dot.addEventListener("click", () => { session.currentIndex = i; persistSession(); renderQuestion(); });
      footer.appendChild(dot);
    });
  }

  function persistSession() { Store.saveInProgressSession(session); }

  function startTimerIfNeeded() {
    if (!session.timeLimitSeconds || session.finished) return;
    if (timer) timer.stop();
    // Paint the starting value immediately; the Timer only fires after 1s.
    const initEl = document.getElementById("examTimerVal");
    if (initEl) initEl.textContent = Engine.formatClock(session.remainingSeconds);
    timer = new Engine.Timer(session.remainingSeconds, (rem) => {
      session.remainingSeconds = rem;
      const valEl = document.getElementById("examTimerVal");
      const wrapEl = document.getElementById("examTimer");
      if (valEl) valEl.textContent = Engine.formatClock(rem);
      if (wrapEl) wrapEl.classList.toggle("low", rem <= 300);
      if (rem % 15 === 0) persistSession();
    }, () => {
      U.toast("Time is up. Submitting your exam.");
      finishSession();
    });
    timer.start();
  }

  // ---------------------------------------------------------------- Rendering a question

  function renderQuestion() {
    updateProgressTxt();
    renderFooterDots();
    const main = document.getElementById("examMain");
    main.innerHTML = "";
    const i = session.currentIndex;
    const q = session.questions[i];
    const ans = session.answers[i];
    // Only lock after an explicit submit (immediate-feedback modes). In exam-style
    // end-reveal modes the candidate must be able to change an answer right up
    // until they finish the session, exactly like the real exam.
    const locked = !!(ans && ans.locked);
    const revealNow = session.reveal === "immediate" && ans && ans.locked;

    const metaRow = el("div", { class: "q-meta-row" });
    metaRow.appendChild(el("span", { class: "pill", text: `Domain ${q.domain}` }));
    metaRow.appendChild(el("span", { class: "tag", text: q.task }));
    metaRow.appendChild(el("span", { class: "tag", text: q.difficulty }));
    const isFlagged = !!session.flagged[i];
    const flagBtn = el("button", { class: "btn btn-sm btn-ghost" }, [
      Icons.icon(isFlagged ? "flagFilled" : "flag", 14),
      el("span", { text: isFlagged ? "Flagged" : "Flag" })
    ]);
    flagBtn.style.marginLeft = "auto";
    flagBtn.addEventListener("click", () => {
      session.flagged[i] = !session.flagged[i];
      persistSession();
      renderQuestion();
    });
    metaRow.appendChild(flagBtn);
    main.appendChild(metaRow);

    main.appendChild(el("div", { class: "q-num", text: `Question ${i + 1} of ${session.questions.length}` }));
    const stemHtml = inlineMd(q.stem);
    main.appendChild(el("div", { class: "q-stem", html: stemHtml }));

    if (q.type === "ordering") {
      main.appendChild(renderOrdering(q, i, ans, locked, revealNow));
    } else {
      main.appendChild(renderChoice(q, i, ans, locked, revealNow));
    }

    if (revealNow) {
      main.appendChild(renderFeedback(q, ans));
    }

    main.appendChild(renderActionRow(i, ans, locked));
  }

  function renderChoice(q, i, ans, locked, revealNow) {
    const isMulti = q.type === "multi";
    const wrap = el("div", { class: "q-options" });
    const given = ans ? ans.given.slice() : [];

    q.options.forEach((opt, oi) => {
      const isSelected = given.includes(oi);
      const isCorrectOpt = q.answer.includes(oi);
      const classes = ["q-option"];
      if (!isMulti) classes.push("round");
      if (isSelected && !revealNow) classes.push("selected");
      if (revealNow) {
        if (isCorrectOpt) classes.push("correct");
        else if (isSelected) classes.push("incorrect");
      }
      if (locked) classes.push("locked");

      const btn = el("button", { class: classes.join(" "), type: "button" });
      btn.appendChild(el("span", { class: "opt-mark", text: revealNow && isCorrectOpt ? "✓" : (revealNow && isSelected ? "✕" : letterFor(oi)) }));
      const textWrap = el("span", { class: "opt-text" });
      textWrap.appendChild(el("span", { html: inlineMd(opt) }));
      if (revealNow && q.rationales && q.rationales[oi] && !isCorrectOpt) {
        textWrap.appendChild(el("span", { class: "opt-rationale", text: q.rationales[oi] }));
      }
      btn.appendChild(textWrap);
      btn.disabled = locked;

      if (!locked) {
        btn.addEventListener("click", () => {
          let next = given.slice();
          if (isMulti) {
            const pos = next.indexOf(oi);
            if (pos >= 0) next.splice(pos, 1);
            else {
              next.push(oi);
              if (next.length > q.answer.length) next.shift();
            }
          } else {
            next = [oi];
          }
          session.answers[i] = Object.assign({}, session.answers[i], { given: next, locked: false });
          persistSession();
          renderQuestion();
        });
      }
      wrap.appendChild(btn);
    });

    if (isMulti) {
      const hint = el("div", { class: "text-sm text-muted mt-8", text: `Select exactly ${q.answer.length}. ${given.length}/${q.answer.length} selected.` });
      wrap.appendChild(hint);
    }
    return wrap;
  }

  function renderOrdering(q, i, ans, locked, revealNow) {
    const wrap = el("div");
    const order = ans && ans.given ? ans.given.slice() : q.options.map((_, idx) => idx);
    const list = el("div", { class: "order-list" });

    function draw() {
      list.innerHTML = "";
      order.forEach((optIdx, pos) => {
        const isRight = revealNow && q._correctDisplayOrder[pos] === optIdx;
        const classes = ["order-item"];
        if (revealNow) classes.push(isRight ? "correct-pos" : "wrong-pos");
        const item = el("div", { class: classes.join(" "), draggable: locked ? "false" : "true", "data-pos": pos });
        item.appendChild(el("span", { class: "order-num", text: String(pos + 1) }));
        item.appendChild(el("span", { class: "drag-handle", text: "⠿" }));
        item.appendChild(el("span", { text: q.options[optIdx], style: "flex:1" }));
        if (!locked) {
          const ctrls = el("div", { class: "order-controls" });
          const up = el("button", { class: "btn btn-sm", text: "↑" });
          up.disabled = pos === 0;
          up.addEventListener("click", () => { [order[pos - 1], order[pos]] = [order[pos], order[pos - 1]]; commit(); draw(); });
          const down = el("button", { class: "btn btn-sm", text: "↓" });
          down.disabled = pos === order.length - 1;
          down.addEventListener("click", () => { [order[pos + 1], order[pos]] = [order[pos], order[pos + 1]]; commit(); draw(); });
          ctrls.appendChild(up); ctrls.appendChild(down);
          item.appendChild(ctrls);

          item.addEventListener("dragstart", () => item.classList.add("dragging"));
          item.addEventListener("dragend", () => item.classList.remove("dragging"));
          item.addEventListener("dragover", (e) => e.preventDefault());
          item.addEventListener("drop", (e) => {
            e.preventDefault();
            const draggingEl = list.querySelector(".dragging");
            if (!draggingEl || draggingEl === item) return;
            const fromPos = Number(draggingEl.getAttribute("data-pos"));
            const toPos = pos;
            const [moved] = order.splice(fromPos, 1);
            order.splice(toPos, 0, moved);
            commit(); draw();
          });
        }
        list.appendChild(item);
      });
    }
    function commit() {
      session.answers[i] = Object.assign({}, session.answers[i], { given: order.slice(), locked: false });
      persistSession();
    }
    draw();
    wrap.appendChild(el("div", { class: "text-sm text-muted mb-8", text: "Drag rows, or use the arrows, to put them in the correct order." }));
    wrap.appendChild(list);
    return wrap;
  }

  function renderFeedback(q, ans) {
    const ok = Engine.isCorrect(q, ans.given);
    const panel = el("div", { class: `q-feedback-panel ${ok ? "ok" : "no"}` });
    panel.appendChild(el("div", { class: "fb-head", text: ok ? "✓ Correct" : "✕ Not quite" }));
    panel.appendChild(el("div", { html: inlineMd(q.explanation) }));
    if (q.tags && q.tags.length) {
      const tagRow = el("div", { class: "fb-tags" });
      q.tags.forEach((t) => tagRow.appendChild(el("span", { class: "tag", text: t })));
      panel.appendChild(tagRow);
    }
    return panel;
  }

  function renderActionRow(i, ans, locked) {
    const row = el("div", { class: "q-action-row" });
    const left = el("div", { class: "btn-row" });
    const prev = el("button", { class: "btn", text: "← Previous" });
    prev.disabled = i === 0;
    prev.addEventListener("click", () => { session.currentIndex = Math.max(0, i - 1); persistSession(); renderQuestion(); });
    left.appendChild(prev);
    row.appendChild(left);

    const right = el("div", { class: "btn-row" });

    if (session.reveal === "immediate" && !locked) {
      const submitBtn = el("button", { class: "btn btn-primary", text: "Submit answer" });
      const q = session.questions[i];
      const hasAnswer = ans && ans.given && ans.given.length && (q.type !== "multi" || ans.given.length === q.answer.length);
      submitBtn.disabled = !hasAnswer;
      submitBtn.addEventListener("click", () => {
        const correct = Engine.isCorrect(q, ans.given);
        session.answers[i] = Object.assign({}, ans, { locked: true, correct });
        Store.recordAnswer(q.id, correct);
        persistSession();
        renderQuestion();
      });
      right.appendChild(submitBtn);
    } else if (i < session.questions.length - 1) {
      const next = el("button", { class: "btn btn-primary", text: "Next →" });
      next.addEventListener("click", () => { session.currentIndex = i + 1; persistSession(); renderQuestion(); });
      right.appendChild(next);
    } else {
      const finish = el("button", { class: "btn btn-primary", text: "Finish & see results" });
      finish.addEventListener("click", finishSession);
      right.appendChild(finish);
    }
    row.appendChild(right);
    return row;
  }

  function confirmExit() {
    const overlay = el("div", { class: "modal-overlay" });
    const modal = el("div", { class: "modal" });
    modal.appendChild(el("h2", { text: "Exit this session?" }));
    modal.appendChild(el("p", { text: "Your progress is saved and you can resume later from Home, but leaving now will not score this attempt." }));
    const actions = el("div", { class: "modal-actions" });
    const stay = el("button", { class: "btn", text: "Keep going" });
    stay.addEventListener("click", () => document.body.removeChild(overlay));
    const leave = el("button", { class: "btn btn-danger", text: "Exit to home" });
    leave.addEventListener("click", () => { if (timer) timer.stop(); document.body.removeChild(overlay); navigate("home"); });
    actions.appendChild(stay); actions.appendChild(leave);
    modal.appendChild(actions);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  }

  function finishSession() {
    if (timer) timer.stop();
    session.finished = true;
    session.finishedAt = Date.now();

    // Score everything, recording any never-locked (end-reveal) answers now.
    let correctCount = 0;
    const domainTally = {};
    const taskTally = {};
    session.questions.forEach((q, i) => {
      const ans = session.answers[i] || { given: [] };
      const correct = Engine.isCorrect(q, ans.given);
      if (!ans.scored) {
        Store.recordAnswer(q.id, correct);
        ans.scored = true;
      }
      ans.correct = correct;
      session.answers[i] = ans;
      if (correct) correctCount += 1;
      domainTally[q.domain] = domainTally[q.domain] || { correct: 0, total: 0 };
      domainTally[q.domain].total += 1;
      if (correct) domainTally[q.domain].correct += 1;
      taskTally[q.task] = taskTally[q.task] || { correct: 0, total: 0 };
      taskTally[q.task].total += 1;
      if (correct) taskTally[q.task].correct += 1;
    });

    const pct = (correctCount / session.questions.length) * 100;
    const summary = {
      id: session.id,
      modeId: session.modeId,
      label: session.label,
      total: session.questions.length,
      correct: correctCount,
      pct,
      domainTally, taskTally,
      startedAt: session.startedAt,
      finishedAt: session.finishedAt,
      timedOut: session.timeLimitSeconds ? session.remainingSeconds <= 0 : false
    };
    Store.addAttempt(summary);

    window._lastSession = session; // for the results view's review list
    Store.clearInProgressSession();
    navigate(`results?id=${session.id}`);
  }

  window.Views = window.Views || {};
  window.Views.Exam = { render };
})();
