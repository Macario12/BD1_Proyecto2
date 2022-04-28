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

async function cargaMasiva(maestro){
    
  connection.query("CALL add_maestro(?,?,?,?,?,?,?,?,?,?)" ,
  [maestro.Nombre,maestro.Apellido,maestro.id,maestro.Telefono,maestro.Direccion,maestro.Correo,maestro.FechaNacimiento,maestro.DPI,"https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=2000",maestro.contrasena]
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
    login,
    cargaMasiva
}