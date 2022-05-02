
//components
import Navbar from "../Components/Navbar"
import Headerr from "../Components/Header"
import { helpHttp } from "../Helper/helpHttp";
import { Grid, Menu, Segment } from 'semantic-ui-react'
import React, { useState, useEffect} from "react";
export default function NotasAlumno(){
    const [state, setState] = useState({
        activeItem: 'home',
        idItem: 0
    });
    let urlFindMateria = "http://127.0.0.1:4200/materia/consultarMateriaxAlumno"
    const saved = localStorage.getItem("User");
    const initial = JSON.parse(saved);
    const [dataUser] = useState(initial)
    const [dataMateria, setDataMateria] = useState([])
    let api = helpHttp();
    const handleItemClick = (e, {name, value}) => {
        setState({ activeItem: name, idItem: value})  
        console.log(state)

       /*  api.post(urlFindAlumno, {body:{id:state.idItem}}).then((res) => {
            if(!res.err){
                setDataAlumno(res)
                console.log(res)
            }else{
                console.log("ERROR")
            }
        })

        api.post(urlFindActividad, {body:{id:state.idItem}}).then((res) => {
            if(!res.err){
                setDataActividad(res)
                console.log(res)
                
            }else{
                console.log("ERROR")
            }
        })

        api.post(urlFindAlumnos, {body:{id:state.idItem}}).then((res) => {
            if(!res.err){
                setDataAlumnoMateria(res)
                console.log(res)
            }else{
                console.log("ERROR")
            }
        })

        for( let Alumno of dataAlumno){
            for (const index in Alumno){
                console.log(index,": ", Alumno[index])
            }
        } */
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
                    name={e.nombre}
                    value = {e.id_materia}
                    key={parseInt(e.id_materia, 10)} 
                    active={state.activeItem === e.nombre}
                    onClick={handleItemClick}
                    />)}
                    
                </Menu>
                </Grid.Column>

                <Grid.Column stretched width={12}>
                <Segment>
                    This is an stretched grid column. This segment will always match the
                    tab height
                </Segment>
                </Grid.Column>
            </Grid>
        </div>
    )
}