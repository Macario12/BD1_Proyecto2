import { Button, Form, Segment, Grid, Input} from 'semantic-ui-react'
import React, { useState, useEffect } from "react";
import { helpHttp } from "../Helper/helpHttp";

//component

export default function CargarAlumnoForm(props) {

    let urlAddEstudiante = ""
    let api = helpHttp();

    const [dataFile, setDataFile] = useState({
        File: "",
    });

    const handleInputChange = (e) => {
        console.log(e.target.value.substring(12, (e.target.value.length+1)), "   ES LA RUTA")
        setDataFile({
            ...dataFile,
            [e.target.name] : e.target.value
        })
    };

    
    const sendData = (data)=> {
        data.preventDefault();

        /*api.post(urlAddEstudiante, {body:dataAlumno}).then((res) => {
            if(!res.err){
                setDataAlumno(res)
                console.log(res)
            }else{
                console.log("ERROR")
            }
        })*/
        console.log(dataFile)
    }

    return (
        <div>
            <Grid centered>
                <Grid.Column style={{ maxWidth: 550, marginTop: 20}}>
                    <Segment>
                        <Form>
                            <Form.Field>
                                <Input 
                                    name='Nombre' 
                                    type="file"
                                    value = ""
                                    onChange={handleInputChange}
                                />  
                            </Form.Field>
                            <Button onClick={sendData} fluid primary type="submit">Cargar CSV de Alumno</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    )
}