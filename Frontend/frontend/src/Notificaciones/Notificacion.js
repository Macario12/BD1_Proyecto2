import React, { Component } from "react";
import {Card} from 'semantic-ui-react';

// Components
import NotificacionCard from '../Components/NotificacionCard';
import Headerr from '../Components/Header';
import Navbar from '../Components/Navbar';

export default class Notificacion extends Component {
    render(){
        const estiloCards = {
            position: 'absolute',
            width: '500px',
            top: '30%',
            left: '30%',
            'border-radius': '20px',
            'background-color':'#e0e1e2'
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
                    thirdLink="/"
                    fourth="Notificaciones"
                    fourthLink="/notificacion"
                    fifth="Notas"
                    fifthLink="notasalumno"
                />
                <div>
                    <Card.Group style={estiloCards}>
                        <NotificacionCard/>
                    </Card.Group>  
                </div>
            </div>
        )
    }
}