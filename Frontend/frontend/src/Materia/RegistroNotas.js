import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import React, { Component } from 'react'

//componentes

export default class RegistroNotas extends Component {
    render(){
        const estiloTabla = {
            position: 'absolute',
            width: '500px',
            top: '30%',
            left: '30%',
        };
        return(
            <Table center style={estiloTabla}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Carné</Table.HeaderCell>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>201905837</Table.Cell>
                        <Table.Cell>Ariel Macario</Table.Cell>
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
