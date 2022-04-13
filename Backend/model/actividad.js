const config = require('../database/connection')
let mysql = require('mysql');

async function addActividad(actividad){
    
    let connection = mysql.createConnection(config);
    connection.query("CALL add_actividad(?,?,?,?,?,?)" ,
    [actividad.titulo,actividad.descripcion,actividad.fecha_entrega,actividad.fecha_publicacion,actividad.punteo,actividad.id_materia]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
      connection.end();
}

module.exports = {
    addActividad
}