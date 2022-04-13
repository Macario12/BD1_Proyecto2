const config = require('../database/connection')
let mysql = require('mysql');

async function addAlumno(alumno){
    console.log(alumno)
    let connection = mysql.createConnection(config);
    connection.query("CALL add_alumno(?,?,?,?,?,?,?)" ,
    [alumno.nombre,alumno.apellido,alumno.carne,alumno.telefono,alumno.direccion,alumno.email,alumno.contrasenia]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
      connection.end();
}

async function login(alumno){
  console.log(alumno)
  let result ;
  let connection = mysql.createConnection(config);
  await connection.query("CALL loginAlumno(?,?)" ,
  [alumno.carne,alumno.contrasenia]
  , (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.table(results[0])
      result = results[0];
    });

    console.log(result)
    connection.end();
    return result;
    
    
}

module.exports = {
    addAlumno,
    login
}