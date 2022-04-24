var Alumno = require('../model/alumno')



async function add(req, res){
    alumno = await Alumno.addAlumno(req.body);

    return res.status(200).send(req.body)
}

 function login(req, res){
   Alumno.login(req.body,(result)=>{
    return res.status(200).send(result)   
   });
    
}

async function cargaMasiva(req, res){
    
    const csv = require('csvtojson')
    
   const converter = csv().fromFile(req.body.ruta).then((json) => {
        json.forEach(guardar)
    })
    return res.status(200).send("Carga Masiva success")
}
function guardar(item,index){
    //console.log(item);
    
    alumno = Alumno.cargaMasiva(item);
}

function eliminar(req, res){
    Alumno.eliminar(req.body,(result)=>{
     return res.status(200).send(result)   
    });
     
 }
module.exports = {
    add,
    login,
    cargaMasiva,
    eliminar
}