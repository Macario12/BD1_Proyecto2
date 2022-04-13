var EntregaExamen = require('../model/entregaExamen')

async function addEntrega(req, res){
    asignacion = await EntregaExamen.addEntregaExamen(req.body);

    return res.status(200).send({asignacion})
}

async function addDetalle(req, res){
    asignacion = await EntregaExamen.addDetalleEntregaExamen(req.body);

    return res.status(200).send({asignacion})
}

module.exports = {
    addEntrega,
    addDetalle
}