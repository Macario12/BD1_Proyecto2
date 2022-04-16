import React, { Component } from "react";

// Components
import PublicacionCard from '../Components/PublicacionCard'
import AddPublicacion from './AddPublicacion';
import Headerr from '../Components/Header'
import Navbar from '../Components/Navbar'

export default class Publicacion extends Component {
    render(){
        const estiloCard = {
            position: 'absolute',
            margin: '5% 0 0 0',
            width: '100%',
            height: '50%',
            left: '37%', 
            color: 'black',
            'background-color':'black'
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
                <div style={estiloCard}>
                    <PublicacionCard/>
                </div>
            </div>
        )
    }
}