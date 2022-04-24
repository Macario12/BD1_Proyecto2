var Maestro = require('../model/maestro')

async function add(req, res){
    maestro = await Maestro.addMasestro(req.body);

    return res.status(200).send({maestro})
}

function login(req, res){
    Maestro.login(req.body,(result)=>{
     return res.status(200).send(result)   
    });
     
 }

module.exports = {
    add,
    login
}