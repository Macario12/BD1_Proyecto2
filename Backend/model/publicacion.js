const config = require('../database/connection')
let mysql = require('mysql');

async function addPublicacion(publicacion){
    
    let connection = mysql.createConnection(config);
    connection.query("CALL add_publicacion(?,?,?,?)" ,
    [publicacion.titulo,publicacion.descripcion,publicacion.fecha,publicacion.id_materia]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
      connection.end();
}

async function actualizar(publicacion,callback){
  
  let connection = mysql.createConnection(config);
 connection.query('CALL update_publicacion(?,?,?,?,?);',[publicacion.id,publicacion.titulo,publicacion.descripcion,publicacion.fecha,publicacion.id_materia], function(err,result){
    if(err) throw err;
    callback(publicacion)
 });
    
    
}

async function eliminar(publicacion,callback){
  
  let connection = mysql.createConnection(config);
 connection.query('CALL delete_publicacion(?);',[publicacion.id], function(err,result){
    if(err) throw err;
    callback(result[0][0])
 });
    
    
}


async function obtener(callback){
  
  let connection = mysql.createConnection(config);
 connection.query('CALL publicaciones();', function(err,result){
    if(err) throw err;
    callback(result[0][0])
 });
    
    
}


module.exports = {
    addPublicacion,actualizar,eliminar,obtener
}