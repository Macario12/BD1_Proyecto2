var Asignacion = require('../model/asignacion')

async function add(req, res){
    asignacion = await Asignacion.addAsignacion(req.body);

    return res.status(200).send({asignacion})
}

module.exports = {
    add
}