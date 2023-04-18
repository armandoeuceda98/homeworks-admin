const { request, response } = require('express');
const bcrypt = require('bcrypt');

const db = require('../models/index');
const Usuario = db.usuario;

// Obtener todos los usuarios
const usuarioGet = async (req = request, res = response) => {

    const usuario = await Usuario.findAll();

    return res.status(200).json({
        usuario
    });
}

// Obtener usuario por id
const usuarioGetById = async (req = request, res = response) => {

    const { idUsuario } = req.body;
    try {
        const usuario = await Usuario.findByPk(idUsuario);
        if (usuario) {
            res.status(200).json(usuario);
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al obtener el usuario' });
    }
}

// Crear un nuevo usuario
const usuarioPost = async (req = request, res = response) => {

    const { usuario, password } = req.body;
    try {

        const encryptpass = bcrypt.hashSync(password, 8);

        const nuevoUsuario = await Usuario.create({
            usuario: usuario,
            password: encryptpass
        });
        res.json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al crear el usuario' });
    }
};

// Actualizar usuario
const usuarioPut = async (req = request, res) => {
    const { idUsuario, password } = req.body
    try {

        const encryptpass = bcrypt.hashSync(password, 8);

        const usuario = await Usuario.update({
            password: encryptpass,
        }, {
            where: {
                idUsuario: idUsuario
            }
        });

        return res.status(200).send({
            message: "Actualizado con éxito.",
            usuario
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Ocurrio un error" + error
        });
    }
}

module.exports = {
    usuarioGet,
    usuarioGetById,
    usuarioPost,
    usuarioPut,
}

