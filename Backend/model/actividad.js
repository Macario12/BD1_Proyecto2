const connection = require('../database/connection')

async function addActividad(actividad){
    connection.query("CALL add_actividad(?,?,?,?,?,?)" ,
    [actividad.titulo,actividad.descripcion,actividad.fecha_entrega,actividad.fecha_publicacion,actividad.punteo,actividad.id_materia]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
}

async function eliminar(actividad,callback){
 connection.query('CALL delete_Actividad(?);',[actividad.id], function(err,result){
    if(err) throw err;
    callback(result[0][0])
 });
    
}

module.exports = {
    addActividad,eliminar
}