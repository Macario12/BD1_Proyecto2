import { Icon, Menu, Table, Button } from 'semantic-ui-react'
import React, { Component } from 'react'

//componentes
import EditAlumno from "./EditAlumno";

export default class DataAlumno extends Component {
    render(){
        const estiloTabla = {
            position: 'absolute',
            top: '30%',
            margin: '20px '
        };
        return(
            <Table centered style={estiloTabla}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Apellido</Table.HeaderCell>
                        <Table.HeaderCell>Carné</Table.HeaderCell>
                        <Table.HeaderCell>Telefono</Table.HeaderCell>
                        <Table.HeaderCell>Direccion</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Opciones</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>201905837</Table.Cell>
                        <Table.Cell>Ariel Macario</Table.Cell>
                        <Table.Cell>Ariel Macario</Table.Cell>
                        <Table.Cell>Ariel Macario</Table.Cell>
                        <Table.Cell>Ariel Macario</Table.Cell>
                        <Table.Cell>Ariel Macario</Table.Cell>
                        <Table.Cell> 
                            <div className='ui two buttons'>
                                <EditAlumno/> 
                            <Button basic color='red'>
                                Eliminar
                            </Button>
                            </div>
                        </Table.Cell>
                    </Table.Row>
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
}
