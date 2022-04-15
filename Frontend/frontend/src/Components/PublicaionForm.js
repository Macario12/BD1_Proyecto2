import React, { Component } from "react";
import { Button, Form, Segment, Grid } from 'semantic-ui-react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class PublicacionForm extends Component {

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
                                <DatePicker   />                         </Form.Field>
                                <Form.Field>
                                    <Form.Input name='Materia' placeholder='Materia' />
                                </Form.Field>
                                <Button fluid primary type="submit">Crear</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default PublicacionForm;
//<DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />