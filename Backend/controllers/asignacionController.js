var Asignacion = require('../model/asignacion')

async function add(req, res){
    asignacion = await Asignacion.addAsignacion(req.body);

    return res.status(200).send({asignacion})
}

function obtenerxAlumno(req, res){
    Asignacion.obtenerxAlumno(req.body,(result)=>{
     return res.status(200).send(result)   
    });
     
 }

module.exports = {
    add,obtenerxAlumno
}