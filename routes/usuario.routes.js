'Ruta: /api/usuario';

const { Router } = require('express');
const { usuarioGet, usuarioPost, usuarioPut, usuarioGetById } = require('../controllers/usuario.controller');
const { validarJWT } = require('../middlewares/validar_JWT.middleware');
const { check } = require('express-validator');

const router = Router();

router.get('/', [
    validarJWT,
], usuarioGet);
router.get('/byId', [
    validarJWT,
    check('idUsuario', 'El id de Usuario es obligatorio.').notEmpty(),
    check('idUsuario', 'El id de Usuario es entero.').isInt(),
], usuarioGetById);
router.post('/', [
    validarJWT,
    check('usuario', 'El usuario es obligatorio.').notEmpty(),
    check('usuario', 'El usuario es texto.').isString(),
    check('password', 'El password es obligatorio.').notEmpty(),
    check('password', 'El password es texto.').isString(),
], usuarioPost);
router.put('/', [
    validarJWT,
    check('idUsuario', 'El id de Usuario es obligatorio.').notEmpty(),
    check('idUsuario', 'El id de Usuario es entero.').isInt(),
    check('password', 'El password es obligatorio.').notEmpty(),
    check('password', 'El password es texto.').isString(),
], usuarioPut);

module.exports = router;



