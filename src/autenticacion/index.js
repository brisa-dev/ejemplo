const jwt = require('jsonwebtoken');
config = require('../config')

secret = config.jwt.secret;

function asignarToken(data){
    return jwt.sign(data, secret);
}

module.exports ={
    asignarToken
}