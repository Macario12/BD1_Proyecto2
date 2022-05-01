import { Button, Form, Segment, Grid } from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import React, { Component } from "react";

//component
import Question from './Question'

export default class ExamenForm extends Component {

    render(){
        return (
            <div>
                <Grid centered>
                    <Grid.Column style={{ maxWidth: 550, marginTop: 20}}>
                        <Segment>
                            <Form>
                                <Form.Field>
                                    <Form.Input name='NombreExamen' placeholder='Nombre unico del examen' />
                                </Form.Field>
                                <Form.Field>
                                    <DatePicker  name='FechaPublicacion' />                         
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input name='HoraInicio' placeholder='Hora de Inicio' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input name='HoraFin' placeholder='Hora Fin' />
                                </Form.Field>
                                <Question />  
                                <Form.Field>
                                    <Form.Input name='Materia' placeholder='Materia' />
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
