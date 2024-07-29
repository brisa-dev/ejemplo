const db = require('../DB/mysql')

const ctrl = require('./controladores')

module.exports = ctrl(db)