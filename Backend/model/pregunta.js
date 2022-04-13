const config = require('../database/connection')
let mysql = require('mysql');

async function addPregunta(pregunta){
    
    let connection = mysql.createConnection(config);
    connection.query("CALL add_pregunta(?,?,?)" ,
    [pregunta.pregunta,pregunta.nota,pregunta.id_examen]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
      connection.end();
}

module.exports = {
    addPregunta
}