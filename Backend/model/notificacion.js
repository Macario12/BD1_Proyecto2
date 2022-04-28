const connection = require('../database/connection')

async function addNotificacionTarea(notificacion){
    connection.query("CALL add_notificacion_tarea(?,?,?,?)" ,
    [notificacion.nombre,notificacion.descripcion,notificacion.leido,notificacion.id_entrega_tarea]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
}

async function addNotificacionExamen(notificacion){
    
    connection.query("CALL add_notificacion_examen(?,?,?,?)" ,
    [notificacion.nombre,notificacion.descripcion,notificacion.leido,notificacion.id_entrega_examen]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
}

module.exports = {
    addNotificacionTarea,
    addNotificacionExamen
}