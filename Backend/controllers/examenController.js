var Examen = require('../model/examen')

async function addExamen(req, res){
    examen = await Examen.addExamen(req.body);

    return res.status(200).send({examen})
}

async function addPregunta(req, res){
    pregunta = await Examen.addPregunta(req.body,(result)=>{
        return res.status(200).send(result)   
       });
}


async function addRespuesta(req, res){
    respuesta = await Examen.addRespuesta(req.body);

    return res.status(200).send({respuesta})
}

function obtenerxMaestro(req, res){
    Examen.obtenerxMaestro(req.body,(result)=>{
     return res.status(200).send(result)   
    });
     
 }
module.exports = {
    addExamen,
    addPregunta,
    addRespuesta,
    obtenerxMaestro
}