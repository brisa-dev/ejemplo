const express = require('express');
const respuesta = require('../red/respuestas');
const controladores = require('./index');

const router = express.Router();

router.get('/login', login);

async function login(req,res,next){
    try {
        const token = await controladores.login(req.body.usuario, req.body.password)
        respuesta.sucess(req,res,token,200);
    } catch (err) {
        next(err);
    }
}

module.exports = router;
