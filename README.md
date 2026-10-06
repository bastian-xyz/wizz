# (X,Y,Z) · C.I.D.

Central de Implementación y Desarrollo.

## Cómo se publica

- Cada versión vive en su carpeta: `versiones/2.2.0/`, `versiones/2.2.1/`, …
- **`ACTIVA.txt`** dice cuál se publica (una sola línea, por ejemplo `2.2.1`).
- Al subir una carpeta nueva o cambiar `ACTIVA.txt`, se publica sola en un par de minutos.
- Volver atrás = escribir la versión anterior en `ACTIVA.txt`.

## Versión 2.2.0

| Archivo | Qué es | Versión |
|---|---|---|
| `index.html` | Hub completo: CUBIK, Ensambles, Bandejas, Mobiliario, Plegadora, DRAFT, Herramientas extras y Pedidos | 2.2.0 |
| `rifa.html` | Sorteador de Rifa (herramienta aparte) | 1.3.1 |
| `theme.css` | Tema visual C.I.D. | 1.1.0 |
| `manifest.webmanifest`, `sw.js`, íconos | Instalación como app | hub-2.2.0 |
| `_headers` | Cabeceras para Cloudflare Pages | — |

Datos en Google Drive › C.I.D. (pedidos, carpetas de pedidos, Rifas).

## Cloudflare Pages (cuando se migre)

- Build command: `V=$(tr -d ' \r\n\t' < ACTIVA.txt) && mkdir -p _sitio && cp -r versiones/$V/. _sitio/`
- Build output directory: `_sitio`
