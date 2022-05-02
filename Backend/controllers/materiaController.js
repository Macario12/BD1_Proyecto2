var Materia = require('../model/materia')

async function add(req, res){
    materia = await Materia.addMateria(req.body);

    return res.status(200).send({materia})
}

function obtenerTodos(req, res){
    Materia.obtenerTodos((result)=>{
     return res.status(200).send(result)   
    });
     
 }

 function consultarmateriaxmaestro(req, res){
    Materia.consultarmateriaxmaestro(req.body,(result)=>{
     return res.status(200).send(result)   
    });
     
 }

 function consultaractividadxmateria(req, res){
    Materia.consultaractividadxmateria(req.body,(result)=>{
     return res.status(200).send(result)   
    });
     
 }

 function consultarMateriaxAlumno(req, res){
    Materia.consultarMateriaxAlumno(req.body,(result)=>{
     return res.status(200).send(result)   
    });
     
 }


module.exports = {
    add,obtenerTodos,consultarmateriaxmaestro,consultaractividadxmateria,consultarMateriaxAlumno
}