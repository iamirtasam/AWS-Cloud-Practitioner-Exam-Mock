(function () {
  "use strict";
  const { el, inlineMd, shuffleLocal } = U;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  let deck = [];
  let pos = 0;
  let flipped = false;
  let keyHandler = null;

  function render(params) {
    const root = document.getElementById("viewRoot");
    const all = window.FLASHCARDS || [];
    const container = el("div", { class: "container narrow" });
    container.appendChild(el("div", { class: "page-head" }, [
      el("h1", { text: "Flashcards" }),
      el("p", { text: "Click a card to flip it, then rate yourself so the deck can space out repeats." })
    ]));

    if (!all.length) {
      container.appendChild(el("div", { class: "empty-state" }, [
        el("div", { class: "es-icon" }, [Icons.icon("cards", 30)]),
        el("h3", { text: "Flashcards still generating" })
      ]));
      root.appendChild(container);
      return;
    }

    const filterRow = el("div", { class: "btn-row mb-16" });
    const domains = [{ n: 0, short: "All domains" }].concat(window.BLUEPRINT.domains.map((d) => ({ n: d.n, short: d.short })));
    domains.forEach((d) => {
      const active = (params.domain ? Number(params.domain) : 0) === d.n;
      const btn = el("button", { class: "btn btn-sm" + (active ? " btn-primary" : ""), text: d.short });
      btn.addEventListener("click", () => navigate(d.n ? `flashcards?domain=${d.n}` : "flashcards"));
      filterRow.appendChild(btn);
    });
    container.appendChild(filterRow);

    const dueOnlyRow = el("div", { class: "btn-row mb-16" });
    const dueBtn = el("button", { class: "btn btn-sm" + (params.due === "1" ? " btn-primary" : ""), text: "Due for review only" });
    dueBtn.addEventListener("click", () => {
      const p = new URLSearchParams();
      if (params.domain) p.set("domain", params.domain);
      p.set("due", params.due === "1" ? "0" : "1");
      const q = Array.from(p.entries()).filter(([k, v]) => v && v !== "0").map(([k, v]) => `${k}=${v}`).join("&");
      navigate("flashcards" + (q ? "?" + q : ""));
    });
    dueOnlyRow.appendChild(dueBtn);
    container.appendChild(dueOnlyRow);

    let pool = all;
    if (params.domain) pool = pool.filter((c) => c.domain === Number(params.domain));
    if (params.due === "1") {
      const state = Store.getFlashState();
      const now = Date.now();
      pool = pool.filter((c) => { const s = state[c.id]; return !s || s.dueAt <= now; });
    }
    deck = shuffle(pool);
    pos = 0; flipped = false;

    const wrap = el("div", { class: "flash-wrap", id: "flashWrap" });
    container.appendChild(wrap);
    root.appendChild(container);
    renderCard();
  }

  function renderCard() {
    const wrap = document.getElementById("flashWrap");
    if (!wrap) return;
    wrap.innerHTML = "";
    // Drop the previous card's key handler so listeners don't accumulate.
    if (keyHandler) { document.removeEventListener("keydown", keyHandler); keyHandler = null; }
    if (!deck.length) {
      wrap.appendChild(el("div", { class: "flash-empty" }, [
        el("div", { class: "es-icon" }, [Icons.icon("check", 30)]),
        el("h3", { text: "Nothing due right now" }),
        el("p", { text: "Come back later, or clear the filter to review the full deck." })
      ]));
      return;
    }
    if (pos >= deck.length) {
      wrap.appendChild(el("div", { class: "flash-empty" }, [
        el("div", { class: "es-icon" }, [Icons.icon("check", 30)]),
        el("h3", { text: "Deck complete" }),
        el("p", { text: `You went through ${deck.length} cards.` }),
        el("button", { class: "btn btn-primary", text: "Restart deck", onclick: () => { pos = 0; flipped = false; deck = shuffle(deck); renderCard(); } })
      ]));
      return;
    }
    const card = deck[pos];
    const cardEl = el("div", { class: "flash-card", id: "flashCard" });
    const inner = el("div", { class: "flash-inner" });
    const front = el("div", { class: "flash-face front" }, [
      el("div", { class: "fc-label", text: card.tags && card.tags[0] ? card.tags[0] : "Flashcard" }),
      el("div", { class: "fc-text", html: inlineMd(card.front) }),
      el("div", { class: "fc-hint", text: "Click to reveal" })
    ]);
    const back = el("div", { class: "flash-face back" }, [
      el("div", { class: "fc-label", text: "Answer" }),
      el("div", { class: "fc-text", html: inlineMd(card.back) })
    ]);
    inner.appendChild(front); inner.appendChild(back);
    cardEl.appendChild(inner);
    wrap.appendChild(cardEl);

    const controls = el("div", { class: "flash-controls" });
    wrap.appendChild(controls);
    wrap.appendChild(el("div", { class: "flash-progress", text: `Card ${pos + 1} of ${deck.length}` }));
    wrap.appendChild(el("div", { class: "text-sm text-muted", text: "Space or Enter flips · 1 = didn't know · 2 = knew it" }));

    // Card and controls must always agree on flip state, whichever the user clicks.
    function setFlipped(v) {
      flipped = v;
      cardEl.classList.toggle("flipped", flipped);
      drawControls();
    }
    function drawControls() {
      controls.innerHTML = "";
      if (flipped) {
        const again = el("button", { class: "btn btn-danger", text: "Didn't know" });
        again.addEventListener("click", (e) => { e.stopPropagation(); Store.recordFlash(card.id, false); advance(); });
        const knew = el("button", { class: "btn btn-primary", text: "Knew it" });
        knew.addEventListener("click", (e) => { e.stopPropagation(); Store.recordFlash(card.id, true); advance(); });
        controls.appendChild(again); controls.appendChild(knew);
      } else {
        const flip = el("button", { class: "btn btn-primary", text: "Flip card" });
        flip.addEventListener("click", (e) => { e.stopPropagation(); setFlipped(true); });
        controls.appendChild(flip);
      }
    }
    cardEl.addEventListener("click", () => setFlipped(!flipped));
    drawControls();

    // Keyboard shortcuts make a long deck far faster to get through.
    keyHandler = (e) => {
      if (e.target && /^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); setFlipped(!flipped); }
      else if (flipped && e.key === "1") { Store.recordFlash(card.id, false); advance(); }
      else if (flipped && e.key === "2") { Store.recordFlash(card.id, true); advance(); }
    };
    document.addEventListener("keydown", keyHandler);
  }

  function advance() { pos += 1; flipped = false; renderCard(); }

  window.Views = window.Views || {};
  window.Views.Flashcards = { render };
})();
