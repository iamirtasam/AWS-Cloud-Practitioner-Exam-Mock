(function () {
  "use strict";
  const { el, fmtDateTime } = U;

  // Mode id -> icon name in js/icons.js
  const ICONS = { exam: "exam", practice: "practice", sprint: "sprint", domain: "domain", weak: "weak", review: "review", marathon: "marathon" };

  function overallStats() {
    const seen = Store.getSeen();
    const total = Engine.Bank.count();
    const shownIds = Object.keys(seen).filter((id) => Engine.Bank.get(id));
    const attempts = Store.getAttempts();
    const lastExam = attempts.filter((a) => a.modeId === "exam").slice(-1)[0];
    let correctTotal = 0, shownTotal = 0;
    shownIds.forEach((id) => { correctTotal += seen[id].correct; shownTotal += seen[id].shown; });
    return {
      total, seenCount: shownIds.length,
      coverage: total ? Math.round((shownIds.length / total) * 100) : 0,
      accuracy: shownTotal ? Math.round((correctTotal / shownTotal) * 100) : null,
      lastExam,
      dueCount: Engine.missedAndFlaggedIds().length
    };
  }

  function render() {
    const root = document.getElementById("viewRoot");
    // Clear here too, so render() is safe to call directly (e.g. after discarding
    // a saved session) and not only via the router.
    root.innerHTML = "";
    const bp = window.BLUEPRINT;
    const stats = overallStats();

    const container = el("div", { class: "container wide" });
    container.appendChild(el("div", { class: "page-head" }, [
      el("h1", { text: "AWS Certified Cloud Practitioner (CLF-C02)" }),
      el("p", { text: `${bp.format.totalQuestions} questions · ${bp.format.minutes} minutes · pass at ${bp.format.passingScore}/${bp.format.scaleMax} · ${Engine.Bank.count()} practice questions in rotation across ${bp.domains.length} domains.` })
    ]));

    if (!Engine.Bank.ready) {
      container.appendChild(el("div", { class: "card card-pad mb-16" }, [
        el("div", { class: "empty-state" }, [
          el("div", { class: "es-icon" }, [Icons.icon("package", 30)]),
          el("h3", { text: "Question bank still loading" }),
          el("p", { text: "If this persists, the data/*.js files may still be generating. Refresh in a bit." })
        ])
      ]));
    }

    // An interrupted session is saved to storage; without this banner it would
    // be stranded there with no way back into it.
    const saved = Store.getInProgressSession();
    if (saved && !saved.finished && saved.questions && saved.questions.length) {
      const answered = Object.keys(saved.answers || {}).length;
      const banner = el("div", { class: "card card-pad mb-16", style: "border-color:var(--accent)" });
      const row = el("div", { class: "flex items-center justify-between gap-12", style: "flex-wrap:wrap" });
      row.appendChild(el("div", null, [
        el("div", { style: "font-weight:650;font-size:14px", text: `Unfinished session: ${saved.label}` }),
        el("div", { class: "text-sec text-sm", text: `${answered} of ${saved.questions.length} answered${saved.timeLimitSeconds ? ` · ${Engine.formatClock(saved.remainingSeconds)} left` : ""}` })
      ]));
      const btns = el("div", { class: "btn-row" });
      const resume = el("button", { class: "btn btn-primary", text: "Resume" });
      resume.addEventListener("click", () => navigate("exam?resume=1"));
      const discard = el("button", { class: "btn btn-danger", text: "Discard" });
      discard.addEventListener("click", () => { Store.clearInProgressSession(); render(); });
      btns.appendChild(resume); btns.appendChild(discard);
      row.appendChild(btns);
      banner.appendChild(row);
      container.appendChild(banner);
    }

    // Quick stat row
    const statRow = el("div", { class: "grid grid-4 mb-16" });
    statRow.appendChild(statTile("Bank coverage", `${stats.coverage}%`, `${stats.seenCount}/${stats.total} questions seen`));
    statRow.appendChild(statTile("Accuracy so far", stats.accuracy == null ? "—" : `${stats.accuracy}%`, "Across every question answered"));
    statRow.appendChild(statTile("Due for review", String(stats.dueCount), "Missed, flagged, or due"));
    statRow.appendChild(statTile("Last exam attempt", stats.lastExam ? Math.round(stats.lastExam.pct) + "%" : "—", stats.lastExam ? fmtDateTime(stats.lastExam.finishedAt) : "Take your first full exam"));
    container.appendChild(statRow);

    container.appendChild(el("div", { class: "page-head" }, [el("h1", { text: "Choose a session", style: "font-size:16px" })]));
    const grid = el("div", { class: "mode-grid" });
    bp.modes.forEach((m) => grid.appendChild(modeCard(m)));
    container.appendChild(grid);

    root.appendChild(container);
  }

  function statTile(label, value, sub) {
    return el("div", { class: "card stat-tile" }, [
      el("div", { class: "label", text: label }),
      el("div", { class: "value", text: value }),
      el("div", { class: "delta flat", text: sub })
    ]);
  }

  function modeCard(m) {
    const card = el("div", { class: "mode-card" });
    card.appendChild(el("div", { class: "m-icon" }, [Icons.icon(ICONS[m.id] || "file")]));
    card.appendChild(el("div", { class: "m-title", text: m.label }));
    card.appendChild(el("div", { class: "m-desc", text: m.desc }));
    const meta = el("div", { class: "m-meta" });
    meta.appendChild(el("span", { text: `${m.count} questions` }));
    if (m.minutes) meta.appendChild(el("span", { text: `${m.minutes} min` }));
    meta.appendChild(el("span", { text: m.reveal === "immediate" ? "Instant feedback" : "Reveal at end" }));
    card.appendChild(meta);
    card.addEventListener("click", () => startModeFlow(m));
    return card;
  }

  function startModeFlow(m) {
    if (m.id === "domain") { openDomainPicker(m); return; }
    if (m.id === "weak") {
      const weak = Engine.weakTasks(3);
      if (!weak.length) { U.toast("Answer at least a few questions per task first so weak areas can be found."); return; }
      const worstTasks = weak.slice(0, 4).map((w) => w.task);
      navigate(`exam?mode=weak&tasks=${worstTasks.join(",")}`);
      return;
    }
    if (m.id === "review") {
      const ids = Engine.missedAndFlaggedIds();
      if (!ids.length) { U.toast("Nothing missed or flagged yet - clean slate."); return; }
      navigate(`exam?mode=review`);
      return;
    }
    navigate(`exam?mode=${m.id}`);
  }

  function openDomainPicker(m) {
    const overlay = el("div", { class: "modal-overlay" });
    const modal = el("div", { class: "modal" });
    modal.appendChild(el("h2", { text: "Domain Drill" }));
    modal.appendChild(el("p", { text: "Pick a domain, or drill a single task statement." }));
    const list = el("div", { class: "flex-col gap-8 mb-16" });
    window.BLUEPRINT.domains.forEach((d) => {
      const row = el("div");
      const btn = el("button", { class: "btn btn-block", style: "justify-content:space-between" }, [
        el("span", { text: `Domain ${d.n} · ${d.short}` }),
        el("span", { class: "text-muted text-sm", text: `${d.weight}%` })
      ]);
      btn.addEventListener("click", () => { document.body.removeChild(overlay); navigate(`exam?mode=domain&domain=${d.n}`); });
      row.appendChild(btn);
      const taskRow = el("div", { class: "btn-row mt-8", style: "margin-left:8px" });
      d.tasks.forEach((t) => {
        const tb = el("button", { class: "btn btn-sm", text: t.id, title: t.title });
        tb.addEventListener("click", () => { document.body.removeChild(overlay); navigate(`exam?mode=domain&task=${t.id}`); });
        taskRow.appendChild(tb);
      });
      row.appendChild(taskRow);
      list.appendChild(row);
    });
    modal.appendChild(list);
    const actions = el("div", { class: "modal-actions" });
    const cancel = el("button", { class: "btn", text: "Cancel" });
    cancel.addEventListener("click", () => document.body.removeChild(overlay));
    actions.appendChild(cancel);
    modal.appendChild(actions);
    overlay.appendChild(modal);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) document.body.removeChild(overlay); });
    document.body.appendChild(overlay);
  }

  window.Views = window.Views || {};
  window.Views.Home = { render };
})();
