var express = require('express')
var controlador = require('../controllers/maestroController');
let api = express.Router()
api.post('/add', controlador.add);
api.post('/login', controlador.login);
api.post('/cargaMasiva', controlador.cargaMasiva);
api.post('/delete', controlador.eliminar);
api.put('/update', controlador.actualizar);
api.get('/obtenerTodos', controlador.obtenerTodos);
module.exports = api;