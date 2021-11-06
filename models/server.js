
const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.emprendedorPath = '/api/emprendedor';

        //middlewares
        this.middlewares();
        //rutas de aplicacion

        this.routes();

    }

    middlewares() {
        //cors
        this.app.use(cors());

        //directorio publico 
        this.app.use(express.static('public'));

        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.emprendedorPath, require ('d:/Back/routes/emprendedor'));
    }

    
    listen() {
        this.app.listen(this.port,()=> {
            console.log('servidor corriendo en ', this.port);
        });
    }

}
module.exports = Server;