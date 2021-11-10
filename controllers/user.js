const { response, request } = require('express')
// we are calling response since we need to use the extention from express

const userGet = ( req= request, res = response ) => {

    // const query = req.query;
    const { q, name ="No name", apikey} = req.query;

    res.json({
        msg: 'get API - controller',
        // query
        q,
        name,
        apikey,
    })
}

const userPut =  ( req, res) => {

    const id = req.params.id;

    res.json({
        msg:'put API',
        id
    })
}

const userPost = ( req, res ) => {

    // const body = req.body;
    const { name, age } = req.body;

    res.json({
        msg:'post API',
        // body 
        name,
        age
    })
}

const userDelete =  ( req, res ) => {
    res.json({
        msg:'delete API'
    })
}

const userPatch = ( req, res ) =>{
    res.json({
        msg:'patch API'
    })
}



module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch
}