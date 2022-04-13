const config = require('../database/connection')
let mysql = require('mysql');

async function addNotificacionTarea(notificacion){
    
    let connection = mysql.createConnection(config);
    connection.query("CALL add_notificacion_tarea(?,?,?,?)" ,
    [notificacion.nombre,notificacion.descripcion,notificacion.leido,notificacion.id_entrega_tarea]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
      connection.end();
}

async function addNotificacionExamen(notificacion){
    
    let connection = mysql.createConnection(config);
    connection.query("CALL add_notificacion_examen(?,?,?,?)" ,
    [notificacion.nombre,notificacion.descripcion,notificacion.leido,notificacion.id_entrega_examen]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
      connection.end();
}

module.exports = {
    addNotificacionTarea,
    addNotificacionExamen
}