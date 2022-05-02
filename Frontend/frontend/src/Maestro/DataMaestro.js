import { Icon, Menu, Table, Button } from 'semantic-ui-react'
import React, { useState, useEffect } from 'react'
import { helpHttp } from "../Helper/helpHttp";

//componentes
import EditMaestro from "./EditMaestro";




export default function DataMaestro() {
    let urlGetEstudiante = "http://localhost:4200/maestro/obtenerTodos"
    let urlDeleteEstudiante = "http://localhost:4200/maestro/delete"

    let api = helpHttp();

    const [datosAlumno, setDatosAlumno] = useState([]);

    useEffect(() => {
        api.get(urlGetEstudiante).then((res) => {
            if(!res.err){
                setDatosAlumno(res)
            }else{
                console.log("ERROR")
            }
        })
    }, [])

    const sendData = (data, {value})=> {
        data.preventDefault();

        api.post(urlDeleteEstudiante, {body:{id:value}}).then((res) => {
            if(!res.err){
                alert("Se eliminó el maestro")
                console.log(res)
            }else{
                console.log("ERROR")
            }
        })

        window.location.href = window.location.href;
        // or
        window.location.replace('');
    }

    const estiloTabla = {
        position: 'absolute',
        top: '30%',
        margin: '20px '
    };
    return(
       <Table center style={estiloTabla}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Nombre</Table.HeaderCell>
                    <Table.HeaderCell>Apellido</Table.HeaderCell>
                    <Table.HeaderCell>No. de registro</Table.HeaderCell>
                    <Table.HeaderCell>Telefono</Table.HeaderCell>
                    <Table.HeaderCell>Direccion</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Fecha</Table.HeaderCell>
                    <Table.HeaderCell>DPI</Table.HeaderCell>
                    <Table.HeaderCell>Opciones</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {datosAlumno.map (e =>
                <Table.Row  key={e.id_maestro}>
                    <Table.Cell>{e.nombre}</Table.Cell>
                    <Table.Cell>{e.apellido}</Table.Cell>
                    <Table.Cell>{e.no_registro}</Table.Cell>
                    <Table.Cell>{e.telefono}</Table.Cell>
                    <Table.Cell>{e.direccion}</Table.Cell>
                    <Table.Cell>{e.email}</Table.Cell>
                    <Table.Cell>{e.fecha_nac}</Table.Cell>
                    <Table.Cell>{e.dpi}</Table.Cell>
                    <Table.Cell> 
                        <div className='ui two buttons'>
                            <EditMaestro  tipo = "Editar maestro" data={e}/> 
                        <Button basic color='red' value = {e.id_maestro}
                                onClick={sendData} >
                            Eliminar
                        </Button>
                        </div>
                    </Table.Cell>
                

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
    )
}

