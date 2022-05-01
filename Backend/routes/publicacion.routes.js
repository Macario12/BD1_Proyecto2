var express = require('express')
var controlador = require('../controllers/publicacionController');
let api = express.Router()
api.post('/add', controlador.add);
api.put('/update', controlador.actualizar);
api.post('/delete', controlador.eliminar);
api.get('/get', controlador.obtener);
api.post('/obtenerxMaestro', controlador.obtenerxMaestro);
module.exports = api;