var express = require('express')
var controlador = require('../controllers/actividadController');
let api = express.Router()
api.post('/add', controlador.add);
api.post('/delete', controlador.eliminar);
api.get('/obtenerTodos', controlador.obtenerTodos);
api.post('/obtenerxAlumno', controlador.obtenerxAlumno);
api.post('/obtenerxMaestro', controlador.obtenerxMaestro);
module.exports = api;