const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const { usuario, rolPermiso } = require("../models/index")
const { request, response } = require('express');

const isPermisos = (permiso) => {

  return async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const { uid } = jwt.verify(token, process.env.API_KEY);
    try {
      const user = await usuario.findOne({
        raw: true,
        where: {
          idUsuario: uid
        }
      })

      const rolpermiso = await rolPermiso.findOne({
        raw: true,
        where: {
          idRol: user.idRol,
          idPermiso: permiso
        }
      })

      if (rolpermiso) {
        next()
      } else {
        return res.status(401).send({
          message: "No tienes el permiso necesario",
        });
      }
    } catch (error) {
      return res.status(500).send({
        message: "Error al Verificar Permiso",

      });
    }
  }
}


module.exports = {
  isPermisos
}

