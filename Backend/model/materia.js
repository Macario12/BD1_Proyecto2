const connection = require('../database/connection')

async function addMateria(materia){
    
    connection.query("CALL add_materia(?,?)" ,
    [materia.nombre,materia.id_maestro]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
}

module.exports = {
    addMateria
}