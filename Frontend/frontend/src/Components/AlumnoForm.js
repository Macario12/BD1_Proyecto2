import { Button, Form, Segment, Grid, Input } from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";
import React, { Component } from "react";

//component

export default class AlumnoForm extends Component {

    render(){
        return (
            <div>
                <Grid centered>
                    <Grid.Column style={{ maxWidth: 550, marginTop: 20}}>
                        <Segment>
                            <Form>
                                <Form.Field>
                                    <Form.Input name='Nombre' placeholder='Nombre' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input name='Apellidos' placeholder='Apellidos' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input name='Carné' placeholder='Carné' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input name='Teléfono' placeholder='Teléfono' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input name='Dirección' placeholder='Dirección' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input name='Teléfono' placeholder='Teléfono' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input name='email' placeholder='Correo Electronico' />
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