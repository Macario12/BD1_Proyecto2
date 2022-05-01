import { Button, Form, Segment, Grid } from 'semantic-ui-react'
import { helpHttp } from "../Helper/helpHttp";
import DatePicker from "react-datepicker";
import React, { useState }  from "react";

import "react-datepicker/dist/react-datepicker.css";

export default function PublicacionForm (props){
    let api = helpHttp();
    let urlAdd = "http://localhost:4200/publicacion/add"

    /** <select>
                                    {props.materias.map(e => <option value="Administrador">{e.nombre}</option>)}
                                </select>*/

    const [dataNewPublicacion, setDataNewPublicacion] = useState({
        titulo: "",
        descripcion: "",
        fecha: "",
        id_materia: 0
    });

    const [startDate, setStartDate] = useState(new Date());

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setDataNewPublicacion({
            ...dataNewPublicacion,
            [e.target.name] : e.target.value
        })
    };

    const sendData = (data)=> {
        console.log(dataNewPublicacion)
    }


    return (
        <div>
            <Grid centered>
                <Grid.Column style={{ maxWidth: 550, marginTop: 20}}>
                    <Segment>
                        <Form>
                            <Form.Field>
                                <Form.Input 
                                    name='titulo' 
                                    placeholder='Titulo' 
                                    onChange={handleInputChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.TextArea 
                                    name='descripcion' 
                                    placeholder='Descripcion' 
                                    onChange={handleInputChange}/>
                            </Form.Field>
                            <Form.Field>
                                <DatePicker  
                                    name='fecha' 
                                    selected={startDate} 
                                    onChange={(date:Date) => setStartDate(date)}
                                    onChange={handleInputChange}
                                />                         
                            </Form.Field>
                            <Form.Field>
                                <select
                                    name = "id_materia"
                                    onChange={handleInputChange}>
                                    {props.materias.map(e => 
                                        <option key={parseInt(e.id_materia, 10)} value={parseInt(e.id_materia, 10)}>
                                            {e.nombre}
                                        </option>
                                    )}
                                </select>  
                            </Form.Field>
                            <Button fluid primary type="submit" onClick={sendData}>{props.tipo}</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    )
}

//<DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />