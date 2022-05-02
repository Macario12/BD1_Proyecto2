import React, { Component } from "react";

// Components
import CargarAlumno from "./CargarAlumno";
import Headerr from '../Components/Header'
import Navbar from '../Components/Navbar'
import DataAlumno from "./DataAlumno";
import AddAlumno from './AddAlumno';


export default class AlumnoCRUD extends Component {
    render(){
        const estiloCargar= {
            position: 'absolute',
            margin: '1% 0 0 0',
            width: '400px',
            left: '35%', 
        };
        return(
            <div>
                <Headerr/>
                <Navbar 
                    first="Maestro"
                    firstLink="/maestro" 
                    second="Alumno"
                    secondLink="/alumnocrud"
                    third="Actividades"
                    thirdLink="/addactividad"
                    fourth="Publicaciones"
                    fourthLink="/publicacioncrud"

                />

        <div className='ui two buttons' style={estiloCargar} >
                    <AddAlumno/>
                    <CargarAlumno/>
                </div>
                <div>
                    <DataAlumno/>
                </div>
            </div>
        )
    }
}