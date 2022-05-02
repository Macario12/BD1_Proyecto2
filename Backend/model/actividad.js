const connection = require('../database/connection')

async function addActividad(actividad){
    connection.query("CALL add_actividad(?,?,?,?,?);" ,
    [actividad.titulo,actividad.descripcion,actividad.fecha_entrega,actividad.punteo,actividad.id_materia]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
}

async function eliminar(actividad,callback){
 connection.query('CALL delete_Actividad(?);',[actividad.id], function(err,result){
    if(err) throw err;
    callback(result[0][0])
 });
    
}

async function obtenerTodos(callback){
  connection.query('CALL consultarActividad();', function(err,result){
     if(err) throw err;
     callback(result[0])
  });
  
 }

 async function obtenerxAlumno(publicacion,callback){
  
  connection.query('CALL consultaActividadxAlumno(?);',[publicacion.id], function(err,result){
     if(err) throw err;
     callback(result[0])
  });
     
 }

 async function obtenerxMaestro(publicacion,callback){
  
   connection.query('CALL consultaActivididadxMaestro(?);',[publicacion.id], function(err,result){
      if(err) throw err;
      callback(result[0])
   });
      
  }

  async function obtenerEntregaxAlumno(publicacion,callback){
  
   connection.query('CALL consultaEntregaActividadxAlumno(?);',[publicacion.id], function(err,result){
      if(err) throw err;
      callback(result[0])
   });
      
  }

  async function obtenerActividadxMateria(publicacion,callback){
  
   connection.query('CALL consultarActividadxMateria(?,?);',[publicacion.id,publicacion.idAlumno], function(err,result){
      if(err) throw err;
      callback(result[0])
   });
      
  }


module.exports = {
    addActividad,eliminar,obtenerTodos,obtenerxAlumno,obtenerxMaestro,obtenerEntregaxAlumno,obtenerActividadxMateria
}