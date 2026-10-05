(function () {
  "use strict";
  const { el, letterFor, inlineMd } = U;

  function render(params) {
    const root = document.getElementById("viewRoot");
    const session = window._lastSession;
    if (!session) {
      root.appendChild(el("div", { class: "container narrow" }, [
        el("div", { class: "empty-state" }, [
          el("h3", { text: "No recent session to show" }),
          el("button", { class: "btn btn-primary", text: "Back home", onclick: () => navigate("home") })
        ])
      ]));
      return;
    }

    const summary = Store.getAttempts().find((a) => a.id === session.id) || {};
    const band = Charts.bandFor(summary.pct);

    const container = el("div", { class: "container" });
    container.appendChild(el("div", { class: "crumb" }, [el("a", { text: "← Home", href: "#/home" })]));
    container.appendChild(el("div", { class: "page-head" }, [
      el("h1", { text: session.label + " · Results" }),
      el("p", { text: summary.timedOut ? "Time expired before you finished - unanswered questions were scored as incorrect." : "Here is how it went." })
    ]));

    const heroCard = el("div", { class: "card card-pad mb-16" });
    const hero = el("div", { class: "score-hero" });
    hero.appendChild(el("div", null, [
      el("div", { class: "flex items-center gap-8" }, [
        el("span", { class: "score-num", text: Math.round(summary.pct) + "%" }),
        el("span", { class: "score-of", text: `${summary.correct}/${summary.total} correct` })
      ]),
      el("div", { class: `pill ${band.tone} mt-8`, text: band.band })
    ]));
    const gaugeHost = el("div");
    hero.appendChild(gaugeHost);
    heroCard.appendChild(hero);
    heroCard.appendChild(el("p", { class: "text-sec text-sm mt-12", text: band.note }));
    container.appendChild(heroCard);
    Charts.readinessGauge(gaugeHost, summary.pct, null);

    // Domain breakdown table
    const domCard = el("div", { class: "card card-pad mb-16" });
    domCard.appendChild(el("div", { class: "card-head" }, [el("h3", { text: "By domain" })]));
    const table = el("table", { class: "results-domain-table" });
    table.appendChild(el("tr", null, [el("th", { text: "Domain" }), el("th", { text: "Correct" }), el("th", { text: "Accuracy" })]));
    window.BLUEPRINT.domains.forEach((d) => {
      const t = summary.domainTally && summary.domainTally[d.n];
      if (!t) return;
      const pct = Math.round((t.correct / t.total) * 100);
      table.appendChild(el("tr", null, [
        el("td", { text: `D${d.n} · ${d.short}` }),
        el("td", { text: `${t.correct}/${t.total}` }),
        el("td", { text: pct + "%" })
      ]));
    });
    domCard.appendChild(table);
    container.appendChild(domCard);

    // Actions
    const actions = el("div", { class: "btn-row mb-16" });
    const retakeBtn = el("button", { class: "btn btn-primary", text: "New session" });
    retakeBtn.addEventListener("click", () => navigate("home"));
    actions.appendChild(retakeBtn);
    const missed = session.questions.filter((q, i) => !session.answers[i] || !session.answers[i].correct);
    if (missed.length) {
      const drillBtn = el("button", { class: "btn", text: `Drill the ${missed.length} you missed` });
      drillBtn.addEventListener("click", () => {
        window._weakDrillIds = missed.map((q) => q.id);
        const ids = missed.map((q) => q.id);
        Engine._tmpPool = ids;
        navigateWithPool(ids);
      });
      actions.appendChild(drillBtn);
    }
    container.appendChild(actions);

    // Full review
    const reviewCard = el("div", { class: "card card-pad" });
    reviewCard.appendChild(el("div", { class: "card-head" }, [el("h3", { text: "Full review" }), el("span", { class: "hint", text: `${session.questions.length} questions` })]));
    session.questions.forEach((q, i) => reviewCard.appendChild(reviewItem(q, i, session.answers[i])));
    container.appendChild(reviewCard);

    root.appendChild(container);
  }

  function navigateWithPool(ids) {
    // Simple bridge: stash ids on window and let exam.js pick them up via idPool mode.
    sessionStorage.setItem("clf.tmpPool", JSON.stringify(ids));
    navigate("exam?mode=tmpreview");
  }

  function reviewItem(q, i, ans) {
    const given = ans ? ans.given || [] : [];
    const correct = ans ? !!ans.correct : false;
    const item = el("div", { class: "review-item" });
    const head = el("div", { class: "flex items-center gap-8" }, [
      el("span", { class: `pill ${correct ? "good" : "critical"}`, text: correct ? "Correct" : "Missed" }),
      el("span", { class: "tag", text: q.task }),
      el("span", { class: "text-muted text-sm", text: `Question ${i + 1}` })
    ]);
    item.appendChild(head);
    item.appendChild(el("div", { class: "ri-stem", html: inlineMd(q.stem) }));

    if (q.type === "ordering") {
      const target = q._correctDisplayOrder || q.answer;
      target.forEach((optIdx, pos) => {
        item.appendChild(el("div", { class: "ri-opt correct", text: `${pos + 1}. ${q.options[optIdx]}` }));
      });
    } else {
      q.options.forEach((opt, oi) => {
        const isCorrectOpt = q.answer.includes(oi);
        const wasGiven = given.includes(oi);
        if (!isCorrectOpt && !wasGiven) return;
        const cls = isCorrectOpt ? "correct" : "incorrect";
        item.appendChild(el("div", { class: `ri-opt ${cls}`, text: `${letterFor(oi)}. ${opt}${wasGiven && !isCorrectOpt ? "  (your answer)" : ""}` }));
      });
    }
    item.appendChild(el("div", { class: "ri-explain", html: inlineMd(q.explanation) }));
    return item;
  }

  window.Views = window.Views || {};
  window.Views.Results = { render };
})();
