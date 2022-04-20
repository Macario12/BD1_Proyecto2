const config = require('../database/connection')
let mysql = require('mysql');

async function addExamen(examen){
    
    let connection = mysql.createConnection(config);
    connection.query("CALL add_examen(?,?,?,?,?)" ,
    [examen.nombreExamen,examen.fecha_publicacion,examen.hora_inicio,examen.hora_fin,examen.id_materia]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
      connection.end();
}

async function addPregunta(pregunta,callback){
    
  let connection = mysql.createConnection(config);
  connection.query("CALL add_pregunta(?,?,?)" ,
  [pregunta.pregunta,pregunta.nota,pregunta.id_examen]
  , function(err,result){
    if(err) throw err;
    callback(result[0][0])
 });
    
    connection.end();
}

async function addRespuesta(respuesta){
    
  let connection = mysql.createConnection(config);
  connection.query("CALL add_respuesta(?,?,?)" ,
  [respuesta.respuesta,respuesta.correcta,respuesta.id_pregunta]
  , (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results[0]);
    });
    
    connection.end();
}
module.exports = {
    addExamen,
    addPregunta,
    addRespuesta
    
}