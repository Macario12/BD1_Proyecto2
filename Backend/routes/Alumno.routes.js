var express = require('express')
var controlador = require('../controllers/alumnoController');
let api = express.Router()
api.post('/add', controlador.add);
module.exports = api;