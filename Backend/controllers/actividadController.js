var Actividad = require('../model/actividad')

async function add(req, res){
    actividad = await Actividad.addActividad(req.body);

    return res.status(200).send({actividad})
}

function eliminar(req, res){
    Actividad.eliminar(req.body,(result)=>{
     return res.status(200).send(result)   
    });
     
 }

module.exports = {/*Falta Eliminar */
    add,eliminar
}