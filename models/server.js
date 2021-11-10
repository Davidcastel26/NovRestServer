const express = require('express');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.routes();
    }

    routes(){
        this.app.get('/', (req, res) => {
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