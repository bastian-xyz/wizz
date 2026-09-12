/* =========================================================
   data.js - FUENTE ÚNICA DE DATOS
   Todo lo que agregues acá se refleja solo en STATS.
   Estados válidos: "activo" | "pendiente" | "listo" | "pausado"
   ========================================================= */

const DB = {

  /* ---------------------------------------------------------
     ITEMS - acá vas agregando lo que sea (piezas, ideas, encargos)
     --------------------------------------------------------- */
  items: [
    { id: "IT-001", nombre: "Ejemplo de ítem", categoria: "General", estado: "pendiente", nota: "Borrá este y agregá los tuyos." }
  ],

  /* ---------------------------------------------------------
     TOOLBOX - herramientas ya integradas
     archivo: ruta relativa (los .html viven en la carpeta de arriba)
     --------------------------------------------------------- */
  toolbox: [
    { id: "TB-001", nombre: "DXF Lab",           archivo: "../dxf-lab.html",           estado: "listo",     desc: "Laboratorio principal de DXF." },
    { id: "TB-002", nombre: "DXF Draft",         archivo: "../dxf-draft.html",         estado: "listo",     desc: "Borrador / editor de trazado DXF." },
    { id: "TB-003", nombre: "ACME DXF",          archivo: "../acme-dxf.html",          estado: "listo",     desc: "Generador DXF ACME." },
    { id: "TB-004", nombre: "NIMF Cotizador",    archivo: "../nimf-cotizador.html",    estado: "listo",     desc: "Cotizador NIMF." },
    { id: "TB-005", nombre: "Laser Fibra",       archivo: "../laser-fibra.html",       estado: "listo",     desc: "Cálculo / parámetros de corte fibra." },
    { id: "TB-006", nombre: "Cotiz Letras",      archivo: "../cotiz-letras.html",      estado: "listo",     desc: "Cotizador de letras corpóreas." },
    { id: "TB-007", nombre: "Apex Bicycle Lab",  archivo: "../apex-bicycle-lab.html",  estado: "listo",     desc: "Laboratorio Apex." }
  ],

  /* ---------------------------------------------------------
     QUEST - objetivos / pendientes
     prioridad: "alta" | "media" | "baja"
     --------------------------------------------------------- */
  quests: [
    { id: "QS-001", titulo: "Definir estructura del hub", estado: "listo",      prioridad: "alta",  nota: "Menú + 4 secciones." },
    { id: "QS-002", titulo: "Cargar ítems reales",        estado: "pendiente",  prioridad: "alta",  nota: "Reemplazar el ítem de ejemplo." },
    { id: "QS-003", titulo: "Migrar a repo nuevo",        estado: "pendiente",  prioridad: "media", nota: "Esta carpeta es autocontenida." }
  ]

};
