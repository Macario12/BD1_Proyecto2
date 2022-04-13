var express = require('express')
var controlador = require('../controllers/entregaExamenController');
let api = express.Router()
api.post('/addExamen', controlador.addEntrega);
api.post('/addEntrega', controlador.addEntrega);
module.exports = api;