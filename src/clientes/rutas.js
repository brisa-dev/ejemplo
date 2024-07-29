const express = require('express');
const respuesta = require('../red/respuestas');
const controladores = require('./controladores');

const router = express.Router();

router.get('/', todos);
router.get('/:id', uno);
router.put('/', eliminar);
    
async function todos(req,res){
    try {
        const items = await controladores.todos()
        respuesta.sucess(req,res,items,200)
    } catch (error) {
        respuesta.error(req,res,err,500)
    }
}

 async function uno(req,res){
    try {
        const items = await controladores.uno(req.params.id)
        respuesta.sucess(req,res,items,200)
    } catch (error) {
        respuesta.error(req,res,err,500)   
    }
}

async function eliminar(req,res){
    try {
        const items = await controladores.eliminar(req.body)
        respuesta.sucess(req,res,'Item eliminado',200)
    } catch (error) {
        respuesta.error(req,res,err,500)   
    }
}



module.exports = router;
