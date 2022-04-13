const config = require('../database/connection')
let mysql = require('mysql');

async function addPublicacion(publicacion){
    
    let connection = mysql.createConnection(config);
    connection.query("CALL add_publicacion(?,?,?,?)" ,
    [publicacion.titulo,publicacion.descripcion,publicacion.fecha,publicacion.id_materia]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
      connection.end();
}

module.exports = {
    addPublicacion
}