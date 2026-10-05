(function () {
  "use strict";
  const { el, inlineMd } = U;

  function taskAccuracy(taskId) {
    const seen = Store.getSeen();
    const pool = Engine.Bank.taskPool(taskId);
    let shown = 0, correct = 0;
    pool.forEach((q) => { const r = seen[q.id]; if (r) { shown += r.shown; correct += r.correct; } });
    return shown ? Math.round((correct / shown) * 100) : null;
  }

  function render(params) {
    const root = document.getElementById("viewRoot");
    const notes = (window.NOTES || []).slice().sort((a, b) => a.id.localeCompare(b.id));
    const container = el("div", { class: "container wide" });
    container.appendChild(el("div", { class: "page-head" }, [
      el("h1", { text: "Study Notes" }),
      el("p", { text: "One section per exam-guide task statement. Read them in order, or jump to your weak areas." })
    ]));

    if (!notes.length) {
      container.appendChild(el("div", { class: "empty-state" }, [
        el("div", { class: "es-icon" }, [Icons.icon("books", 30)]),
        el("h3", { text: "Study notes still generating" }),
        el("p", { text: "Check back shortly - this content is being written in the background." })
      ]));
      root.appendChild(container);
      return;
    }

    const layout = el("div", { class: "study-layout" });
    const toc = el("div", { class: "study-toc" });
    const content = el("div", { id: "studyContent" });

    let currentTask = params.subpath || notes[0].id;
    if (!notes.find((n) => n.id === currentTask)) currentTask = notes[0].id;

    window.BLUEPRINT.domains.forEach((d) => {
      toc.appendChild(el("div", { class: "toc-domain", text: `D${d.n} · ${d.short}` }));
      d.tasks.forEach((t) => {
        const note = notes.find((n) => n.id === t.id);
        if (!note) return;
        const acc = taskAccuracy(t.id);
        const a = el("a", { href: `#/study/${t.id}` }, [
          el("span", { text: t.id + " " + note.title.split(" ").slice(0, 4).join(" ") + (note.title.split(" ").length > 4 ? "…" : "") }),
          el("span", { class: "toc-pct", text: acc == null ? "" : acc + "%" })
        ]);
        if (t.id === currentTask) a.classList.add("active");
        toc.appendChild(a);
      });
    });

    layout.appendChild(toc);
    layout.appendChild(content);
    container.appendChild(layout);
    root.appendChild(container);

    renderNote(content, notes.find((n) => n.id === currentTask));
  }

  function renderNote(content, note) {
    content.innerHTML = "";
    if (!note) { content.appendChild(el("div", { class: "empty-state" }, [el("p", { text: "Note not found." })])); return; }

    content.appendChild(el("div", { class: "crumb", text: note.weight }));
    content.appendChild(el("h1", { text: `${note.id} ${note.title}`, style: "font-size:20px;margin-bottom:10px" }));
    content.appendChild(el("p", { class: "text-sec", html: inlineMd(note.summary), style: "margin-bottom:20px" }));

    (note.sections || []).forEach((sec) => {
      const s = el("div", { class: "note-section" });
      s.appendChild(el("h3", { text: sec.heading }));
      (sec.body || []).forEach((p) => s.appendChild(el("p", { html: inlineMd(p) })));
      if (sec.bullets && sec.bullets.length) {
        const ul = el("ul");
        sec.bullets.forEach((b) => ul.appendChild(el("li", { html: inlineMd(b) })));
        s.appendChild(ul);
      }
      if (sec.table && sec.table.headers) {
        const t = el("table", { class: "note-table" });
        t.appendChild(el("thead", null, [el("tr", null, sec.table.headers.map((h) => el("th", { text: h })))]));
        const tbody = el("tbody");
        sec.table.rows.forEach((row) => tbody.appendChild(el("tr", null, row.map((c) => el("td", { html: inlineMd(c) })))));
        t.appendChild(tbody);
        s.appendChild(t);
      }
      content.appendChild(s);
    });

    if (note.mustKnow && note.mustKnow.length) {
      const box = el("div", { class: "mustknow-box" });
      box.appendChild(el("h4", { text: "Must know" }));
      const ul = el("ul");
      note.mustKnow.forEach((m) => ul.appendChild(el("li", { html: inlineMd(m) })));
      box.appendChild(ul);
      content.appendChild(box);
    }
    if (note.examTips && note.examTips.length) {
      const box = el("div", { class: "tips-box" });
      box.appendChild(el("h4", { text: "Exam tips" }));
      const ul = el("ul");
      note.examTips.forEach((m) => ul.appendChild(el("li", { html: inlineMd(m) })));
      box.appendChild(ul);
      content.appendChild(box);
    }

    const actions = el("div", { class: "btn-row mt-24" });
    const drillBtn = el("button", { class: "btn btn-primary", text: `Drill ${note.id} questions` });
    drillBtn.addEventListener("click", () => navigate(`exam?mode=domain&task=${note.id}`));
    actions.appendChild(drillBtn);
    content.appendChild(actions);
  }

  window.Views = window.Views || {};
  window.Views.Study = { render };
})();
