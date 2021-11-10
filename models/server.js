const express = require('express');

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
        //directory public
        this.app.use( express.static('public'))
    }

    routes(){
        this.app.get('/api', (req, res) => {
            res.send('hello world')
        })
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('server runing in port', this.port);
        })
    }

}

module.exports = Server;