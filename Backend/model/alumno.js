const config = require('../database/connection')
let mysql = require('mysql');
const util = require('util');

async function addAlumno(alumno){
    let connection = mysql.createConnection(config);
    connection.query("CALL add_alumno(?,?,?,?,?,?,?)" ,
    [alumno.Nombre,alumno.Apellido,alumno.Carnet,alumno.Telefono,alumno.Direccion,alumno.Correo,alumno.Contrasena]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        return alumno;
      });
      
      connection.end();
}

async function login(alumno,callback){
  console.log(alumno)
  let result ;
  let connection = mysql.createConnection(config);
 connection.query('CALL loginAlumno(?,?);',[alumno.carne,alumno.contrasenia], function(err,result){
    if(err) throw err;
    callback(result[0][0])
 });
 
}
var pool  = mysql.createPool(config);
function cargaMasiva(alumno){
  console.log(alumno)
  pool.getConnection(function(err, connection) {
    connection.query( "CALL add_alumno(?,?,?,?,?,?,?)" ,
    [alumno.Nombre,alumno.Apellido,alumno.Carnet,alumno.Telefono,alumno.Direccion,alumno.Correo,alumno.Contrasena], function(err, rows) {
      connection.release();
    });
  });

}

async function eliminar(alumno,callback){
  
  let connection = mysql.createConnection(config);
 connection.query('CALL delete_Alumno(?);',[alumno.id], function(err,result){
    if(err) throw err;
    callback(result[0][0])
 });
    
    
}

module.exports = {/**Delete falta */
    addAlumno,
    login,
    cargaMasiva,
    eliminar
}