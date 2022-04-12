const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

//Rutas de los Controladores.
var routes_alumno = require('./routes/AlumnoRoutes')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use((req,res,next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, OPTIONS ,POST, PUT, DELETE');

    next();

});

app.use('/alumno',routes_alumno)
module.exports = app