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

/* =========================================================
   GLIFOS - assets vectoriales por módulo.
   Se dibujan en la esquina superior derecha de cada botón y
   se disuelven hacia abajo (ver .mc-glyph en app.css).
   ========================================================= */
const GLYPHS = {

  /* Anillo de telemetría + barras */
  stats: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor"
      stroke-width="1.2" stroke-linecap="round" aria-hidden="true">
    <circle class="spin" cx="60" cy="44" r="40" opacity=".22" stroke-dasharray="3 7"/>
    <circle class="spin-rev" cx="60" cy="44" r="31" opacity=".4" stroke-dasharray="20 12"/>
    <circle cx="60" cy="44" r="21" opacity=".26"/>
    <circle class="tracer" style="--len:132" cx="60" cy="44" r="21"
            stroke-dasharray="12 120" stroke-width="1.9"/>
    <g opacity=".55"><path d="M60 2v7M60 79v7M18 44h7M95 44h7"/></g>
    <g stroke-width="2.3" opacity=".9">
      <path class="bar" style="--d:0s"    d="M48 56V46"/>
      <path class="bar" style="--d:.4s"   d="M55 56V38"/>
      <path class="bar" style="--d:.8s"   d="M62 56V42"/>
      <path class="bar" style="--d:1.2s"  d="M69 56V32"/>
    </g>
    <path d="M42 60h36" opacity=".45"/>
    <path class="scan" d="M12 22h96" opacity=".5"/>
    <g fill="currentColor" stroke="none">
      <rect class="pt" style="--d:0s;--o:.55"    x="40" y="68" width="3" height="3"/>
      <rect class="pt" style="--d:.9s;--o:.45"   x="56" y="74" width="2.5" height="2.5"/>
      <rect class="pt" style="--d:1.8s;--o:.5"   x="72" y="70" width="3" height="3"/>
      <rect class="pt" style="--d:2.6s;--o:.4"   x="48" y="84" width="2" height="2"/>
      <rect class="pt" style="--d:3.4s;--o:.35"  x="66" y="90" width="2.5" height="2.5"/>
      <rect class="pt" style="--d:1.3s;--o:.3"   x="82" y="80" width="2" height="2"/>
    </g>
  </svg>`,

  /* Cubos isométricos apilados */
  items: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor"
      stroke-width="1.2" stroke-linejoin="round" aria-hidden="true">
    <g opacity=".9">
      <path d="M60 22 75.6 31 60 40 44.4 31Z"/>
      <path d="M44.4 31v18L60 58V40"/>
      <path d="M75.6 31v18L60 58"/>
    </g>
    <path class="tracer" style="--len:62" d="M60 22 75.6 31 60 40 44.4 31Z"
          stroke-dasharray="10 52" stroke-width="1.8"/>
    <g class="bob" style="--d:0s" opacity=".38">
      <path d="M32 43 39.8 47.5 32 52 24.2 47.5Z"/>
      <path d="M24.2 47.5v9L32 61v-9"/>
      <path d="M39.8 47.5v9L32 61"/>
    </g>
    <g class="bob" style="--d:1.4s" opacity=".38">
      <path d="M88 43 95.8 47.5 88 52 80.2 47.5Z"/>
      <path d="M80.2 47.5v9L88 61v-9"/>
      <path d="M95.8 47.5v9L88 61"/>
    </g>
    <path d="M20 68h80" opacity=".28" stroke-dasharray="2 6"/>
    <path class="scan" style="--d:1.1s" d="M12 22h96" opacity=".5"/>
    <g fill="currentColor" stroke="none">
      <rect class="pt" style="--d:.3s;--o:.5"    x="44" y="74" width="3" height="3"/>
      <rect class="pt" style="--d:1.2s;--o:.45"  x="62" y="78" width="2.5" height="2.5"/>
      <rect class="pt" style="--d:2.1s;--o:.35"  x="34" y="86" width="2" height="2"/>
      <rect class="pt" style="--d:2.9s;--o:.4"   x="76" y="84" width="2.5" height="2.5"/>
      <rect class="pt" style="--d:3.7s;--o:.3"   x="56" y="94" width="2" height="2"/>
    </g>
  </svg>`,

  /* Retícula hexagonal modular */
  toolbox: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor"
      stroke-width="1.2" stroke-linejoin="round" aria-hidden="true">
    <path d="M84 44 72 64.8 48 64.8 36 44 48 23.2 72 23.2Z" opacity=".85"/>
    <path class="tracer" style="--len:144" d="M84 44 72 64.8 48 64.8 36 44 48 23.2 72 23.2Z"
          stroke-dasharray="14 130" stroke-width="1.8"/>
    <path class="pulse" d="M73 44 66.5 55.3 53.5 55.3 47 44 53.5 32.7 66.5 32.7Z" opacity=".42"/>
    <g opacity=".5"><path d="M60 23.2V12M36 44H23M84 44h13M60 64.8V76"/></g>
    <g fill="currentColor" stroke="none">
      <circle class="blink" style="--d:0s"   cx="60" cy="9"  r="2.6"/>
      <circle class="blink" style="--d:.9s"  cx="20" cy="44" r="2.6"/>
      <circle class="blink" style="--d:1.8s" cx="100" cy="44" r="2.6"/>
    </g>
    <g stroke-width="1.6" opacity=".75"><path d="M53.5 44h13M60 37.5v13"/></g>
    <path class="scan" style="--d:2.2s" d="M12 22h96" opacity=".5"/>
    <g fill="currentColor" stroke="none">
      <rect class="pt" style="--d:.6s;--o:.5"    x="42" y="80" width="3" height="3"/>
      <rect class="pt" style="--d:1.5s;--o:.42"  x="60" y="84" width="2.5" height="2.5"/>
      <rect class="pt" style="--d:2.4s;--o:.38"  x="74" y="78" width="2" height="2"/>
      <rect class="pt" style="--d:3.2s;--o:.3"   x="50" y="94" width="2" height="2"/>
      <rect class="pt" style="--d:4s;--o:.26"    x="68" y="98" width="2.5" height="2.5"/>
    </g>
  </svg>`,

  /* Baliza de sincronización */
  quest: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor"
      stroke-width="1.2" stroke-linejoin="round" aria-hidden="true">
    <circle class="spin" cx="60" cy="42" r="46" opacity=".16" stroke-dasharray="2 11"/>
    <circle class="sonar" style="--d:0s" cx="60" cy="42" r="30" stroke-dasharray="4 9"/>
    <circle class="sonar" style="--d:2s" cx="60" cy="42" r="30" stroke-dasharray="4 9"/>
    <path d="M60 12 80 42 60 72 40 42Z" opacity=".9"/>
    <path class="tracer" style="--len:145" d="M60 12 80 42 60 72 40 42Z"
          stroke-dasharray="14 131" stroke-width="1.8"/>
    <path class="pulse" d="M60 28 70 42 60 56 50 42Z" opacity=".48"/>
    <circle class="core" cx="60" cy="42" r="3.6" fill="currentColor" stroke="none"/>
    <path d="M60 72v16" opacity=".45" stroke-dasharray="3 5"/>
    <path class="scan" style="--d:3.1s" d="M12 22h96" opacity=".5"/>
    <g fill="currentColor" stroke="none">
      <rect class="pt" style="--d:.2s;--o:.5"    x="46" y="76" width="3" height="3"/>
      <rect class="pt" style="--d:1.1s;--o:.45"  x="70" y="80" width="2.5" height="2.5"/>
      <rect class="pt" style="--d:2s;--o:.35"    x="38" y="88" width="2" height="2"/>
      <rect class="pt" style="--d:2.8s;--o:.3"   x="78" y="92" width="2" height="2"/>
      <rect class="pt" style="--d:3.6s;--o:.26"  x="58" y="98" width="2.5" height="2.5"/>
    </g>
  </svg>`

};

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
