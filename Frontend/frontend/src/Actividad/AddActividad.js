import React, { Component } from 'react'

//components
import ActividadForm from '../Components/ActividadForm'
import Headerr from '../Components/Header'
import Navbar from '../Components/Navbar'

export default class AddActividad extends Component {
    render(){
        const estiloForm = {
            margin:'3% 0'
        };
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
                    <ActividadForm tipo='Crear Actividad'/>
                </div>
            </div>
        )
    }
}