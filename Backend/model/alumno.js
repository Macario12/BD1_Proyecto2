const connection = require('../database/cocne')


async function addAlumno(alumno){
    connection.query("CALL add_alumno(?,?,?,?,?,?,?)" ,
    [alumno.Nombre,alumno.Apellido,alumno.Carnet,alumno.Telefono,alumno.Direccion,alumno.Correo,alumno.Contrasena]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        return alumno;
      });
}

async function login(alumno,callback){
  console.log(alumno)
  let result ;
 connection.query('CALL loginAlumno(?,?);',[alumno.carne,alumno.contrasenia], function(err,result){
    if(err) throw err;
    callback(result[0][0])
 });
 
}

function cargaMasiva(alumno){
  //console.log(alumno)
    connection.query("CALL add_alumno(?,?,?,?,?,?,?)" ,
    [alumno.Nombre,alumno.Apellido,alumno.Carnet,alumno.Telefono.toString(),alumno.Direccion,alumno.Correo,alumno.Contrasena]
      , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        return alumno;
      });

}

async function eliminar(alumno,callback){
  
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