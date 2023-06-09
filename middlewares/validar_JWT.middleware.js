const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req = request, res = response, next) => {

    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(404).json({
            msg: "No hay token en la petición."
        })
    }

    try {
        const { idUsuario } = jwt.verify(token, process.env.API_KEY);
        req.uid = idUsuario;
        next();
    } catch (error) {
        res.status(401).json({
            msg: 'Token no válido.'
        })
    }


}

module.exports = {
    validarJWT
}