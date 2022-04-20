var Alumno = require('../model/alumno')

async function add(req, res){
    alumno = await Alumno.addAlumno(req.body);

    return res.status(200).send({alumno})
}
 function login(req, res){
   Alumno.login(req.body,(result)=>{
    return res.status(200).send(result)   
   });
    
}

module.exports = {
    add,
    login
}