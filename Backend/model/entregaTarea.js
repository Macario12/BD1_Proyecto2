const config = require('../database/connection')
let mysql = require('mysql');

async function addEntregaTarea(entrega){
    
    let connection = mysql.createConnection(config);
    connection.query("CALL add_entrega_tarea(?,?,?,?,?,?,?)" ,
    [entrega.fecha,entrega.archivo,entrega.estado,entrega.puntuacion,entrega.observacion,entrega.id_alumno,entrega.id_actividad]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
      connection.end();
}

module.exports = {
    addEntregaTarea
}