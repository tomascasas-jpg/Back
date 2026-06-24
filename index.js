// PRIMERA LINEA — cargar variables de entorno
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = ["http://localhost:5500", "http://127.0.0.1:5500"];
//const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5500";//
// ── MIDDLEWARES ──────────────────────────────────────────
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
// ── DATOS ────────────────────────────────────────────────
// Reemplazar con los artículos reales del grupo
const articulos = [
  {
    id: 1,
    titulo: "Titulo del primer artículo",
    subtitulo: "Subtitulo del primer artículo",
    autor: "Nombre Apellido",
    imagen: "URL de la Imagen",
    descripcion: "Descripcion de la Imagen.",
    contenido: "Contenido completo del artículo.",
    tituloEN: "Titulo del artículo EN",
    subtituloEN: "Subtitulo del artículo EN",
    imagenEN: "URL de la Imagen EN",
    descripcionEN: "Descripcion de la Imagen EN",
    contenidoEN: "Contenido completo del artículo EN",
    fecha: "Fecha de publicación",
  },
  {
    id: 2,
    titulo: "Titulo del segundo artículo",
    subtitulo: "Subtitulo del segundo artículo",
    autor: "Nombre Apellido",
    imagen: "URL de la Imagen",
    descripcion: "Descripcion de la Imagen.",
    contenido: "Contenido completo del artículo.",
    tituloEN: "Titulo del artículo EN",
    subtituloEN: "Subtitulo del artículo EN",
    imagenEN: "URL de la Imagen EN",
    descripcionEN: "Descripcion de la Imagen EN",
    contenidoEN: "Contenido completo del artículo EN",
    fecha: "Fecha de publicación",
  },
  {
    id: 3,
    titulo: "Titulo del tercer artículo",
    subtitulo: "Subtitulo del tercer artículo",
    autor: "Nombre Apellido",
    imagen: "URL de la Imagen",
    descripcion: "Descripcion de la Imagen.",
    contenido: "Contenido completo del artículo.",
    tituloEN: "Titulo del artículo EN",
    subtituloEN: "Subtitulo del artículo EN",
    imagenEN: "URL de la Imagen EN",
    descripcionEN: "Descripcion de la Imagen EN",
    contenidoEN: "Contenido completo del artículo EN",
    fecha: "Fecha de publicación",
  },
  {
    id: 4,
    titulo: "Titulo del cuarto artículo",
    subtitulo: "Subtitulo del cuarto artículo",
    autor: "Nombre Apellido",
    imagen: "URL de la Imagen",
    descripcion: "Descripcion de la Imagen.",
    contenido: "Contenido completo del artículo.",
    tituloEN: "Titulo del artículo EN",
    subtituloEN: "Subtitulo del artículo EN",
    imagenEN: "URL de la Imagen EN",
    descripcionEN: "Descripcion de la Imagen EN",
    contenidoEN: "Contenido completo del artículo EN",
    fecha: "Fecha de publicación",
  },
];
// ── RUTAS ────────────────────────────────────────────────
// GET /articulos → devuelve todos los artículos
app.get("/articulos", (req, res) => {
  res.json(articulos);
});
// GET /articulos/:id → devuelve un artículo por id
app.get("/articulos/:id", (req, res) => {
  const id = Number(req.params.id);
  const articulo = articulos.find((a) => a.id === id);
  if (!articulo) {
    return res.status(404).json({ error: "Artículo no encontrado" });
  }
  res.json(articulo);
});
// POST /articulos → crea un artículo nuevo
app.post("/articulos", (req, res) => {
  const {
    titulo,
    subtitulo,
    imagen,
    autor,
    categoria,
    descripcion,
    contenido,
    tituloEN,
    subtituloEN,
    imagenEN,
    contenidoEN,
    descripcionEN,
    fecha,
  } = req.body;

  if (!titulo || !autor || !descripcion) {
    return res.status(400).json({
      error: "Los campos título, autor y descripción son obligatorios",
    });
  }
  const nuevo = {
    id: articulos.length + 1,
    titulo,
    subtitulo,
    autor,
    imagen,
    categoria: categoria || "Sin categoría",
    descripcion,
    contenido,
    tituloEN,
    subtituloEN,
    imagenEN,
    contenidoEN,
    descripcionEN,
    fecha,
  };
  articulos.push(nuevo);
  res.status(201).json(nuevo);
});
// ── 404 ──────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});
// ── ERROR HANDLER ─────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: "Error interno del servidor" });
});
// ── INICIAR SERVIDOR ──────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
