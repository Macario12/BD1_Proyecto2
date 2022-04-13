var Publicacion = require('../model/publicacion')

async function add(req, res){
    publicacion = await Publicacion.addPublicacion(req.body);

    return res.status(200).send({publicacion})
}

module.exports = {
    add
}