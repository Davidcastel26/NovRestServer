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

router.get('/api', ( req, res ) => {
    res.json({
        msg: 'get API'
    })
})

router.put('/api', ( req, res) => {
    res.json({
        msg:'put API'
    })
})

router.post('/api', ( req, res ) => {
    res.json({
        msg:'post API'
    })
})

router.delete( '/api', ( req, res ) => {
    res.json({
        msg:'delete API'
    })

router.patch('/api', ( req, res ) =>{
    res.json({
        msg:'patch API'
    })
})
})




module.exports = router;