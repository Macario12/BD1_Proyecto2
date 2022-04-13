const config = require('../database/connection')
let mysql = require('mysql');

async function addMasestro(maestro){
    
    let connection = mysql.createConnection(config);
    connection.query("CALL add_maestro(?,?,?,?,?,?,?,?,?,?)" ,
    [maestro.nombre,maestro.apellido,maestro.no_registro,maestro.telefono,maestro.direccion,maestro.email,maestro.fecha_nac,maestro.dpi,maestro.foto_perfil,maestro.contrasenia]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
      connection.end();
}

module.exports = {
    addMasestro
}