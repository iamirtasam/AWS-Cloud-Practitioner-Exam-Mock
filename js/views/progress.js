(function () {
  "use strict";
  const { el, fmtDate } = U;

  function domainAccuracy() {
    const seen = Store.getSeen();
    return window.BLUEPRINT.domains.map((d) => {
      const pool = Engine.Bank.domainPool(d.n);
      let shown = 0, correct = 0;
      pool.forEach((q) => { const r = seen[q.id]; if (r) { shown += r.shown; correct += r.correct; } });
      return { n: d.n, short: d.short, accuracy: shown ? correct / shown : null, shown };
    });
  }

  function latestReadiness(attempts) {
    const examLike = attempts.filter((a) => a.modeId === "exam" || a.modeId === "marathon" || a.modeId === "sprint");
    const pool = examLike.length ? examLike : attempts;
    if (!pool.length) return null;
    const recent = pool.slice(-3);
    return recent.reduce((s, a) => s + a.pct, 0) / recent.length;
  }

  function render() {
    const root = document.getElementById("viewRoot");
    const attempts = Store.getAttempts();
    const container = el("div", { class: "container wide" });
    container.appendChild(el("div", { class: "page-head" }, [
      el("h1", { text: "Progress" }),
      el("p", { text: "Domain accuracy, your score trend, and an overall readiness estimate based on your most recent attempts." })
    ]));

    const topGrid = el("div", { class: "grid grid-2 mb-16" });

    const gaugeCard = el("div", { class: "card card-pad" });
    gaugeCard.appendChild(el("div", { class: "card-head" }, [el("h3", { text: "Readiness" })]));
    const readiness = latestReadiness(attempts);
    const gaugeHost = el("div");
    gaugeCard.appendChild(gaugeHost);
    topGrid.appendChild(gaugeCard);

    const trendCard = el("div", { class: "card card-pad" });
    trendCard.appendChild(el("div", { class: "card-head" }, [el("h3", { text: "Score trend" }), el("span", { class: "hint", text: `${attempts.length} attempt(s)` })]));
    const trendHost = el("div");
    trendCard.appendChild(trendHost);
    topGrid.appendChild(trendCard);

    container.appendChild(topGrid);

    const domCard = el("div", { class: "card card-pad mb-16" });
    domCard.appendChild(el("div", { class: "card-head" }, [el("h3", { text: "Accuracy by domain" })]));
    const domHost = el("div");
    domCard.appendChild(domHost);
    container.appendChild(domCard);

    const weakCard = el("div", { class: "card card-pad" });
    weakCard.appendChild(el("div", { class: "card-head" }, [el("h3", { text: "Weakest task statements" })]));
    const weak = Engine.weakTasks(3).slice(0, 8);
    if (!weak.length) {
      weakCard.appendChild(el("p", { class: "text-sec text-sm", text: "Answer at least 3 questions in a task statement to see it ranked here." }));
    } else {
      const table = el("table", { class: "results-domain-table" });
      table.appendChild(el("tr", null, [el("th", { text: "Task" }), el("th", { text: "Accuracy" }), el("th", { text: "Answered" }), el("th", { text: "" })]));
      weak.forEach((w) => {
        const drillBtn = el("button", { class: "btn btn-sm", text: "Drill" });
        drillBtn.addEventListener("click", () => navigate(`exam?mode=domain&task=${w.task}`));
        table.appendChild(el("tr", null, [
          el("td", { text: w.task }),
          el("td", { text: Math.round(w.accuracy * 100) + "%" }),
          el("td", { text: String(w.shown) }),
          el("td", null, [drillBtn])
        ]));
      });
      weakCard.appendChild(table);
    }
    container.appendChild(weakCard);

    root.appendChild(container);

    Charts.readinessGauge(gaugeHost, readiness, readiness == null ? null : "Average of your last 3 exam-like attempts.");
    Charts.trendLine(trendHost, attempts.map((a) => ({ date: fmtDate(a.finishedAt), pct: a.pct, mode: a.label })));
    Charts.domainBars(domHost, domainAccuracy());
  }

  window.Views = window.Views || {};
  window.Views.Progress = { render };
})();
