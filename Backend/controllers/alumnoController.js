var Alumno = require('../model/alumno')

async function add(req, res){
    alumno = await Alumno.addAlumno(req.body);

    return res.status(200).send({alumno})
}

module.exports = {
    add
}