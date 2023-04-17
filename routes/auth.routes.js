'Ruta: /api/auth';
const { Router } = require('express');
const {login, getUser} = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validar_campos.middleware');
const { validarJWT } = require('../middlewares/validar_JWT.middleware');

const router = Router();

router.post('/', login);
router.get('/', validarJWT, getUser);

module.exports = router;