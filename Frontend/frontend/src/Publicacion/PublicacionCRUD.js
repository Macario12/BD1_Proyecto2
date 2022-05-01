import { helpHttp } from "../Helper/helpHttp";
import React, { Component } from "react";
import {Card} from 'semantic-ui-react';

// Components
import PublicacionCard from '../Components/PublicacionCard'
import AddPublicacion from './AddPublicacion';
import Headerr from '../Components/Header'
import Navbar from '../Components/Navbar'

export default function PublicacionCRUD () {
        const estiloCards = {
            position: 'absolute',
            width: '500px',
            top: '30%',
            left: '30%',
            'border-radius': '20px',
            'background-color':'#e0e1e2'
        };
        const estiloAdd= {
            position: 'absolute',
            margin: '1% 0 0 0',
            width: '100%',
            height: '30%',
            left: '90%', 
        };

        let api = helpHttp();
        let urlEstudiante = "http://localhost:4200/publicacion"

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
                <div style={estiloAdd}>
                    <AddPublicacion/>
                </div>
                <div>
                    <Card.Group style={estiloCards}>
                        <PublicacionCard show={true}/>
                    </Card.Group>  
                </div>
            </div>
        )
}