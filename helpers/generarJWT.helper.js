const jwt = require('jsonwebtoken');

const generarJWT = (usuario = '', password = '') => {

    return new Promise((resolve, reject) => {

        const payload = { usuario, password };

        jwt.sign(payload, process.env.API_KEY, {
            expiresIn: '18000' // 5 horas
        }, (err, token) => {
            if (err) {
                reject('No se pudo generar el token.')
            } else {
                resolve(token);
            }
        });


    })
}

module.exports = {
    generarJWT
}