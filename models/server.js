const express = require('express');

class Server{
    constructor(){
        this.app = express();
    }

    routes(){
        this.app.get('/', (req, res) => {
            res.send('hello world')
        })
    }

}

module.exports = Server;