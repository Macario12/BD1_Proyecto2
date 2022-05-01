var express = require('express')
var controlador = require('../controllers/examenController');
let api = express.Router()
api.post('/addExamen', controlador.addExamen);
api.post('/addPregunta', controlador.addPregunta);
api.post('/addRespuesta', controlador.addRespuesta);
api.post('/obtenerxMaestro', controlador.obtenerxMaestro);
module.exports = api;