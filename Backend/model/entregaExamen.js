const connection = require('../database/connection')

async function addEntregaExamen(entrega){
    
    connection.query("CALL add_entrega_examen(?,?,?)" ,
    [entrega.nota,entrega.id_alumno,entrega.id_examen]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
}


async function addDetalleEntregaExamen(detalle){
    
    connection.query("CALL add_detalle_entrega_examen(?,?)" ,
    [detalle.id_entrega_examen,detalle.id_respuesta]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
}
module.exports = {
    addEntregaExamen,
    addDetalleEntregaExamen
}