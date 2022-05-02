import React, { useState, useEffect} from "react";
import { helpHttp } from "../Helper/helpHttp";
import { Menu } from 'semantic-ui-react'

// Components
import RegistroNotas from "../Materia/RegistroNotas";
import CargarAlumno from "./CargarAlumno";
import Headerr from '../Components/Header';
import Navbar from '../Components/Navbar';
import AddAlumno from "./AddAlumno";

export default function Alumno(props){

    const estiloCargar= {
        position: 'absolute',
        margin: '1% 100% 9% 0',
        width: '100%',
        height: '30%',
        left: '90%', 
    };

    let urlFindMateria = "http://localhost:4200/materia/consultarmateriaxmaestro"
    let urlFindAlumno = "http://localhost:4200/alumno/alumnosxmateria"
    const saved = localStorage.getItem("User");
    const initial = JSON.parse(saved);
    let api = helpHttp();

    const [dataUser] = useState(initial)

    const [dataMateria, setDataMateria] = useState([])
    const [dataAlumno, setDataAlumno] = useState([])

    const [state, setState] = useState({
        activeItem: 'home',
        idItem: 0
    });

    const handleItemClick = (e, {name, value}) => {
        setState({ activeItem: name, idItem: value})  
        console.log(state)

        api.post(urlFindAlumno, {body:{id:state.idItem}}).then((res) => {
            if(!res.err){
                setDataAlumno(res)
                console.log(state.idItem)
                console.log("holi1")
                console.log(res)
                console.log("holi2")
            }else{
                console.log("ERROR")
            }
        })
    };

    useEffect(() => {
        api.post(urlFindMateria, {body:{id:dataUser.id_maestro}}).then((res) => {
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
                    firstLink="/publicacioncrud" 
                    second="Actividades"
                    secondLink="/addactividad"
                    third="Examen"
                    thirdLink="/examen"
                    fourth="Alumno"
                    fourthLink="/alumno"
                />
                <AddAlumno/>

                <div  style={estiloCargar}>
                    <CargarAlumno/>
                </div>
                <div>
                    <Menu pointing vertical>
                        {dataMateria.map(e => 
                            <Menu.Item 
                                active={state.activeItem === e.nombre}
                                key={parseInt(e.id_materia, 10)} 
                                value={e.id_materia}
                                name = {e.nombre}   
                                onClick={handleItemClick}
                            />
                        )}
                    </Menu>
                </div>
                <RegistroNotas/>
            </div>
        )
}
