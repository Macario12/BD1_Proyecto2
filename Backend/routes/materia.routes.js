var express = require('express')
var controlador = require('../controllers/materiaController');
let api = express.Router()
api.post('/add', controlador.add);
module.exports = api;