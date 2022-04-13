var EnttregaTarea = require('../model/entregaTarea')

async function add(req, res){
    entrega = await EnttregaTarea.addEntregaTarea(req.body);

    return res.status(200).send({entrega})
}

module.exports = {
    add
}