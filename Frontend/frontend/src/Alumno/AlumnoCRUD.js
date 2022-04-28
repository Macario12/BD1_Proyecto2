import React, { Component } from "react";

// Components
import Headerr from '../Components/Header'
import Navbar from '../Components/Navbar'
import DataAlumno from "./DataAlumno";
import AddAlumno from './AddAlumno';


export default class AlumnoCRUD extends Component {
    render(){
        const estiloAdd= {
            position: 'absolute',
            margin: '1% 0 0 0',
            width: '100%',
            height: '30%',
            left: '90%', 
        };
        return(
            <div>
                <Headerr/>
                <Navbar 
                    first="Maestro"
                    firstLink="/maestro" 
                    second="Alumno"
                    secondLink="/alumnocrud"
                    third="Examen"
                    thirdLink="/examen"
                    fourth="Alumno"
                    fourthLink="/alumno"
                />
                <div style={estiloAdd}>
                    <AddAlumno/>
                </div>
                <div>
                    <DataAlumno/>
                </div>
            </div>
        )
    }
}