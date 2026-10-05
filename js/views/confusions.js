(function () {
  "use strict";
  const { el, inlineMd } = U;

  function render() {
    const root = document.getElementById("viewRoot");
    const all = window.CONFUSIONS || [];
    const container = el("div", { class: "container" });
    container.appendChild(el("div", { class: "page-head" }, [
      el("h1", { text: "Easily Confused" }),
      el("p", { text: "Where candidates actually lose points: service vs. service, technique vs. technique. Read this before the exam." })
    ]));

    if (!all.length) {
      container.appendChild(el("div", { class: "empty-state" }, [
        el("div", { class: "es-icon" }, [Icons.icon("shuffle", 30)]),
        el("h3", { text: "Still generating" })
      ]));
      root.appendChild(container);
      return;
    }

    const grid = el("div", { class: "grid grid-2" });
    all.forEach((c) => {
      const card = el("div", { class: "card card-pad conf-card" });
      card.appendChild(el("div", { class: "card-head" }, [el("h3", { text: c.topic }), el("span", { class: "tag", text: "Domain " + c.domain })]));
      if (c.why) card.appendChild(el("div", { class: "cc-why", html: inlineMd(c.why) }));
      const itemsWrap = el("div", { class: "conf-items" });
      (c.items || []).forEach((it) => {
        const box = el("div", { class: "conf-item" });
        box.appendChild(el("div", { class: "ci-name", text: it.name }));
        box.appendChild(el("div", { class: "ci-row" }, [el("b", { text: "Use: " }), el("span", { html: inlineMd(it.use) })]));
        box.appendChild(el("div", { class: "ci-row" }, [el("b", { text: "Not: " }), el("span", { html: inlineMd(it.notFor) })]));
        if (it.tell) box.appendChild(el("div", { class: "ci-tell", text: "Tell: " + it.tell }));
        itemsWrap.appendChild(box);
      });
      card.appendChild(itemsWrap);
      grid.appendChild(card);
    });
    container.appendChild(grid);
    root.appendChild(container);
  }

  window.Views = window.Views || {};
  window.Views.Confusions = { render };
})();
