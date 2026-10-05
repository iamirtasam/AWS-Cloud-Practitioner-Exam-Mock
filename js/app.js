/* Router + shell chrome. Hash-based routing so it works over file:// with no server. */
(function () {
  "use strict";

  const routes = {
    "": () => Views.Home.render(),
    "home": () => Views.Home.render(),
    "exam": (params) => Views.Exam.render(params),
    "results": (params) => Views.Results.render(params),
    "study": (params) => Views.Study.render(params),
    "flashcards": (params) => Views.Flashcards.render(params),
    "glossary": () => Views.Glossary.render(),
    "confusions": () => Views.Confusions.render(),
    "examday": () => Views.ExamDay.render(),
    "progress": () => Views.Progress.render(),
    "settings": () => Views.Settings.render()
  };

  const NAV = [
    { path: "home", label: "Home" },
    { path: "study", label: "Study Notes" },
    { path: "flashcards", label: "Flashcards" },
    { path: "glossary", label: "Glossary" },
    { path: "confusions", label: "Easily Confused" },
    { path: "examday", label: "Exam Day" },
    { path: "progress", label: "Progress" }
  ];

  function parseHash() {
    const raw = location.hash.replace(/^#\/?/, "");
    const [path, query] = raw.split("?");
    const params = {};
    if (query) query.split("&").forEach((kv) => {
      const [k, v] = kv.split("=");
      params[decodeURIComponent(k)] = decodeURIComponent(v || "");
    });
    return { path: path || "home", params };
  }

  function navigate(hash) {
    if (location.hash === "#/" + hash) { render(); return; }
    location.hash = "#/" + hash;
  }
  window.navigate = navigate;

  function buildChrome() {
    const shell = U.el("div", { class: "app-shell" });
    const top = U.el("div", { class: "topbar" });
    const brand = U.el("div", { class: "brand" }, [
      U.el("div", { class: "mark", text: "CLF" }),
      U.el("span", { text: "CLF-C02 Prep" })
    ]);
    brand.style.cursor = "pointer";
    brand.addEventListener("click", () => navigate("home"));
    top.appendChild(brand);

    const nav = U.el("nav", { id: "topnav" });
    NAV.forEach((item) => {
      const a = U.el("a", { href: "#/" + item.path, text: item.label, "data-path": item.path });
      nav.appendChild(a);
    });
    top.appendChild(nav);

    const settingsBtn = U.el("button", { class: "icon-btn", title: "Settings", "aria-label": "Settings" }, [Icons.icon("settings", 17)]);
    settingsBtn.addEventListener("click", () => navigate("settings"));
    top.appendChild(settingsBtn);

    const themeBtn = U.el("button", { class: "icon-btn", id: "themeBtn", title: "Toggle theme", "aria-label": "Toggle theme" }, [Icons.icon("theme", 17)]);
    themeBtn.addEventListener("click", toggleTheme);
    top.appendChild(themeBtn);

    shell.appendChild(top);
    const view = U.el("div", { class: "view", id: "viewRoot" });
    shell.appendChild(view);
    document.body.appendChild(shell);
  }

  function toggleTheme() {
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "dark" ? "light" : cur === "light" ? "" : "dark";
    if (next) document.documentElement.setAttribute("data-theme", next);
    else document.documentElement.removeAttribute("data-theme");
    Store.setSettings({ theme: next || "auto" });
  }
  function applyStoredTheme() {
    const s = Store.getSettings();
    if (s.theme === "dark" || s.theme === "light") document.documentElement.setAttribute("data-theme", s.theme);
  }

  function highlightNav(path) {
    U.qsa("#topnav a").forEach((a) => {
      const active = a.getAttribute("data-path") === path || (path === "" && a.getAttribute("data-path") === "home");
      a.classList.toggle("active", active);
    });
  }

  function render() {
    const { path, params } = parseHash();
    const base = path.split("/")[0];
    highlightNav(base);
    const root = document.getElementById("viewRoot");
    root.innerHTML = "";
    root.scrollTop = 0;
    window.scrollTo(0, 0);
    const handler = routes[base] || routes["home"];
    try {
      handler(Object.assign({ subpath: path.split("/").slice(1).join("/") }, params));
    } catch (err) {
      console.error(err);
      root.appendChild(U.el("div", { class: "container" }, [
        U.el("div", { class: "empty-state" }, [
          U.el("h3", { text: "Something went wrong rendering this page." }),
          U.el("p", { text: String(err && err.message || err) })
        ])
      ]));
    }
  }

  async function boot() {
    applyStoredTheme();
    buildChrome();
    const root = document.getElementById("viewRoot");
    root.innerHTML = "";
    root.appendChild(U.el("div", { class: "container narrow" }, [
      U.el("div", { class: "empty-state" }, [
        U.el("div", { class: "es-icon" }, [Icons.icon("hourglass", 30)]),
        U.el("h3", { text: "Loading question bank and study material…" })
      ])
    ]));

    await Loader.loadAll();
    Engine.Bank.init();

    window.addEventListener("hashchange", render);
    render();

    if (Loader.status.failed.length) {
      U.toast(`${Loader.status.failed.length} content file(s) failed to load - some sections may be incomplete.`);
    }
  }

  document.addEventListener("DOMContentLoaded", boot);
})();
