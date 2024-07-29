const mysql = require('mysql');
const config = require('../config')

const dbconfig ={
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let conexion;

function connectSql(){
    conexion = mysql.createConnection(dbconfig)
    conexion.connect((err)=>{
        if(err){
            console.log('[db err]', err);
            setTimeout(connectSql, 200);
        } else {
            console.log('DB Conectada!!!!')
        }
    })
    conexion.on('error', err=>{
        console.log(' db error ', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            connectSql();
        }else{
            throw err;
        }
    })
}

connectSql();

function todos(tabla){
    return new Promise((resolve, reject)=>{
        conexion.query(`SELECT * FROM ${tabla}`, (error, result)=>{
            return error ? reject(error) : resolve(result);
        })
    }) 
}

function uno(tabla, id){
    return new Promise((resolve, reject)=>{
        conexion.query(`SELECT * FROM ${tabla} WHERE id=${id}`, (error, result)=>{
            return error ? reject(error) : resolve(result);
        })
    }) 
}


function agregar(tabla, data){

}

function eliminar(tabla, data){
    return new Promise((resolve, reject)=>{
        conexion.query(`DELETE FROM ${tabla} WHERE id = ?`, data.id ,(error, result)=>{
            return error ? reject(error) : resolve(result);
        })
    }) 
}


module.exports = {
    todos,
    uno,
    agregar,
    eliminar,
}