const express = require('express');
const dbConection = require('./database/config');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.authRoutePath = '/api/auth';
        this.usuariosRoutePath = '/api/usuario';
        this.categoriaRoutePath = '/api/categoria';
        this.comentarioRoutePath = '/api/comentario';
        this.etiquetaRoutePath = '/api/etiqueta';
        this.prioridadRoutePath = '/api/prioridad';
        this.tareaRoutePath = '/api/tarea';

        // Midlewares: funciones que siempre se van a ejecutar cuando iniciamos un servidor
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    async syncDB() {
        try {
            
            const db = require("./models/index");
            await dbConection.sync({
                force: false
            }).then(() => {
                // init.initial();
                console.log('Sincronización exitosa');
            });

        } catch (error) {
            console.log(error)
        }
    }
 
    middlewares() {

        // CORS
        this.app.use(cors())

        // Lectura y parseo del body
        this.app.use(express.json()); // Función de express que permite leer y parsear el body de una petición

        // Directorio público
        this.app.use( express.static('public') );

    }

   // Endpoints 
    routes() {
        this.app.use(this.authRoutePath, require('./routes/auth.routes'));
        this.app.use(this.categoriaRoutePath, require('./routes/categoria.routes'));
        this.app.use(this.comentarioRoutePath, require('./routes/comentario.routes'));
        this.app.use(this.etiquetaRoutePath, require('./routes/etiqueta.routes'));
        this.app.use(this.prioridadRoutePath, require('./routes/prioridad.routes'));
        this.app.use(this.tareaRoutePath, require('./routes/tarea.routes'));
        this.app.use(this.usuariosRoutePath, require('./routes/usuario.routes'));
    }

    listen() {
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo en puerto: ', this.port );
        });
    }

}

module.exports = Server;