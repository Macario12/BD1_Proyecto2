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

module.exports = {
    addAlumno
}