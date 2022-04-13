const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

//Rutas de los Controladores.
var routes_alumno = require('./routes/Alumno.routes')
var routes_actividad = require('./routes/actividad.routes')
var routes_asignacion = require('./routes/asignacion.routes')
var routes_entregaExamen = require('./routes/entregaExamen.routes')
var routes_entregaTarea = require('./routes/entregaTarea.routes')
var routes_examen = require('./routes/examen.routes')
var routes_maestro = require('./routes/maestro.routes')
var routes_materia = require('./routes/materia.routes')
var routes_notificacion = require('./routes/notificacion.routes')
var routes_publicacion = require('./routes/publicacion.routes')

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
app.use('/actividad',routes_actividad)
app.use('/asignacion',routes_asignacion)
app.use('/entregaExamen',routes_entregaExamen)
app.use('/entregaTarea',routes_entregaTarea)
app.use('/examen',routes_examen)
app.use('/maestro',routes_maestro)
app.use('/materia',routes_materia)
app.use('/notificacion',routes_notificacion)
app.use('/publicacion',routes_publicacion)

module.exports = app