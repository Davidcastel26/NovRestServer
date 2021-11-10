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
        this.app.get('/api', ( req, res ) => {
            // we need to use json insted of 'send'
            // since we would like to return a object
            // res.send('hello world')
            res.json({
          //res.status(403).json({
                //ok is an opcional props
                // ok: true,
                msg: 'get API'
            })
        })

        this.app.put('/api', ( req, res) => {
            res.json({
                msg:'put API'
            })
        })

        this.app.post('/api', ( req, res ) => {
            res.json({
                msg:'post API'
            })
        })

        this.app.delete( '/api', ( req, res ) => {
            res.json({
                msg:'delete API'
            })
        })
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('server runing in port', this.port);
        })
    }

}

module.exports = Server;