var express = require('express')
var controlador = require('../controllers/alumnoController');
let api = express.Router()
api.post('/add', controlador.add);
api.post('/login', controlador.login);
api.post('/cargaMasiva', controlador.cargaMasiva);
api.post('/delete', controlador.eliminar);
api.get('/obtenerTodos', controlador.obtenerTodos);
api.post('/alumnosxmateria', controlador.alumnosxmateria);
module.exports = api;