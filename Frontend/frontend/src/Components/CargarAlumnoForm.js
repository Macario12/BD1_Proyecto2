import { Button, Form, Segment, Grid, Input} from 'semantic-ui-react'
import React, { useState, useEffect } from "react";
import { helpHttp } from "../Helper/helpHttp";

//component

export default function CargarAlumnoForm(props) {

    let urlCargarAlumno = "http://127.0.0.1:4200/alumno/cargaMasiva"
    let api = helpHttp();

    const [dataFile, setDataFile] = useState({
        ruta: "",
    });

    const handleInputChange = (e) => {
        setDataFile({
            ruta: e.target.value.substring(12, (e.target.value.length+1))
        })
    };

    
    const sendData = (data)=> {
        data.preventDefault();

        api.post(urlCargarAlumno, {body:dataFile}).then((res) => {
            if(!res.err){
                setDataFile(res)
                console.log(res)
            }else{
                console.log("ERROR")
            }
        })
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