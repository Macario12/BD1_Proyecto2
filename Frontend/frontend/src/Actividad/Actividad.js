import React, { useEffect, useState } from "react";
import { helpHttp } from "../Helper/helpHttp";
import {Card} from 'semantic-ui-react';

// Components
import ActividadCard from '../Components/ActividadCard';
import Headerr from '../Components/Header';
import Navbar from '../Components/Navbar';

export default function Actividad () {
    const estiloCards = {
        position: 'absolute',
        width: '500px',
        top: '30%',
        left: '30%',
        'border-radius': '20px',
        'background-color':'#e0e1e2'
    };

    let urlgetPublicaciones = "http://127.0.0.1:4200/actividad/obtenerxAlumno"
    let urlgetEntregaActividad = "http://127.0.0.1:4200/actividad/obtenerEntregaxAlumno"
    const saved = localStorage.getItem("User");
    const initial = JSON.parse(saved);
    let api = helpHttp();

    const [idUser] = useState({
        id: initial.id_alumno
    })
    const [publicaciones, setPublicaciones] = useState([])
    const [entregaActividad, setEntregaActividad] = useState([])

    useEffect(() => {
        api.post(urlgetPublicaciones, {body:idUser}).then((res) => {
            if(!res.err){
                setPublicaciones(res)
                console.log(res)
            }else{
                console.log("ERROR")
            }
        })

        api.post(urlgetEntregaActividad, {body:idUser}).then((res) => {
            if(!res.err){
                setEntregaActividad(res)
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
            />
            <div>
                <Card.Group style={estiloCards}>
                    {publicaciones? 
                            publicaciones.map(e => 
                                <ActividadCard key={e.id_actividad} show={entregaActividad.find(e.id_actividad) != null ? true:false} actividad={e} entregas={entregaActividad}/>)
                        :null} 
                </Card.Group>  
            </div>
        </div>
    )
}