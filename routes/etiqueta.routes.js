// Ruta: /api/etiqueta

const { Router } = require('express');
const { obtenerTodasLasEtiquetas, obtenerEtiquetaPorId, crearEtiqueta, actualizarEtiqueta, eliminarEtiqueta } = require('../controllers/etiqueta.controller');

const router = Router();

router.get('/', obtenerTodasLasEtiquetas); // Ruta para obtener todas las etiquetas
router.get('/byId', obtenerEtiquetaPorId); // Ruta para obtener una etiqueta por su ID
router.post('/', crearEtiqueta); // Ruta para crear una nueva etiqueta
router.put('/', actualizarEtiqueta); // Ruta para actualizar una etiqueta por su ID
router.delete('/', eliminarEtiqueta); // Ruta para eliminar una etiqueta por su ID

module.exports = router;
