const connection = require('../database/connection')

async function addEntregaTarea(entrega){
    
    connection.query("CALL add_entrega_tarea(?,?,?,?,?,?,?)" ,
    [entrega.fecha,entrega.archivo,entrega.estado,entrega.puntuacion,entrega.observacion,entrega.id_alumno,entrega.id_actividad]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
}

module.exports = {
    addEntregaTarea
}