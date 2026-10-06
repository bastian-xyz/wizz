/* (X,Y,Z) · C.I.D. — guarda el hub en el equipo para que abra al instante y funcione sin conexión.
   Mismo sitio: muestra lo guardado y actualiza en segundo plano.
   Motores externos (3D, STEP, PDF): se guardan la primera vez que se usan.
   Google (inicio de sesión, Drive, pedidos): siempre en línea, nunca se guarda. */
const VERSION = 'hub-2.1.1';
const BASE = ['./', 'index.html', 'theme.css', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png', 'favicon-32.png'];
const NUNCA = /(^|\.)google(apis)?\.com$|(^|\.)gstatic\.com$|cloudflareaccess\.com$/;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => Promise.all(BASE.map(u => c.add(new Request(u, {credentials: 'include'})).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request; if(r.method !== 'GET') return;
  const u = new URL(r.url);
  if(NUNCA.test(u.hostname) || u.pathname.startsWith('/cdn-cgi/')) return;   // sesión y datos: siempre en línea
  const mismo = u.origin === location.origin;
  e.respondWith(caches.open(VERSION).then(async c => {
    const guardado = await c.match(r, {ignoreSearch: mismo});
    const red = fetch(r).then(res => {
      if(res && (res.ok || res.type === 'opaque') && !res.redirected) c.put(r, res.clone());
      return res;
    }).catch(() => null);
    if(guardado){ e.waitUntil(red); return guardado; }
    const res = await red;
    if(res) return res;
    if(r.mode === 'navigate'){ const h = await c.match('index.html'); if(h) return h; }
    return new Response('Sin conexión', {status: 503, headers: {'Content-Type': 'text/plain; charset=utf-8'}});
  }));
});
