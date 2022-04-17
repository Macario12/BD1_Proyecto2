import { Button, Form, Segment, Grid } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import React, { Component } from "react";

import "react-datepicker/dist/react-datepicker.css";

class ActividadForm extends Component {

    render(){
        return (
            <div>
                <Grid centered>
                    <Grid.Column style={{ maxWidth: 550, marginTop: 20}}>
                        <Segment>
                            <Form>
                                <Form.Field>
                                    <Form.Input name='Titulo' placeholder='Titulo' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.TextArea name='Descripcion' placeholder='Descripcion' />
                                </Form.Field>
                                <Form.Field>
                                    <DatePicker  name='FechaEntrega' />                         
                                </Form.Field>
                                <Form.Field>
                                    <DatePicker  name='FechaPublicacion' />                         
                                </Form.Field>
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

export default ActividadForm;
//<DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />