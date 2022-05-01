import { Button, Form, Segment, Grid } from 'semantic-ui-react'
import { helpHttp } from "../Helper/helpHttp";
import DatePicker from "react-datepicker";
import React, { useState }  from "react";

import "react-datepicker/dist/react-datepicker.css";

export default function PublicacionForm (props){
    let api = helpHttp();
    let urlAdd = "http://localhost:4200/publicacion/add"
    let existUser = false

    const [dataLogin, setDataLogin] = useState({
        carne: "",
        contrasenia: ""
    });

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
                                <DatePicker  name='Fecha' />                         
                            </Form.Field>
                            <Form.Field>
                                <Form.Input name='Materia' placeholder='Materia' />
                            </Form.Field>
                            <Button fluid primary type="submit">{props.tipo}</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    )
}

//<DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />