const express = require('express');
const respuesta = require('../red/respuestas');
const controladores = require('./controladores');

const router = express.Router();

router.get('/', todos);
router.get('/:id', uno);
router.post('/', agregar);
router.put('/', eliminar);
    
async function todos(req,res, next){
    try {
        const items = await controladores.todos()
        respuesta.sucess(req,res,items,200)
    } catch (error) {
        next(err);
    }
}

 async function uno(req,res,next){
    try {
        const items = await controladores.uno(req.params.id)
        respuesta.sucess(req,res,items,200)
    } catch (error) {
        next(err);
}}

async function agregar(req,res,next){
    try {
        const items = await controladores.agregar(req.body)
        if (req.body.id == 0) {
            mensaje = 'Item guardado con exito'
        } else {
            mensaje = 'Item actualizado con exito'
        }
        respuesta.sucess(req,res,mensaje,201)
    } catch (error) {
        next(err);
    }
}

async function eliminar(req,res,next){
    try {
        const items = await controladores.eliminar(req.body)
        respuesta.sucess(req,res,'Item eliminado',200)
    } catch (error) {
        next(err);
    }
}



module.exports = router;
