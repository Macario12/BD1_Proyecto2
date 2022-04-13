const config = require('../database/connection')
let mysql = require('mysql');

async function addMateria(materia){
    
    let connection = mysql.createConnection(config);
    connection.query("CALL add_materia(?,?)" ,
    [materia.nombre,materia.id_maestro]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
      connection.end();
}

module.exports = {
    addMateria
}