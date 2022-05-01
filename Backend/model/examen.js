const connection = require('../database/connection')

async function addExamen(examen){
    
    
    connection.query("CALL add_examen(?,?,?,?,?)" ,
    [examen.nombreExamen,examen.fecha_publicacion,examen.hora_inicio,examen.hora_fin,examen.id_materia]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
      
}

async function addPregunta(pregunta,callback){
    
  
  connection.query("CALL add_pregunta(?,?,?)" ,
  [pregunta.pregunta,pregunta.nota,pregunta.id_examen]
  , function(err,result){
    if(err) throw err;
    callback(result[0][0])
 });
    
    
}

async function addRespuesta(respuesta){
    
  
  connection.query("CALL add_respuesta(?,?,?)" ,
  [respuesta.respuesta,respuesta.correcta,respuesta.id_pregunta]
  , (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results[0]);
    });
    
    
}

async function obtenerxMaestro(publicacion,callback){
  
  connection.query('CALL consultaExamenxMaestro(?);',[publicacion.id], function(err,result){
     if(err) throw err;
     callback(result[0])
  });
     
 }
module.exports = {
    addExamen,
    addPregunta,
    addRespuesta,
    obtenerxMaestro
    
}