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

module.exports = {
    add,obtenerTodos,consultarmateriaxmaestro
}