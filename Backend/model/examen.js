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

module.exports = {
    addExamen
}