import React, { Component } from "react";

// Components
import RegistroNotas from "../Materia/RegistroNotas";
import Headerr from '../Components/Header';
import Materia from "../Materia/Materia";
import Navbar from '../Components/Navbar';
import AddAlumno from "./AddAlumno";

export default class Alumno extends Component {
    render(){
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
                    fourth="Alumno"
                    fourthLink="/alumno"
                />
                <AddAlumno/>
                <Materia/>
                <RegistroNotas/>
            </div>
        )
    }
}