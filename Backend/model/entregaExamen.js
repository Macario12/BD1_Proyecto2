const config = require('../database/connection')
let mysql = require('mysql');

async function addEntregaExamen(entrega){
    
    let connection = mysql.createConnection(config);
    connection.query("CALL add_entrega_examen(?,?,?)" ,
    [entrega.nota,entrega.id_alumno,entrega.id_examen]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
      connection.end();
}


async function addDetalleEntregaExamen(detalle){
    
    let connection = mysql.createConnection(config);
    connection.query("CALL add_detalle_entrega_examen(?,?)" ,
    [detalle.id_entrega_examen,detalle.id_respuesta]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
      connection.end();
}
module.exports = {
    addEntregaExamen,
    addDetalleEntregaExamen
}