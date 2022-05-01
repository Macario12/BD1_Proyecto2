var Publicacion = require('../model/publicacion')

async function add(req, res){
    publicacion = await Publicacion.addPublicacion(req.body);

    return res.status(200).send({publicacion})
}

function actualizar(req, res){
    Publicacion.actualizar(req.body,(result)=>{
     return res.status(200).send(result)   
    });
     
 }

 function eliminar(req, res){
    Publicacion.eliminar(req.body,(result)=>{
     return res.status(200).send(result)   
    });
     
 }

 function obtener(req, res){
    Publicacion.obtener((result)=>{
     return res.status(200).send(result)   
    });
     
 }

 function obtenerxMaestro(req, res){
   Publicacion.obtenerxMaestro(req.body,(result)=>{
    return res.status(200).send(result)   
   });
    
}

function obtenerxAlumno(req, res){
   Publicacion.obtenerxAlumno(req.body,(result)=>{
    return res.status(200).send(result)   
   });
    
}


module.exports = {
    /*C     R       U           D*/
      add,obtener,actualizar,eliminar,obtenerxMaestro,obtenerxAlumno
}