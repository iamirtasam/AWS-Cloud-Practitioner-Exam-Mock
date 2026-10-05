/* Progress charts: domain accuracy bars, score trend line, readiness gauge.
   Plain SVG/HTML, no chart library. Color follows the job it does:
   status color for pass/fail state, one accent hue for the single score
   series, never a rainbow. Every chart ships a table-view twin. */
(function () {
  "use strict";

  function el(tag, attrs, children) {
    const e = document.createElement(tag);
    if (attrs) Object.entries(attrs).forEach(([k, v]) => {
      if (k === "class") e.className = v;
      else if (k === "text") e.textContent = v;
      else e.setAttribute(k, v);
    });
    (children || []).forEach((c) => e.appendChild(c));
    return e;
  }
  function svgEl(tag, attrs) {
    const e = document.createElementNS("http://www.w3.org/2000/svg", tag);
    if (attrs) Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v));
    return e;
  }

  function bandFor(pct) {
    const readiness = window.BLUEPRINT.readiness;
    let match = readiness[0];
    readiness.forEach((r) => { if (pct >= r.min) match = r; });
    return match;
  }
  function toneVar(tone) {
    return { good: "var(--good)", warning: "var(--warning)", serious: "var(--serious)", critical: "var(--critical)" }[tone] || "var(--accent)";
  }

  function addTableToggle(root, table) {
    const btn = el("button", { class: "table-toggle", type: "button", text: "Table view" });
    table.classList.add("hidden");
    btn.addEventListener("click", () => {
      const showing = !table.classList.contains("hidden");
      table.classList.toggle("hidden", showing);
      btn.textContent = showing ? "Table view" : "Hide table";
    });
    root.appendChild(btn);
    root.appendChild(table);
  }

  // ---------------------------------------------------------- Domain accuracy bars

  // data: [{ n, short, accuracy(0-1|null), shown }]
  function domainBars(container, data) {
    container.innerHTML = "";
    const root = el("div", { class: "viz-root" });
    const wrap = el("div", { class: "dbars" });
    const target = window.BLUEPRINT.targetScore;
    const passLine = window.BLUEPRINT.passEquivalentPercent;

    data.forEach((d) => {
      const pct = d.accuracy == null ? null : Math.round(d.accuracy * 100);
      const row = el("div", { class: "dbar-row" });
      row.appendChild(el("div", { class: "dname", text: d.short, title: d.short }));

      const track = el("div", { class: "dbar-track", role: "img", "aria-label": `${d.short}: ${pct == null ? "no data" : pct + "% correct"}` });
      if (pct != null) {
        const tone = bandFor(pct).tone;
        const fill = el("div", { class: "dbar-fill" });
        fill.style.width = Math.max(2, pct) + "%";
        fill.style.background = toneVar(tone);
        track.appendChild(fill);
      }
      // Reference ticks sit above the fill so they stay readable at any value.
      const passTick = el("div", { class: "dbar-target" });
      passTick.style.left = passLine + "%";
      passTick.style.background = "var(--text-muted)";
      track.appendChild(passTick);
      const targetTick = el("div", { class: "dbar-target" });
      targetTick.style.left = target + "%";
      targetTick.style.background = "var(--accent)";
      track.appendChild(targetTick);

      row.appendChild(track);
      row.appendChild(el("div", { class: "dval", text: pct == null ? "—" : pct + "%" }));
      wrap.appendChild(row);
    });

    root.appendChild(wrap);

    const legend = el("div", { class: "dbar-legend" });
    [["good", "Exam ready (80%+)"], ["warning", "Borderline"], ["serious", "Getting there"], ["critical", "Not ready"]].forEach(([tone, label]) => {
      const item = el("div", { class: "lg-item" });
      const sw = el("span", { class: "lg-swatch" }); sw.style.background = toneVar(tone);
      item.appendChild(sw);
      item.appendChild(el("span", { text: label }));
      legend.appendChild(item);
    });
    const passItem = el("div", { class: "lg-item" });
    const passSw = el("span", { class: "lg-swatch" }); passSw.style.background = "var(--text-muted)"; passSw.style.borderRadius = "0";
    passItem.appendChild(passSw); passItem.appendChild(el("span", { text: `Pass line ${passLine}%` }));
    legend.appendChild(passItem);
    root.appendChild(legend);

    const table = el("table", { class: "a11y-table" });
    const thead = el("tr", null, [el("th", { text: "Domain" }), el("th", { text: "Accuracy" }), el("th", { text: "Questions answered" })]);
    table.appendChild(el("thead", null, [thead]));
    const tbody = el("tbody");
    data.forEach((d) => {
      const pct = d.accuracy == null ? "No data yet" : Math.round(d.accuracy * 100) + "%";
      tbody.appendChild(el("tr", null, [el("td", { text: d.short }), el("td", { text: pct }), el("td", { text: String(d.shown || 0) })]));
    });
    table.appendChild(tbody);
    addTableToggle(root, table);

    container.appendChild(root);
  }

  // -------------------------------------------------------------------- Trend line

  // attempts: [{ date: 'Jul 28', pct: 62, mode: 'Real Exam' }], oldest first
  function trendLine(container, attempts) {
    container.innerHTML = "";
    const root = el("div", { class: "viz-root trend-wrap" });

    if (!attempts || attempts.length === 0) {
      root.appendChild(el("div", { class: "trend-empty", text: "Take a practice session or exam to start your trend." }));
      container.appendChild(root);
      return;
    }

    const W = 640, H = 220, padL = 34, padR = 16, padT = 20, padB = 34;
    const innerW = W - padL - padR, innerH = H - padT - padB;
    const passLine = window.BLUEPRINT.passEquivalentPercent;
    const target = window.BLUEPRINT.targetScore;

    const svg = svgEl("svg", { class: "trend-svg", viewBox: `0 0 ${W} ${H}`, preserveAspectRatio: "none" });

    const x = (i) => padL + (attempts.length === 1 ? innerW / 2 : (i / (attempts.length - 1)) * innerW);
    const y = (v) => padT + innerH - (Math.max(0, Math.min(100, v)) / 100) * innerH;

    // gridlines (hairline, recessive) at 0/25/50/75/100
    [0, 25, 50, 75, 100].forEach((v) => {
      const gy = y(v);
      svg.appendChild(svgEl("line", { x1: padL, x2: W - padR, y1: gy, y2: gy, stroke: "var(--gridline)", "stroke-width": 1 }));
      const t = svgEl("text", { x: 4, y: gy + 4, "font-size": 10, fill: "var(--text-muted)" });
      t.textContent = v;
      svg.appendChild(t);
    });

    // Pass + target reference lines. Labels sit at the LEFT edge so they never
    // collide with the direct-labeled endpoint value on the right.
    // --text-muted rather than --baseline: the baseline token is too close to the
    // dark surface to read as a label.
    [[passLine, "var(--text-muted)", `Pass ${passLine}%`], [target, "var(--accent)", `Target ${target}%`]].forEach(([v, color, label]) => {
      const gy = y(v);
      svg.appendChild(svgEl("line", { x1: padL, x2: W - padR, y1: gy, y2: gy, stroke: color, "stroke-width": 1.5 }));
      const t = svgEl("text", { x: padL + 4, y: gy - 4, "font-size": 10, fill: color, "text-anchor": "start", "font-weight": 600 });
      t.textContent = label;
      svg.appendChild(t);
    });

    // area wash under the line (~10% opacity)
    let path = `M ${x(0)} ${y(attempts[0].pct)}`;
    attempts.forEach((a, i) => { if (i > 0) path += ` L ${x(i)} ${y(a.pct)}`; });
    const areaPath = `${path} L ${x(attempts.length - 1)} ${y(0)} L ${x(0)} ${y(0)} Z`;
    svg.appendChild(svgEl("path", { d: areaPath, fill: "var(--accent)", opacity: 0.1, stroke: "none" }));

    // the line itself: 2px, round join
    svg.appendChild(svgEl("path", { d: path, fill: "none", stroke: "var(--accent)", "stroke-width": 2, "stroke-linejoin": "round", "stroke-linecap": "round" }));

    // points with surface ring; last point direct-labeled (the endpoint rule)
    const dots = [];
    attempts.forEach((a, i) => {
      const cx = x(i), cy = y(a.pct);
      const dot = svgEl("circle", { cx, cy, r: 4.5, fill: "var(--accent)", stroke: "var(--surface-1)", "stroke-width": 2, class: "trend-dot" });
      svg.appendChild(dot);
      const hit = svgEl("circle", { cx, cy, r: 12, fill: "transparent", "data-i": i });
      svg.appendChild(hit);
      dots.push({ cx, cy, a, hit });
    });
    const last = attempts[attempts.length - 1];
    const lastLabel = svgEl("text", {
      x: x(attempts.length - 1) + (attempts.length > 1 ? -6 : 0),
      y: y(last.pct) - 12, "font-size": 12, "font-weight": 700, fill: "var(--text-primary)",
      "text-anchor": attempts.length > 1 ? "end" : "middle"
    });
    lastLabel.textContent = Math.round(last.pct) + "%";
    svg.appendChild(lastLabel);

    // X-axis dates. Label first and last only when crowded, so ticks never overlap.
    const maxLabels = Math.max(2, Math.floor(innerW / 70));
    const step = Math.max(1, Math.ceil(attempts.length / maxLabels));
    attempts.forEach((a, i) => {
      const isEdge = i === 0 || i === attempts.length - 1;
      if (!isEdge && i % step !== 0) return;
      const anchor = i === 0 ? "start" : (i === attempts.length - 1 ? "end" : "middle");
      const t = svgEl("text", {
        x: x(i), y: H - padB + 16, "font-size": 10,
        fill: "var(--text-muted)", "text-anchor": attempts.length === 1 ? "middle" : anchor
      });
      t.textContent = a.date;
      svg.appendChild(t);
    });

    root.appendChild(svg);

    // crosshair + tooltip
    const crosshair = svgEl("line", { y1: padT, y2: H - padB, stroke: "var(--baseline)", "stroke-width": 1, opacity: 0 });
    svg.insertBefore(crosshair, svg.firstChild.nextSibling);
    const tooltip = el("div", { class: "trend-tooltip" });
    tooltip.innerHTML = `<div class="tv"></div><div class="tl"></div>`;
    root.appendChild(tooltip);

    function showAt(i) {
      const d = dots[i];
      crosshair.setAttribute("x1", d.cx); crosshair.setAttribute("x2", d.cx); crosshair.setAttribute("opacity", 1);
      const rect = svg.getBoundingClientRect();
      const scale = rect.width / W;
      tooltip.style.left = (d.cx * scale) + "px";
      tooltip.style.top = (d.cy * (rect.height / H)) + "px";
      tooltip.querySelector(".tv").textContent = Math.round(d.a.pct) + "%";
      tooltip.querySelector(".tl").textContent = `${d.a.date} · ${d.a.mode}`;
      tooltip.classList.add("show");
    }
    function hide() { crosshair.setAttribute("opacity", 0); tooltip.classList.remove("show"); }

    dots.forEach((d, i) => {
      d.hit.addEventListener("pointerenter", () => showAt(i));
      d.hit.addEventListener("focus", () => showAt(i));
      d.hit.setAttribute("tabindex", "0");
      d.hit.addEventListener("pointerleave", hide);
      d.hit.addEventListener("blur", hide);
    });
    svg.addEventListener("pointerleave", hide);

    const table = el("table", { class: "a11y-table" });
    table.appendChild(el("thead", null, [el("tr", null, [el("th", { text: "Date" }), el("th", { text: "Mode" }), el("th", { text: "Score" })])]));
    const tbody = el("tbody");
    attempts.forEach((a) => tbody.appendChild(el("tr", null, [el("td", { text: a.date }), el("td", { text: a.mode }), el("td", { text: Math.round(a.pct) + "%" })])));
    table.appendChild(tbody);
    addTableToggle(root, table);

    container.appendChild(root);
  }

  // ------------------------------------------------------------------------ Gauge

  // percent: 0-100 latest readiness estimate, or null when there is no data yet.
  // A null reading must not render as 0% "Not ready" - that reads as a real score.
  function readinessGauge(container, percent, sublabel) {
    container.innerHTML = "";
    const root = el("div", { class: "viz-root gauge-wrap" });
    const hasData = percent != null && !Number.isNaN(percent);
    const band = hasData ? bandFor(percent) : { band: "No attempts yet", tone: "none", note: "Take a full exam to get a readiness estimate." };
    const tone = hasData ? toneVar(band.tone) : "var(--surface-3)";

    const W = 220, H = 130, cx = 110, cy = 118, r = 92;
    const svg = svgEl("svg", { class: "gauge-svg", viewBox: `0 0 ${W} ${H}` });

    function arcPath(startDeg, endDeg) {
      const toRad = (d) => (d * Math.PI) / 180;
      const sx = cx + r * Math.cos(toRad(startDeg));
      const sy = cy + r * Math.sin(toRad(startDeg));
      const ex = cx + r * Math.cos(toRad(endDeg));
      const ey = cy + r * Math.sin(toRad(endDeg));
      return `M ${sx} ${sy} A ${r} ${r} 0 0 1 ${ex} ${ey}`;
    }

    // track: 180deg (from 180 to 360)
    svg.appendChild(svgEl("path", { d: arcPath(180, 360), fill: "none", stroke: "var(--surface-3)", "stroke-width": 14, "stroke-linecap": "round" }));
    const sweep = hasData ? (180 * Math.max(0, Math.min(100, percent)) / 100) : 0;
    if (sweep > 0.5) {
      svg.appendChild(svgEl("path", { d: arcPath(180, 180 + sweep), fill: "none", stroke: tone, "stroke-width": 14, "stroke-linecap": "round" }));
    }
    // pass-line tick on the arc
    const passDeg = 180 + (180 * window.BLUEPRINT.passEquivalentPercent / 100);
    const toRad = (d) => (d * Math.PI) / 180;
    const tx1 = cx + (r - 10) * Math.cos(toRad(passDeg)), ty1 = cy + (r - 10) * Math.sin(toRad(passDeg));
    const tx2 = cx + (r + 10) * Math.cos(toRad(passDeg)), ty2 = cy + (r + 10) * Math.sin(toRad(passDeg));
    svg.appendChild(svgEl("line", { x1: tx1, y1: ty1, x2: tx2, y2: ty2, stroke: "var(--baseline)", "stroke-width": 2 }));

    root.appendChild(svg);
    const valueEl = el("div", { class: "gauge-value", text: hasData ? Math.round(percent) + "%" : "—" });
    if (!hasData) valueEl.style.color = "var(--text-muted)";
    root.appendChild(valueEl);
    const pill = el("div", { class: `gauge-band pill ${hasData ? band.tone : ""}`, text: band.band });
    root.appendChild(pill);
    root.appendChild(el("div", { class: "gauge-sub", text: sublabel || band.note }));

    container.appendChild(root);
  }

  window.Charts = { domainBars, trendLine, readinessGauge, bandFor, toneVar };
})();
