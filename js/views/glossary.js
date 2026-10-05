(function () {
  "use strict";
  const { el, inlineMd, debounce } = U;

  function render() {
    const root = document.getElementById("viewRoot");
    const all = (window.GLOSSARY || []).slice().sort((a, b) => a.term.localeCompare(b.term));
    const container = el("div", { class: "container narrow" });
    container.appendChild(el("div", { class: "page-head" }, [
      el("h1", { text: "Glossary" }),
      el("p", { text: `${all.length} terms a CLF-C02 candidate should recognize on sight.` })
    ]));

    const searchWrap = el("div", { class: "glossary-search" });
    const input = el("input", { type: "search", placeholder: "Search terms…" });
    searchWrap.appendChild(input);
    container.appendChild(searchWrap);

    const list = el("div", { id: "glossList" });
    container.appendChild(list);
    root.appendChild(container);

    function draw(filter) {
      list.innerHTML = "";
      const f = (filter || "").toLowerCase().trim();
      const items = f ? all.filter((g) => g.term.toLowerCase().includes(f) || (g.def || "").toLowerCase().includes(f) || (g.aka || []).some((a) => a.toLowerCase().includes(f))) : all;
      if (!items.length) { list.appendChild(el("div", { class: "empty-state" }, [el("p", { text: "No matching terms." })])); return; }
      let lastLetter = "";
      items.forEach((g) => {
        const letter = g.term[0].toUpperCase();
        if (!f && letter !== lastLetter) { list.appendChild(el("div", { class: "gloss-letter", text: letter })); lastLetter = letter; }
        const item = el("div", { class: "gloss-item" });
        const head = el("div", { class: "g-term" }, [el("span", { text: g.term })]);
        if (g.aka && g.aka.length) head.appendChild(el("span", { class: "g-aka", text: "aka " + g.aka.join(", ") }));
        item.appendChild(head);
        item.appendChild(el("div", { class: "g-def", html: inlineMd(g.def) }));
        list.appendChild(item);
      });
    }
    draw("");
    input.addEventListener("input", debounce((e) => draw(e.target.value), 120));
  }

  window.Views = window.Views || {};
  window.Views.Glossary = { render };
})();
