var Maestro = require('../model/maestro')

async function add(req, res){
    maestro = await Maestro.addMasestro(req.body);

    return res.status(200).send({maestro})
}

module.exports = {
    add
}