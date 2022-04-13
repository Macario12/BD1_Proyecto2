const config = require('../database/connection')
let mysql = require('mysql');

async function addAsignacion(asignacion){
    
    let connection = mysql.createConnection(config);
    connection.query("CALL add_asignacion(?,?,?)" ,
    [asignacion.nota,asignacion.id_alumno,asignacion.id_materia]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
      connection.end();
}

module.exports = {
    addAsignacion
}