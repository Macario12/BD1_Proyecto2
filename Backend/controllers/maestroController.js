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

 async function cargaMasiva(req, res){
    
    const csv = require('csvtojson')
    
   const converter = csv().fromFile("..\\archivos\\"+req.body.ruta).then((json) => {
        json.forEach(guardar)
    })
    return res.status(200).send("Carga Masiva success")
}
function guardar(item,index){
    //console.log(item);
    
    alumno = Maestro.cargaMasiva(item);
}
function eliminar(req, res){
    Maestro.eliminar(req.body,(result)=>{
     return res.status(200).send(result)   
    });
     
 }

 function actualizar(req, res){
    Maestro.actualizar(req.body,(result)=>{
     return res.status(200).send(result)   
    });
     
 }

 
 function obtenerTodos(req, res){
    Maestro.obtenerTodos((result)=>{
     return res.status(200).send(result)   
    });
     
 }

module.exports = {
    add,
    login,
    cargaMasiva,
    eliminar,
    actualizar,
    obtenerTodos
}