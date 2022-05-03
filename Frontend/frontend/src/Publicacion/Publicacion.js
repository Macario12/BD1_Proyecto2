import React, { useEffect, useState } from "react";
import { helpHttp } from "../Helper/helpHttp";
import {Card} from 'semantic-ui-react';

// Components
import PublicacionCard from '../Components/PublicacionCard'
import Headerr from '../Components/Header'
import Navbar from '../Components/Navbar'

export default function Publicacion () {
        const estiloCards = {
            position: 'absolute',
            width: '500px',
            top: '30%',
            left: '30%',
            'borderRadius': '20px',
            'backgroundColor':'#e0e1e2'
        };

        let urlgetPublicaciones = "http://127.0.0.1:4200/publicacion/obtenerxAlumno"
        const saved = localStorage.getItem("User");
        const initial = JSON.parse(saved);
        let api = helpHttp();

        const [idUser] = useState({
            id: initial.id_alumno
        })
        const [publicaciones, setPublicaciones] = useState([])

        useEffect(() => {
            console.log(initial)
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
                    firstLink="/publicacion" 
                    second="Actividades"
                    secondLink="/actividad"
                    third="Examen"
                    thirdLink="/"
                    fourth="Notificaciones"
                    fourthLink="/notificacion"
                    fifth="Notas"
                    fifthLink="/notasalumno"
                />
                <div>
                    <Card.Group style={estiloCards}>
                        {publicaciones? 
                            publicaciones.map(e => 
                                <PublicacionCard key={e.id_publicacion} show={false} publicacion={e}/>)
                        :null} 
                    </Card.Group>
                </div>
            </div>
        )
}