import React, { Component } from "react";

// Components
import Headerr from '../Components/Header'
import Navbar from '../Components/Navbar'
import DataMaestro from "./DataMaestro";
import AddMaestro from './AddMaestro';


export default class Maestro extends Component {
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
                    third="Actividades"
                    thirdLink="/addactividad"
                    fourth="Publicaciones"
                    fourthLink="/publicacioncrud"
                />
                <div style={estiloAdd}>
                    <AddMaestro/>
                </div>
                <div>
                    <DataMaestro/>
                </div>
            </div>
        )
    }
}