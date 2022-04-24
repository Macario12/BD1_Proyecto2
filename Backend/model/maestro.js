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

async function login(maestro,callback){
  console.log(maestro)
  let connection = mysql.createConnection(config);
 connection.query('CALL loginMaestro(?,?);',[maestro.carne,maestro.contrasenia], function(err,result){
    if(err) throw err;
    callback(result[0][0])
 });
    
    
}

module.exports = {
    addMasestro,
    login
}