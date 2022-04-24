import { Button, Form, Segment, Grid} from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import React, { Component } from "react";

//component

export default class MaestroForm extends Component {

    render(){
        return (
            <div>
                <Grid centered>
                    <Grid.Column style={{ maxWidth: 550, marginTop: 20}}>
                        <Segment>
                            <Form>
                                <Form.Field>
                                    <Form.Input name='Nombres' placeholder='Nombres' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input name='Apellidos' placeholder='Apellidos' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input name='NoRegistro' placeholder='Número de registro' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input name='Teléfono' placeholder='Teléfono' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input name='Dirección' placeholder='Dirección' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input name='email' placeholder='Correo Electronico' />
                                </Form.Field>
                                <Form.Field>
                                    <DatePicker  name='FechaNacimiento' />  
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input name='DPI' placeholder='DPI' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input name='FotoPerfil' placeholder='Foto de perfil' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input name='Contrasenia' placeholder='Contrasenia' />
                                </Form.Field>
                                <Button fluid primary type="submit">{this.props.tipo}</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}