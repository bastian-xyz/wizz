/* (X,Y,Z) · C.I.D. — hub-2.2.0
   Páginas (index, rifa): primero la red, así la app siempre abre la última versión; sin conexión usa la copia guardada.
   Íconos, tema y motores externos (3D, STEP, PDF): copia guardada y se actualiza en segundo plano.
   Google (inicio de sesión, Drive, pedidos) y Cloudflare Access: siempre en línea, nunca se guarda. */
const VERSION = 'hub-2.2.0';
const BASE = ['./', 'index.html', 'theme.css', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png', 'favicon-32.png'];
const NUNCA = /(^|\.)google(apis)?\.com$|(^|\.)gstatic\.com$|cloudflareaccess\.com$/;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => Promise.all(BASE.map(u => c.add(new Request(u, {credentials: 'include', cache: 'reload'})).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
const guardable = res => res && (res.ok || res.type === 'opaque') && !res.redirected;

self.addEventListener('fetch', e => {
  const r = e.request; if(r.method !== 'GET') return;
  const u = new URL(r.url);
  if(NUNCA.test(u.hostname) || u.pathname.startsWith('/cdn-cgi/')) return;
  const mismo = u.origin === location.origin;
  const pagina = r.mode === 'navigate' || (mismo && /\.html?$|\/$/.test(u.pathname));

  if(pagina){
    // red primero (máx. 6 s), copia guardada si no hay conexión
    e.respondWith((async () => {
      const c = await caches.open(VERSION);
      try{
        const res = await Promise.race([fetch(r, {cache: 'no-store'}), new Promise((_, no) => setTimeout(() => no(new Error('lento')), 6000))]);
        if(guardable(res)) c.put(r, res.clone());
        return res;
      }catch(err){
        return (await c.match(r, {ignoreSearch: true})) || (await c.match('index.html')) ||
               new Response('Sin conexión', {status: 503, headers: {'Content-Type': 'text/plain; charset=utf-8'}});
      }
    })());
    return;
  }
  e.respondWith(caches.open(VERSION).then(async c => {
    const guardado = await c.match(r, {ignoreSearch: mismo});
    const red = fetch(r).then(res => { if(guardable(res)) c.put(r, res.clone()); return res; }).catch(() => null);
    if(guardado){ e.waitUntil(red); return guardado; }
    return (await red) || new Response('Sin conexión', {status: 503, headers: {'Content-Type': 'text/plain; charset=utf-8'}});
  }));
});
