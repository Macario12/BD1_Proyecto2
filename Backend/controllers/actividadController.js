var Actividad = require('../model/actividad')

async function add(req, res){
    actividad = await Actividad.addActividad(req.body);

    return res.status(200).send({actividad})
}

function eliminar(req, res){
    Actividad.eliminar(req.body,(result)=>{
     return res.status(200).send(result)   
    });
     
 }

 function obtenerTodos(req, res){
    Actividad.obtenerTodos((result)=>{
     return res.status(200).send(result)   
    });
     
 }

 function obtenerxAlumno(req, res){
    Actividad.obtenerxAlumno(req.body,(result)=>{
     return res.status(200).send(result)   
    });
     
 }
 
 function obtenerxMaestro(req, res){
    Actividad.obtenerxMaestro(req.body,(result)=>{
     return res.status(200).send(result)   
    });
     
 }

 function obtenerEntregaxAlumno(req, res){
   Actividad.obtenerEntregaxAlumno(req.body,(result)=>{
    return res.status(200).send(result)   
   });
    
}

function obtenerActividadxMateria(req, res){
   Actividad.obtenerActividadxMateria(req.body,(result)=>{
    return res.status(200).send(result)   
   });
    
}
module.exports = {/*Falta Eliminar */
    add,eliminar,obtenerTodos,obtenerxAlumno,obtenerxMaestro,obtenerEntregaxAlumno,obtenerActividadxMateria
}