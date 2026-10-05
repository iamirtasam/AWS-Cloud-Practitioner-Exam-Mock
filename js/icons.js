/* Inline SVG icon set. Stroke-based, 24x24, all using `currentColor` so an icon
   picks up whatever colour its container already sets (accent wash on mode
   cards, muted grey in empty states). Kept as one shared module so the app has
   no emoji glyphs, which render inconsistently across platforms. */
(function () {
  "use strict";

  const P = {
    // Session modes
    exam: '<path d="M9 3h6a1 1 0 0 1 1 1v1H8V4a1 1 0 0 1 1-1z"/><path d="M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/><path d="m9 13 2 2 4-4"/>',
    practice: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/>',
    sprint: '<path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12z"/>',
    domain: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="12" r="2"/><circle cx="8" cy="17" r="2"/>',
    weak: '<path d="M22 17 13.5 8.5l-5 5L2 7"/><path d="M16 17h6v-6"/>',
    review: '<path d="M3 3v6h6"/><path d="M3.5 14.5A9 9 0 1 0 6 6L3 9"/>',
    marathon: '<path d="M12 21a7 7 0 0 0 7-7c0-4-3-6-3-9 0 2.5-1.5 3.5-3 4.5C11 7 10 5 10 3 8 5 5 8 5 14a7 7 0 0 0 7 7z"/>',
    file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>',

    // Chrome
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>',
    theme: '<circle cx="12" cy="12" r="9"/><path d="M12 3v18" /><path d="M12 3a9 9 0 0 1 0 18" fill="currentColor" stroke="none"/>',

    // Question / exam runner
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V4s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
    flagFilled: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V4s-1 1-4 1-5-2-8-2-4 1-4 1z" fill="currentColor"/><path d="M4 22v-7"/>',

    // Empty / status states
    searchX: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/><path d="m9 9 4 4"/><path d="m13 9-4 4"/>',
    hourglass: '<path d="M6 2h12"/><path d="M6 22h12"/><path d="M8 2v4l4 4 4-4V2"/><path d="M8 22v-4l4-4 4 4v4"/>',
    package: '<path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5"/><path d="M12 12v10"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M8 3v4"/><path d="M16 3v4"/>',
    cards: '<rect x="3" y="7" width="13" height="14" rx="2"/><path d="M8 4h9a2 2 0 0 1 2 2v11"/>',
    books: '<path d="M4 5a2 2 0 0 1 2-2h4v18H6a2 2 0 0 1-2-2z"/><path d="M20 5a2 2 0 0 0-2-2h-4v18h4a2 2 0 0 0 2-2z"/>',
    shuffle: '<path d="M17 3h4v4"/><path d="M21 3 3 21"/><path d="M17 21h4v-4"/><path d="m15 15 6 6"/><path d="M3 3l5 5"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
    clock: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2"/><path d="M9 2h6"/><path d="m19 5 1.5 1.5"/>'
  };

  /** Returns a detached <span> wrapping the icon, or null for an unknown name. */
  function icon(name, size) {
    const d = P[name];
    if (!d) return null;
    const span = document.createElement("span");
    span.className = "ico";
    span.setAttribute("aria-hidden", "true");
    span.innerHTML =
      '<svg viewBox="0 0 24 24" width="' + (size || 20) + '" height="' + (size || 20) +
      '" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' +
      d + "</svg>";
    return span;
  }

  window.Icons = { icon, has: (n) => !!P[n] };
})();
