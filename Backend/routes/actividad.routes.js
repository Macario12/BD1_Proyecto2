var express = require('express')
var controlador = require('../controllers/actividadController');
let api = express.Router()
api.post('/add', controlador.add);
api.post('/delete', controlador.eliminar);
module.exports = api;