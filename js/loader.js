/* Loads every data/*.js file as a classic script (so this works over file://
   with no build step and no CORS/module issues). Tracks what actually loaded
   so the app can degrade gracefully while content is still being generated. */
(function () {
  "use strict";

  const QB_TASKS = ["1.1", "1.2", "1.3", "1.4", "2.1", "2.2", "2.3", "2.4", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "4.1", "4.2", "4.3"];
  const FILES = [
    "data/blueprint.js",
    ...QB_TASKS.map((t) => `data/qb-${t.replace(".", "-")}.js`),
    "data/notes-1.js", "data/notes-2.js", "data/notes-3.js", "data/notes-4.js",
    "data/cards-1.js", "data/cards-2.js", "data/cards-3.js", "data/cards-4.js",
    "data/glossary.js", "data/confusions.js", "data/examday.js"
  ];

  // Bumped on release. A fixed token busts the cache after a deploy while still
  // letting the browser cache the content between visits - a Date.now() cache-
  // buster would re-download everything on every page load.
  const VERSION = "0.1.0";

  const status = { loaded: [], failed: [] };

  function loadScript(src) {
    return new Promise((resolve) => {
      const s = document.createElement("script");
      s.src = src + "?v=" + VERSION;
      // Each file only pushes onto a global, so nothing depends on the order
      // they finish in - but async=false keeps execution order stable anyway.
      s.async = false;
      s.onload = () => { status.loaded.push(src); resolve(true); };
      s.onerror = () => { status.failed.push(src); resolve(false); };
      document.head.appendChild(s);
    });
  }

  window.Loader = {
    status,
    async loadAll() {
      window.QBANK = window.QBANK || [];
      window.NOTES = window.NOTES || [];
      window.FLASHCARDS = window.FLASHCARDS || [];
      window.GLOSSARY = window.GLOSSARY || [];
      window.CONFUSIONS = window.CONFUSIONS || [];
      window.EXAMDAY = window.EXAMDAY || null;
      // Fetch in parallel. Serially awaiting 31 files costs 31 round trips over
      // HTTPS, which is seconds of blank screen on a slow connection.
      await Promise.all(FILES.map(loadScript));
      return status;
    }
  };
})();
