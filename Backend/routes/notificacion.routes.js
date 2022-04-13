var express = require('express')
var controlador = require('../controllers/notificacionController');
let api = express.Router()
api.post('/addNotiExamen', controlador.addNotiExamen);
api.post('/addNotiTarea', controlador.addNotiTarea);
module.exports = api;