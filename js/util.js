/* Small shared helpers used across views. */
(function () {
  "use strict";

  function el(tag, attrs, children) {
    const e = document.createElement(tag);
    if (attrs) Object.entries(attrs).forEach(([k, v]) => {
      if (v === null || v === undefined) return;
      if (k === "class") e.className = v;
      else if (k === "text") e.textContent = v;
      else if (k === "html") e.innerHTML = v; // only ever used with our own trusted templates
      else if (k.startsWith("on") && typeof v === "function") e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v);
    });
    (children || []).forEach((c) => { if (c) e.appendChild(c); });
    return e;
  }

  function fmtDate(ts) {
    const d = new Date(ts);
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  }
  function fmtDateTime(ts) {
    const d = new Date(ts);
    return d.toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
  }

  function letterFor(i) { return String.fromCharCode(65 + i); }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  // Minimal inline markup: **bold** and `code`. Input is our own authored
  // content, but we still escape raw text first, defense in depth.
  function inlineMd(s) {
    let t = escapeHtml(s == null ? "" : s);
    t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
    t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    return t;
  }

  function toast(message) {
    let stack = document.querySelector(".toast-stack");
    if (!stack) {
      stack = el("div", { class: "toast-stack" });
      document.body.appendChild(stack);
    }
    const t = el("div", { class: "toast", text: message });
    stack.appendChild(t);
    setTimeout(() => t.remove(), 3200);
  }

  function debounce(fn, ms) {
    let h;
    return function (...args) {
      clearTimeout(h);
      h = setTimeout(() => fn.apply(this, args), ms);
    };
  }

  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  window.U = { el, fmtDate, fmtDateTime, letterFor, escapeHtml, inlineMd, toast, debounce, qs, qsa };
})();
