const connection = require('../database/connection')

async function addAsignacion(asignacion){
    
    connection.query("CALL add_asignacion(?,?,?)" ,
    [asignacion.nota,asignacion.id_alumno,asignacion.id_materia]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
}

module.exports = {
    addAsignacion
}