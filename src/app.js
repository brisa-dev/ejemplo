const express = require('express');
const morgan = require('morgan')
const config = require('./config');
const clientes = require('./clientes/rutas')
const usuarios = require('./usuarios/rutas')
const auth = require('./auth/rutas')
const error = require('./red/errors')
const app = express();

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//configuraciones
app.set('port', config.app.port)

//rutas 
app.use('/api/cliente', clientes)
app.use('/api/usuario', usuarios)
app.use('/api/auth', auth)
app.use(error);

module.exports = app;