'Ruta: /api/usuario';

const { Router } = require('express');
const { usuarioGet, usuarioPost, usuarioPut, usuarioGetById } = require('../controllers/usuario.controller');

const router = Router();

router.get('/', usuarioGet);
router.get('/byId', usuarioGetById);
router.post('/', usuarioPost);
router.put('/', usuarioPut);
// router.patch('/', usuariosPatch);
// router.delete('/', usuariosDelete);

module.exports = router;



