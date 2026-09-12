/* =========================================================
   app.js - HELPERS COMPARTIDOS DEL HUB
   ========================================================= */

const PAGES = [
  { id: "menu",    href: "index.html",   label: "Menú" },
  { id: "stats",   href: "stats.html",   label: "Stats" },
  { id: "items",   href: "items.html",   label: "Ítems" },
  { id: "toolbox", href: "toolbox.html", label: "Toolbox" },
  { id: "quest",   href: "quest.html",   label: "Quest" }
];

function esc(v) {
  return String(v ?? "").replace(/[&<>"']/g, c => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}

function badge(estado) {
  const e = String(estado || "pendiente").toLowerCase();
  return `<span class="badge ${esc(e)}">${esc(e)}</span>`;
}

function prio(p) {
  const v = String(p || "baja").toLowerCase();
  return `<span class="prio ${esc(v)}">${esc(v)}</span>`;
}

/* Cuenta cuántos registros hay por estado */
function porEstado(lista) {
  return lista.reduce((acc, r) => {
    const e = String(r.estado || "pendiente").toLowerCase();
    acc[e] = (acc[e] || 0) + 1;
    return acc;
  }, {});
}

/* Inyecta HUD, header con nav y footer en la página */
function mountChrome(activeId) {
  const hud = ["tl", "tr", "bl", "br"]
    .map(p => `<div class="hud ${p}"></div>`).join("");

  const tabs = PAGES
    .map(p => `<a href="${p.href}"${p.id === activeId ? ' class="active"' : ""}>${p.label}</a>`)
    .join("");

  document.body.insertAdjacentHTML("afterbegin", `
    ${hud}
    <div class="shell">
      <header class="top">
        <div>
          <div class="brand">B A S T I A N <span>· XYZ</span></div>
          <div class="brand-sub">Hub operativo</div>
        </div>
        <nav class="tabs">${tabs}</nav>
      </header>
    </div>
  `);

  document.body.insertAdjacentHTML("beforeend", `
    <footer class="bot">
      <span>BASTIAN.XYZ · C.I.D.</span>
      <span>${PAGES.length - 1} módulos</span>
    </footer>
  `);
}

/* Encabezado de sección */
function secHead(ref, titulo, desc) {
  return `
    <div class="sec-head">
      <div class="sec-ref">${esc(ref)}</div>
      <h1 class="sec-title">${titulo}</h1>
      ${desc ? `<p class="sec-desc">${esc(desc)}</p>` : ""}
    </div>`;
}

/* Tabla genérica. cols = [{key, label, cls, render}] */
function tabla(lista, cols, vacio) {
  if (!lista.length) return `<div class="panel"><div class="empty">${esc(vacio)}</div></div>`;

  const head = cols.map(c => `<th>${esc(c.label)}</th>`).join("");
  const body = lista.map(r => `<tr>${
    cols.map(c => `<td class="${c.cls || ""}">${
      c.render ? c.render(r) : esc(r[c.key])
    }</td>`).join("")
  }</tr>`).join("");

  return `<div class="panel"><div class="table-wrap"><table>
    <thead><tr>${head}</tr></thead><tbody>${body}</tbody>
  </table></div></div>`;
}
