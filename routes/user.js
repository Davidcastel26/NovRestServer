const { Router } = require('express')

const router = Router()


// this.app.get('/api', ( req, res ) => {
//     // we need to use json insted of 'send'
//     // since we would like to return a object
//     // res.send('hello world')
//     res.json({
//   //res.status(403).json({
//         //ok is an opcional props
//         // ok: true,
//         msg: 'get API'
// /     })
// / })

// / this.app.put('/api', ( req, res) => {
// /     res.json({
// /         msg:'put API'
// /     })
// / })

router.get('/', ( req, res ) => {
// router.get('/api', ( req, res ) => { // we do not need '/api' since we already provide the rout instruction into the server js file
    res.json({
        msg: 'get API'
    })
})

router.put('/', ( req, res) => {
    res.json({
        msg:'put API'
    })
})

router.post('/', ( req, res ) => {
    res.json({
        msg:'post API'
    })
})

router.delete( '/', ( req, res ) => {
    res.json({
        msg:'delete API'
    })
})

router.patch('/', ( req, res ) =>{
    res.json({
        msg:'patch API'
    })
})

module.exports = router;