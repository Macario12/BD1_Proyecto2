import React, { Component } from "react";
import { Button, Form, Segment, Dropdown, Grid } from 'semantic-ui-react'

const typeUser = [
    { key: 'Docente', text: 'Docente', value: 'Docente' },
    { key: 'Alumno', text: 'Alumno', value: 'Alumno' },
    { key: 'Administrador', text: 'Administrador', value: 'Administrador' }
  ]

class LoginForm extends Component {

    render(){
        return (
            <div>
                <Grid centered>
                    <Grid.Column style={{ maxWidth: 550, marginTop: 20}}>
                        <Segment>
                            <Form>
                                <Form.Field>
                                    <Form.Input name='Usuario' placeholder='Usuario' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input name='Contraseña' placeholder='Contraseña' />
                                </Form.Field>
                                <Form.Field >
                                    <Dropdown
                                        fluid
                                        button
                                        className='icon'
                                        floating
                                        labeled
                                        icon='address card'
                                        options={typeUser}
                                        search
                                        text='Tipo de usuario'
                                    />
                                </Form.Field>
                                <Button fluid primary type="submit">Entrar</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default LoginForm;