// Ruta: /api/etiqueta

const { Router } = require('express');
const { obtenerTodasLasEtiquetas, obtenerEtiquetaPorId, crearEtiqueta, actualizarEtiqueta, eliminarEtiqueta } = require('../controllers/etiqueta.controller');

const router = Router();

router.get('/etiquetas', obtenerTodasLasEtiquetas); // Ruta para obtener todas las etiquetas
router.get('/etiquetas/:id', obtenerEtiquetaPorId); // Ruta para obtener una etiqueta por su ID
router.post('/etiquetas', crearEtiqueta); // Ruta para crear una nueva etiqueta
router.put('/etiquetas/:id', actualizarEtiqueta); // Ruta para actualizar una etiqueta por su ID
router.delete('/etiquetas/:id', eliminarEtiqueta); // Ruta para eliminar una etiqueta por su ID

module.exports = router;
