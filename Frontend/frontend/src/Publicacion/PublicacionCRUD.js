import React, { useEffect, useState } from "react";
import { helpHttp } from "../Helper/helpHttp";
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
            'borderRadius': '20px',
            'backgroundColor':'#e0e1e2'
        };
        const estiloAdd= {
            position: 'absolute',
            margin: '1% 0 0 0',
            width: '100%',
            height: '30%',
            left: '90%', 
        };

        let urlgetPublicaciones = "http://127.0.0.1:4200/publicacion/obtenerxMaestro"
        let urlgetActividades = "http://127.0.0.1:4200/publicacion/obtenerxMaestro"
        const saved = localStorage.getItem("User");
        const initial = JSON.parse(saved);
        let api = helpHttp();

        const [idUser] = useState({
            id: initial.id_maestro
        })
        const [publicaciones, setPublicaciones] = useState([])
        const [Actividades, setActividades] = useState([])

        useEffect(() => {
            api.post(urlgetPublicaciones, {body:idUser}).then((res) => {
                if(!res.err){
                    setPublicaciones(res)
                    console.log(res)
                }else{
                    console.log("ERROR")
                }
            })

            /*api.post(urlgetActividades, {body:idUser}).then((res) => {
                if(!res.err){
                    setActividades(res)
                    console.log(res)
                }else{
                    console.log("ERROR")
                }
            })*/
        }, [])

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
                        {publicaciones? 
                            publicaciones.map(e => 
                                <PublicacionCard key={e.id_publicacion} show={true} publicacion={e}/>)
                        :null} 
                    </Card.Group>
                </div>
            </div>
        )
}