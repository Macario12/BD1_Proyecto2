const connection = require('../database/connection')

async function addMateria(materia){
    
    connection.query("CALL add_materia(?,?)" ,
    [materia.nombre,materia.id_maestro]
    , (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
      
}

async function obtenerTodos(callback){
  connection.query('CALL consultarMateria();', function(err,result){
     if(err) throw err;
     callback(result[0])
  });
  
 }

 async function consultarmateriaxmaestro(materia,callback){
  connection.query('CALL consultarmateriaxmaestro(?);',[materia.id], function(err,result){
     if(err) throw err;
     callback(result[0])
  });
  
 }
 
 async function consultaractividadxmateria(materia,callback){
  connection.query('CALL consultaactividadxmateria(?);',[materia.id], function(err,result){
     if(err) throw err;
     callback(result[0])
  });
  
 }

 async function consultarMateriaxAlumno(materia,callback){
   connection.query('CALL consultaMateriaxAlumnos(?);',[materia.id], function(err,result){
      if(err) throw err;
      callback(result[0])
   });
   
  }

module.exports = {
    addMateria,obtenerTodos,consultarmateriaxmaestro,consultaractividadxmateria,consultarMateriaxAlumno
}