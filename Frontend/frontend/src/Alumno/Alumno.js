import React, { useState, useEffect} from "react";
import { helpHttp } from "../Helper/helpHttp";
import { Menu, Icon, Table  } from 'semantic-ui-react'

// Components
import RegistroNotas from "../Materia/RegistroNotas";
import CargarAlumno from "./CargarAlumno";
import Headerr from '../Components/Header';
import Navbar from '../Components/Navbar';
import AddAlumno from "./AddAlumno";

export default function Alumno(props){

    const estiloCargar= {
        position: 'absolute',
        margin: '1% 0 0 0',
        width: '400px',
        left: '35%', 
    };

    const estiloTabla = {
        position: 'absolute',
        width: '1040px',
        top: '30%',
        left: '18%',
    };

    const estiloNavbar = {
        position: 'absolute',
        top: '30%',
        left: '1%'
    };

    let urlFindMateria = "http://localhost:4200/materia/consultarmateriaxmaestro"
    let urlFindAlumno = "http://localhost:4200/alumno/alumnosxmateria"
    let urlFindActividad = "http://127.0.0.1:4200/materia/consultaractividadxmateria"
    let urlFindAlumnos = "http://127.0.0.1:4200/asignacion/obtenerxAlumno"
    const saved = localStorage.getItem("User");
    const initial = JSON.parse(saved);
    let api = helpHttp();

    const [dataUser] = useState(initial)

    const [dataMateria, setDataMateria] = useState([])
    const [dataActividad, setDataActividad] = useState([])
    const [dataAlumno, setDataAlumno] = useState([])
    const [dataAlumnoMateria, setDataAlumnoMateria] = useState([])

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
        }
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

                <div className='ui two buttons' style={estiloCargar} >
                    <AddAlumno/>
                    <CargarAlumno/>
                </div>
                <div>
                    <Menu pointing vertical style={estiloNavbar}>
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
                <div>
                    <Table style={estiloTabla}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Carné</Table.HeaderCell>
                                <Table.HeaderCell>Nombre</Table.HeaderCell>
                                {dataActividad.map(e => 
                                    <Table.HeaderCell key={e.id_actividad}>
                                        {e.titulo}
                                    </Table.HeaderCell>
                                )}
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                                {dataAlumnoMateria.map(e => 
                                    <Table.Row key={e.carne}>
                                        <Table.Cell>{e.carne}</Table.Cell>
                                        <Table.Cell>{e.nombre} {e.apellido}</Table.Cell>
                                        {dataAlumno
                                            ?dataAlumno.map(a => 
                                                a.carne === e.carne
                                                ?<Table.Cell>{a.puntuacion}</Table.Cell>
                                                :<></>)
                                            :<></>}
                                    </Table.Row>
                                )}
                        </Table.Body>

                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell colSpan='3'>
                                    <Menu floated='right' pagination>
                                        <Menu.Item as='a' icon>
                                            <Icon name='chevron left' />
                                        </Menu.Item>
                                        <Menu.Item as='a'>1</Menu.Item>
                                        <Menu.Item as='a' icon>
                                        <Icon name='chevron right' />
                                        </Menu.Item>
                                    </Menu>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </div>
            </div>
        )
}

/**{dataAlumno
                                            ?dataAlumno.map(a => 
                                                a.carne === e.carne 
                                                ?<Table.Cell>{a.puntuacion}</Table.Cell>
                                                :<Table.Cell>0</Table.Cell>)
                                            :<></>} */