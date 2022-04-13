var express = require('express')
var controlador = require('../controllers/alumnoController');
let api = express.Router()
api.post('/add', controlador.add);
api.post('/login', controlador.login);
module.exports = api;