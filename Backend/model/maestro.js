const connection = require('../database/connection')

async function addMasestro(maestro){
    
    connection.query("CALL add_maestro(?,?,?,?,?,?,?,?,?,?)" ,
    [maestro.nombre,maestro.apellido,maestro.no_registro,maestro.telefono,maestro.direccion,maestro.email,maestro.fecha_nac,maestro.dpi,maestro.foto_perfil,maestro.contrasenia]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
}

async function login(maestro,callback){
 connection.query('CALL loginMaestro(?,?);',[maestro.carne,maestro.contrasenia], function(err,result){
    if(err) throw err;
    callback(result[0][0])
 });
    
    
}

module.exports = {
    addMasestro,
    login
}