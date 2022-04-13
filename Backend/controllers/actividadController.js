var Actividad = require('../model/actividad')

async function add(req, res){
    actividad = await Actividad.addActividad(req.body);

    return res.status(200).send({actividad})
}

module.exports = {
    add
}