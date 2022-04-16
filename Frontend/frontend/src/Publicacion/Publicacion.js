import React, { Component } from "react";
import {Card} from 'semantic-ui-react';

// Components
import PublicacionCard from '../Components/PublicacionCard'
import AddPublicacion from './AddPublicacion';
import Headerr from '../Components/Header'
import Navbar from '../Components/Navbar'

export default class Publicacion extends Component {
    render(){
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
        return(
            <div>
                <Headerr/>
                <Navbar first="Publicaciones"/>
                <div style={estiloAdd}>
                    <AddPublicacion/>
                </div>
                <div>
                    <Card.Group style={estiloCards}>
                        <PublicacionCard/>
                    </Card.Group>  
                </div>
            </div>
        )
    }
}