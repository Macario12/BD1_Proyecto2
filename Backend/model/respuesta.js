const config = require('../database/connection')
let mysql = require('mysql');

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
    addRespuesta
}