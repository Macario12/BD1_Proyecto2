var Alumno = require('../model/alumno')

async function add(req, res){
    alumno = await Alumno.addAlumno(req.body);

    return res.status(200).send({alumno})
}

async function login(req, res){
   const  a = await Alumno.login(req.body);
    console.log("controller",a)
    return res.status(200).send({a})
}

module.exports = {
    add,
    login
}