var Notificacion = require('../model/notificacion')

async function addNotiTarea(req, res){
    notificacion = await Notificacion.addNotificacionTarea(req.body);

    return res.status(200).send({manotificacionteria})
}


async function addNotiExamen(req, res){
    notificacion = await Notificacion.addNotificacionExamen(req.body);

    return res.status(200).send({manotificacionteria})
}


module.exports = {
    addNotiTarea,
    addNotiExamen
}