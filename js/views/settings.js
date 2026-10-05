(function () {
  "use strict";
  const { el } = U;

  function render() {
    const root = document.getElementById("viewRoot");
    const container = el("div", { class: "container narrow" });
    container.appendChild(el("div", { class: "page-head" }, [
      el("h1", { text: "Settings" }),
      el("p", { text: "Everything here runs locally in your browser. Nothing is sent anywhere." })
    ]));

    const themeCard = el("div", { class: "card card-pad mb-16" });
    themeCard.appendChild(el("div", { class: "card-head" }, [el("h3", { text: "Appearance" })]));
    const s = Store.getSettings();
    const row = el("div", { class: "btn-row" });
    ["auto", "light", "dark"].forEach((mode) => {
      const btn = el("button", { class: "btn" + (s.theme === mode ? " btn-primary" : ""), text: mode[0].toUpperCase() + mode.slice(1) });
      btn.addEventListener("click", () => {
        if (mode === "auto") document.documentElement.removeAttribute("data-theme");
        else document.documentElement.setAttribute("data-theme", mode);
        Store.setSettings({ theme: mode });
        render();
      });
      row.appendChild(btn);
    });
    themeCard.appendChild(row);
    container.appendChild(themeCard);

    const dataCard = el("div", { class: "card card-pad mb-16" });
    dataCard.appendChild(el("div", { class: "card-head" }, [el("h3", { text: "Your data" })]));
    dataCard.appendChild(el("p", { class: "text-sec text-sm mb-12", text: "Export your history to back it up or move to another browser, or reset everything and start fresh." }));
    const btnRow = el("div", { class: "btn-row" });
    const exportBtn = el("button", { class: "btn", text: "Export progress (.json)" });
    exportBtn.addEventListener("click", doExport);
    const importBtn = el("button", { class: "btn", text: "Import progress" });
    const fileInput = el("input", { type: "file", accept: "application/json", class: "hidden" });
    importBtn.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", doImport);
    const resetBtn = el("button", { class: "btn btn-danger", text: "Reset all progress" });
    resetBtn.addEventListener("click", confirmReset);
    btnRow.appendChild(exportBtn); btnRow.appendChild(importBtn); btnRow.appendChild(resetBtn); btnRow.appendChild(fileInput);
    dataCard.appendChild(btnRow);
    container.appendChild(dataCard);

    const aboutCard = el("div", { class: "card card-pad" });
    aboutCard.appendChild(el("div", { class: "card-head" }, [el("h3", { text: "About this bank" })]));
    aboutCard.appendChild(el("p", { class: "text-sec text-sm", text: `${Engine.Bank.count()} original practice questions written to the official CLF-C02 exam guide (v${window.BLUEPRINT.guideVersion}). Not affiliated with or endorsed by AWS.` }));
    container.appendChild(aboutCard);

    root.appendChild(container);
  }

  function doExport() {
    const data = Store.exportAll();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `clf-c02-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
    U.toast("Exported.");
  }

  function doImport(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const obj = JSON.parse(reader.result);
        Store.importAll(obj);
        U.toast("Imported. Reloading…");
        setTimeout(() => location.reload(), 700);
      } catch (err) {
        U.toast("That file could not be read as progress data.");
      }
    };
    reader.readAsText(file);
  }

  function confirmReset() {
    const overlay = el("div", { class: "modal-overlay" });
    const modal = el("div", { class: "modal" });
    modal.appendChild(el("h2", { text: "Reset all progress?" }));
    modal.appendChild(el("p", { text: "This clears every answer, attempt, flag, and flashcard rating. It cannot be undone unless you exported a backup first." }));
    const actions = el("div", { class: "modal-actions" });
    const cancel = el("button", { class: "btn", text: "Cancel" });
    cancel.addEventListener("click", () => document.body.removeChild(overlay));
    const confirm = el("button", { class: "btn btn-danger", text: "Reset everything" });
    confirm.addEventListener("click", () => { Store.resetAll(); document.body.removeChild(overlay); U.toast("Progress reset."); navigate("home"); });
    actions.appendChild(cancel); actions.appendChild(confirm);
    modal.appendChild(actions);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  }

  window.Views = window.Views || {};
  window.Views.Settings = { render };
})();
