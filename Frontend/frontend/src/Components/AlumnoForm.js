import { Button, Form, Segment, Grid} from 'semantic-ui-react'
import React, { useState, useEffect } from "react";
import { helpHttp } from "../Helper/helpHttp";

//component

export default function AlumnoForm(props) {

    let urlAddEstudiante = "http://localhost:4200/alumno/add"
    let api = helpHttp();

    const [dataAlumno, setDataAlumno] = useState({
        Nombre: "",
        Apellido: "",
        Carnet: "",
        Telefono: "",
        Direccion: "",
        Correo: "",
        Contrasena: ""
    });

    const handleInputChange = (e) => {
        setDataAlumno({
            ...dataAlumno,
            [e.target.name] : e.target.value
        })
    };

    
    const sendData = (data)=> {
        data.preventDefault();

        api.post(urlAddEstudiante, {body:dataAlumno}).then((res) => {
            if(!res.err){
                setDataAlumno(res)
                console.log(res)
            }else{
                console.log("ERROR")
            }
        })
        console.log(dataAlumno)
    }

    return (
        <div>
            <Grid centered>
                <Grid.Column style={{ maxWidth: 550, marginTop: 20}}>
                    <Segment>
                        <Form>
                            <Form.Field>
                                <Form.Input 
                                    name='Nombre' 
                                    placeholder='Nombre' 
                                    onChange={handleInputChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                    name='Apellido' 
                                    placeholder='Apellidos' 
                                    onChange={handleInputChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                    name='Carnet' 
                                    placeholder='Carné' 
                                    onChange={handleInputChange}
                                    />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                    name='Telefono' 
                                    placeholder='Teléfono' 
                                    onChange={handleInputChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                    name='Direccion' 
                                    placeholder='Dirección' 
                                    onChange={handleInputChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                    name='Correo' 
                                    placeholder='Correo Electronico' 
                                    onChange={handleInputChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                    name='Contrasena' 
                                    placeholder='Contraseña' 
                                    onChange={handleInputChange}    
                                />
                            </Form.Field>
                            <Button onClick={sendData} fluid primary type="submit">Agregar Alumno</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    )
}