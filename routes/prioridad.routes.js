// Ruta: /api/prioridad

const { Router } = require('express');
const { obtenerTodasLasPrioridades, obtenerPrioridadPorId, crearPrioridad, actualizarPrioridad, eliminarPrioridad } = require('../controllers/prioridad.controller');

const router = Router();

router.get('/prioridades', obtenerTodasLasPrioridades); // Ruta para obtener todas las prioridades
router.get('/prioridades/:id', obtenerPrioridadPorId); // Ruta para obtener una prioridad por su ID
router.post('/prioridades', crearPrioridad); // Ruta para crear una nueva prioridad
router.put('/prioridades/:id', actualizarPrioridad); // Ruta para actualizar una prioridad por su ID
router.delete('/prioridades/:id', eliminarPrioridad); // Ruta para eliminar una prioridad por su ID

module.exports = router;
