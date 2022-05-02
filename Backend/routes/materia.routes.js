var express = require('express')
var controlador = require('../controllers/materiaController');
let api = express.Router()
api.post('/add', controlador.add);
api.get('/obtenerTodos', controlador.obtenerTodos);
api.post('/consultarmateriaxmaestro', controlador.consultarmateriaxmaestro);
api.post('/consultaractividadxmateria', controlador.consultaractividadxmateria);
module.exports = api;