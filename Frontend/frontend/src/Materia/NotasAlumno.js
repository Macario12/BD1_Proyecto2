
//components
import Navbar from "../Components/Navbar"
import Headerr from "../Components/Header"
import { helpHttp } from "../Helper/helpHttp";
import { Grid, Menu, Segment,Icon, Label, Table } from 'semantic-ui-react'
import React, { useState, useEffect} from "react";
export default function NotasAlumno(){
    const [state, setState] = useState({
        activeItem: 'home',
        idItem: 0
    });
    let urlFindMateria = "http://127.0.0.1:4200/materia/consultarMateriaxAlumno"
    let urlgetPublicaciones = "http://127.0.0.1:4200/actividad/obtenerxAlumno"
    let urlgetEntregaActividad = "http://127.0.0.1:4200/actividad/obtenerActividadxMateria"
    const saved = localStorage.getItem("User");
    const initial = JSON.parse(saved);
    const [dataUser] = useState(initial)
    const [dataMateria, setDataMateria] = useState([])
    const [publicaciones, setPublicaciones] = useState([])
    const [entregaActividad, setEntregaActividad] = useState([])
    let api = helpHttp();
    const handleItemClick = (e, {name, value}) => {
        setState({ activeItem: name, idItem: value})  
        console.log(e)
        console.log(state)
        
        api.post(urlgetEntregaActividad, {body:{id:state.idItem,idAlumno:dataUser.id_alumno}}).then((res) => {
            if(!res.err){
                setEntregaActividad(res)
                console.log(res)
            }else{
                console.log("ERROR")
            }
        })
    };

    useEffect(() => {
        api.post(urlFindMateria, {body:{id:dataUser.id_alumno}}).then((res) => {
            if(!res.err){
                setDataMateria(res)
                console.log(res)
            }else{
                console.log("ERROR")
            }
        })
      /*  api.post(urlgetPublicaciones,{body:{id:dataUser.id_alumno}}).then((res) => {
            if(!res.err){
                setPublicaciones(res)
                console.log(res)
            }else{
                console.log("ERROR")
            }
        })

        api.post(urlgetEntregaActividad,{body:{id:dataUser.id_alumno}}).then((res) => {
            if(!res.err){
                setEntregaActividad(res)
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

          <Grid>
                <Grid.Column width={4}>
                <Menu fluid vertical tabular>
                {dataMateria.map(e => 
                    <Menu.Item
                    active={state.activeItem === e.nombre}
                    key={parseInt(e.id_materia, 10)} 
                    value = {e.id_materia}
                    name={e.nombre}
                    onClick={handleItemClick}
                    />)}
                    
                </Menu>
                </Grid.Column>

                <Grid.Column stretched width={12}>
                <Segment>
                <Table celled>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Actividad</Table.HeaderCell>
                        <Table.HeaderCell>Nota</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    {entregaActividad.map( e=>
                    <Table.Row >
                        <Table.Cell>{e.titulo}</Table.Cell>
                        <Table.Cell>{e.puntuacion}</Table.Cell>
                    </Table.Row>
                    )}
                    </Table.Body>
                </Table>
                </Segment>
                </Grid.Column>
            </Grid>
        </div>
    )
}