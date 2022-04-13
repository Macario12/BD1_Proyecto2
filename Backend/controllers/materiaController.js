var Materia = require('../model/materia')

async function add(req, res){
    materia = await Materia.addMateria(req.body);

    return res.status(200).send({materia})
}

module.exports = {
    add
}