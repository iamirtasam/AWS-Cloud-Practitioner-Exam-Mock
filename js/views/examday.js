(function () {
  "use strict";
  const { el, inlineMd } = U;

  function render() {
    const root = document.getElementById("viewRoot");
    const data = window.EXAMDAY;
    const container = el("div", { class: "container" });
    container.appendChild(el("div", { class: "page-head" }, [
      el("h1", { text: "Exam Day" }),
      el("p", { text: "Logistics, pacing, and the keyword-to-answer map. Read this the night before." })
    ]));

    if (!data) {
      container.appendChild(el("div", { class: "empty-state" }, [
        el("div", { class: "es-icon" }, [Icons.icon("calendar", 30)]),
        el("h3", { text: "Still generating" })
      ]));
      root.appendChild(container);
      return;
    }

    const bp = window.BLUEPRINT;
    const fmtCard = el("div", { class: "card card-pad mb-16" });
    fmtCard.appendChild(el("div", { class: "card-head" }, [el("h3", { text: "Format" })]));
    const fmtGrid = el("div", { class: "grid grid-4" });
    [
      ["Questions", `${bp.format.totalQuestions} (${bp.format.scoredQuestions} scored)`],
      ["Time", `${bp.format.minutes} minutes`],
      ["Passing score", `${bp.format.passingScore} / ${bp.format.scaleMax}`],
      ["Cost", `$${bp.format.costUsd}`]
    ].forEach(([label, val]) => fmtGrid.appendChild(el("div", { class: "stat-tile" }, [el("div", { class: "label", text: label }), el("div", { class: "value", text: val, style: "font-size:20px" })])));
    fmtCard.appendChild(fmtGrid);
    container.appendChild(fmtCard);

    const grid = el("div", { class: "eday-grid mb-16" });

    const pacingCard = el("div", { class: "card card-pad" });
    pacingCard.appendChild(el("div", { class: "card-head" }, [el("h3", { text: "Pacing checkpoints" })]));
    const pacingList = el("ul");
    (data.pacing || []).forEach((p) => pacingList.appendChild(el("li", { html: `<strong>${p.at}</strong> (${p.by}) - ${inlineMd(p.note)}` })));
    pacingCard.appendChild(pacingList);
    grid.appendChild(pacingCard);

    const trapsCard = el("div", { class: "card card-pad" });
    trapsCard.appendChild(el("div", { class: "card-head" }, [el("h3", { text: "Common traps" })]));
    const trapsList = el("ul");
    (data.traps || []).forEach((t) => trapsList.appendChild(el("li", { html: `<strong>${U.escapeHtml(t.title)}</strong> - ${inlineMd(t.body)}` })));
    trapsCard.appendChild(trapsList);
    grid.appendChild(trapsCard);

    container.appendChild(grid);

    const stratCard = el("div", { class: "card card-pad mb-16" });
    stratCard.appendChild(el("div", { class: "card-head" }, [el("h3", { text: "Strategy" })]));
    const stratGrid = el("div", { class: "grid grid-2" });
    (data.strategy || []).forEach((s) => stratGrid.appendChild(el("div", null, [el("div", { style: "font-weight:650;font-size:13.5px;margin-bottom:3px", text: s.title }), el("div", { class: "text-sec text-sm", html: inlineMd(s.body) })])));
    stratCard.appendChild(stratGrid);
    container.appendChild(stratCard);

    const kwCard = el("div", { class: "card card-pad mb-16" });
    kwCard.appendChild(el("div", { class: "card-head" }, [el("h3", { text: "Keyword map" }), el("span", { class: "hint", text: "Stem word → what it signals" })]));
    const kwWrap = el("div", { class: "keyword-map" });
    (data.keywordMap || []).forEach((k) => kwWrap.appendChild(el("div", { class: "km-row" }, [el("div", { class: "km-key", text: k.keyword }), el("div", { class: "km-val", html: inlineMd(k.means) })])));
    kwCard.appendChild(kwWrap);
    container.appendChild(kwCard);

    const checkCard = el("div", { class: "card card-pad" });
    checkCard.appendChild(el("div", { class: "card-head" }, [el("h3", { text: "Checklist" })]));
    const checklistState = Store.getChecklist();
    (data.checklist || []).forEach((group) => {
      const g = el("div", { class: "checklist-group" });
      g.appendChild(el("h4", { text: group.when }));
      const ul = el("ul");
      (group.items || []).forEach((item, idx) => {
        const key = group.when + "::" + idx;
        const li = el("li", { class: checklistState[key] ? "checked-done" : "" });
        const cb = el("input", { type: "checkbox" });
        cb.checked = !!checklistState[key];
        cb.addEventListener("change", () => { Store.setChecklistItem(key, cb.checked); li.classList.toggle("checked-done", cb.checked); });
        li.appendChild(cb);
        li.appendChild(el("span", { html: inlineMd(item) }));
        ul.appendChild(li);
      });
      g.appendChild(ul);
      checkCard.appendChild(g);
    });
    container.appendChild(checkCard);

    root.appendChild(container);
  }

  window.Views = window.Views || {};
  window.Views.ExamDay = { render };
})();
