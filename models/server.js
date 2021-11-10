const express = require('express');
const cors = require('cors')

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Routs from my app
        this.routes();
    }

    middlewares(){
        //cors
        this.app.use(cors())
        //directory public
        this.app.use( express.static('public'))
    }

    routes(){
        this.app.use('/api/users', require('../routes/user') )

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('server runing in port', this.port);
        })
    }

}

module.exports = Server;