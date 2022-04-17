import React, { Component } from 'react'

//components
import ExamenForm from '../Components/Examenform'
import Headerr from '../Components/Header'
import Navbar from '../Components/Navbar'

export default class AddExamen extends Component {
    render(){
        const estiloForm = {
            margin:'3% 0'
        };
        return(
            <div>
                <Headerr/>
                <Navbar 
                    first="Publicaciones"
                    firstLink="/publicacion" 
                    second="Actividades"
                    secondLink="/actividad"
                    third="Examen"
                    thirdLink="/examen"
                />
                <div style={estiloForm}>
                    <ExamenForm tipo='Crear Actividad'/>
                </div>
            </div>
        )
    }
}