// Ruta: /api/etiqueta

const { Router } = require('express');
const { obtenerTodasLasEtiquetas, obtenerEtiquetaPorId, crearEtiqueta, actualizarEtiqueta, eliminarEtiqueta } = require('../controllers/etiqueta.controller');
const { validarJWT } = require('../middlewares/validar_JWT.middleware');

const router = Router();

router.get('/', [validarJWT], obtenerTodasLasEtiquetas); // Ruta para obtener todas las etiquetas
router.get('/byId', [validarJWT], obtenerEtiquetaPorId); // Ruta para obtener una etiqueta por su ID
router.post('/', [validarJWT], crearEtiqueta); // Ruta para crear una nueva etiqueta
router.put('/', [validarJWT], actualizarEtiqueta); // Ruta para actualizar una etiqueta por su ID
router.delete('/', [validarJWT], eliminarEtiqueta); // Ruta para eliminar una etiqueta por su ID

module.exports = router;
