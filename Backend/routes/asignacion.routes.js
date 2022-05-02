var express = require('express')
var controlador = require('../controllers/asignacionController');
let api = express.Router()
api.post('/add', controlador.add);
api.post('/obtenerxAlumno', controlador.obtenerxAlumno);
module.exports = api;