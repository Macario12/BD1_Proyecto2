import React, { useEffect, useState } from 'react'
import { helpHttp } from "../Helper/helpHttp";


//components
import ActividadForm from '../Components/ActividadForm'
import Headerr from '../Components/Header'
import Navbar from '../Components/Navbar'

export default function AddActividad(props){
    let urlFindMateria = "http://localhost:4200/materia/consultarmateriaxmaestro"
    const saved = localStorage.getItem("User");
    const initial = JSON.parse(saved);
    let api = helpHttp();

    const [dataMateria, setDataMateria] = useState([]);
    const [dataUser] = useState(initial)

    const estiloForm = {
        margin:'3% 0'
    };

    useEffect(() => {
        api.post(urlFindMateria, {body:{id:dataUser.id_maestro}}).then((res) => {
          if(!res.err){
            setDataMateria(res)
            console.log(res)
          }else{
              console.log("ERROR")
          }
      })
    }, [])

    return(
        <div>
            <Headerr/>
            <Navbar 
                first="Publicaciones"
                firstLink="/publicacioncrud" 
                second="Actividades"
                secondLink="/addactividad"
                third="Examen"
                thirdLink="/examen"
                fourth="Alumno"
                fourthLink="/alumno"
            />
            <div style={estiloForm}>
                <ActividadForm tipo='Crear Actividad' user={dataUser} materias={dataMateria}/>
            </div>
        </div>
    )
}