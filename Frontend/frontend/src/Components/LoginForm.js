import React, { useState } from "react";
import { Button, Form, Segment, Grid } from 'semantic-ui-react'

export default function LoginForm () {

    const [dataLogin, setDataLogin] = useState({
        carne: "",
        contrasenia: ""
    })

    const handleInputChange = (e) => {
        //console.log(e.target.value)

        if(e.target.value === 'Administrador'){
            console.log('Es administrador')
        }else if (e.target.value === 'Estudiante'){
            console.log('Es estudiante')
        }else if (e.target.value === 'Maestro'){
            console.log('Es maestro')
        }

        setDataLogin({
            ...dataLogin,
            [e.target.name] : e.target.value
        })
    }

    const sendData = (e) => {
        e.preventDefault();
        console.log(dataLogin.carne + ' ' + dataLogin.contrasenia)
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
                                    <select onChange={handleInputChange}>
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