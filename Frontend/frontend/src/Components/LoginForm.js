import { Button, Form, Segment, Grid} from 'semantic-ui-react'
import { helpHttp } from "../Helper/helpHttp";
import {useNavigate} from "react-router-dom"
import React, { useState } from "react";

export default function LoginForm () {
    let urlEstudiante = "http://localhost:4200/alumno/login"
    let urlMaestro = "http://localhost:4200/maestro/login"
    const navigate = useNavigate()
    let api = helpHttp();
    let existUser = false


    const [dataLogin, setDataLogin] = useState({
        carne: "",
        contrasenia: ""
    });

    const [dataUser, setDataUser] = useState({

    });

    const [tipo, setTipo] = useState("")

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setDataLogin({
            ...dataLogin,
            [e.target.name] : e.target.value
        })
    };

    const tipoUser = (e) => {
        console.log(e.target.value)
        if (e.target.value === "Estudiante"){
            setTipo("estudiante")
        }else if (e.target.value === "Maestro"){
            setTipo("maestro")
        }else{
            setTipo("administrador")
        }
    }

    const sendData = (data)=> {
        data.preventDefault();
        console.log(dataLogin.carne + ' ' + dataLogin.contrasenia)

        if(tipo === "estudiante"){
            api.post(urlEstudiante, {body:dataLogin}).then((res) => {
                if(!res.err){
                    if(res.nombre){
                        localStorage.setItem("User", JSON.stringify(res))
                        setDataUser(res)
                        console.log(res)
                        existUser = true
                    }else{
                        console.log("No hay usuario")
                        existUser = false
                    }
                    
                }else{
                    console.log("ERROR")
                }
            })

            navigate('/publicacion');
        }else if (tipo === "maestro"){
            api.post(urlMaestro, {body:dataLogin}).then((res) => {
                if(!res.err){
                    if(res.nombre){
                        localStorage.setItem("User", JSON.stringify(res))
                        setDataUser(res)
                        console.log(res)
                        existUser = true;
                    }else{
                        console.log("No hay usuario")
                        existUser = false;
                    }
                    
                }else{
                    console.log("ERROR")
                }
            })

            navigate('/publicacioncrud');
        }else{
            console.log("ES ADMIN HOLA")
            if(dataLogin.carne === "admin" && dataLogin.contrasenia === "admin"){
                setDataUser({
                    carne: "admin",
                    contrasenia: "admin"
                })
                localStorage.setItem("User", JSON.stringify({
                    id_maestro:0,
                    carne: "admin",
                    contrasenia: "admin"
                }))
                navigate('/publicacioncrud');
            }
        }
        console.log(dataUser)
        
        
    }

        return (
            <div>
                <Grid centered>
                    <Grid.Column style={{ maxWidth: 550, marginTop: 20}}>
                        <Segment>
                            <Form onSubmit = {sendData}>
                                <Form.Field>
                                    <Form.Input 
                                        name='carne' 
                                        placeholder='Usuario' 
                                        onChange={handleInputChange}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input 
                                        type='password' 
                                        name='contrasenia' 
                                        placeholder='Contraseña' 
                                        onChange={handleInputChange}
                                    />
                                </Form.Field>
                                <Form.Field >
                                    <select onChange={tipoUser}>
                                        <option value="Administrador">Administrador</option>
                                        <option value="Estudiante">Estudiante</option>
                                        <option value="Maestro">Maestro</option>
                                    </select>
                                </Form.Field>
                                <Button fluid primary type="submit">Entrar</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
                
            </div>

            
    )
}