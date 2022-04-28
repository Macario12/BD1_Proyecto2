const connection = require('../database/connection')

async function addPublicacion(publicacion){
    

    connection.query("CALL add_publicacion(?,?,?,?)" ,
    [publicacion.titulo,publicacion.descripcion,publicacion.fecha,publicacion.id_materia]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
}

async function actualizar(publicacion,callback){
  
 connection.query('CALL update_publicacion(?,?,?,?,?);',[publicacion.id,publicacion.titulo,publicacion.descripcion,publicacion.fecha,publicacion.id_materia], function(err,result){
    if(err) throw err;
    callback(publicacion)
 });
    
    
}

async function eliminar(publicacion,callback){
  
 connection.query('CALL delete_publicacion(?);',[publicacion.id], function(err,result){
    if(err) throw err;
    callback(result[0][0])
 });
    
    
}


async function obtener(callback){
  
 connection.query('CALL publicaciones();', function(err,result){
    if(err) throw err;
    callback(result[0][0])
 });
    
    
}


module.exports = {
    addPublicacion,actualizar,eliminar,obtener
}