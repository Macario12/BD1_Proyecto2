import { Button, Form, Segment, Grid, Modal, Checkbox } from 'semantic-ui-react'
import React from 'react'

function QandA() {
  const [value, setValue] = React.useState('this')
  const [open, setOpen] = React.useState(false)
  const estiloAdd= {
    margin: '10px 5px',
    width: '480px'
  };

  const estiloCheckBox= {
    margin: '5px 5px'

  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color='gray' style={estiloAdd}>Agregar Pregunta/Respuestas</Button>}
    >
      <Modal.Header>Agregar pregunta con sus respuestas</Modal.Header>
      <Modal.Content>
        <Grid centered>
            <Grid.Column style={{ maxWidth: 550, marginTop: 20}}>
                <Segment>
                    <Form>
                        <Form.Field>
                            <Form.Input name='Pregunta' placeholder='Pregunta' />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input name='Respuesta1' placeholder='Respuesta 1' />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input name='Respuesta2' placeholder='Respuesta 2' />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input name='Respuesta3' placeholder='Respuesta 3' />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input name='Respuesta4' placeholder='Respuesta 4' />
                        </Form.Field>
                        <Form.Field>
                            Selecciona la respuesta correcta 
                        </Form.Field>
                        <Form.Field>
                          <Checkbox
                            radio
                            label='Respuesta 1'
                            name='checkboxRadioGroup'
                            value='Respuesta1'
                            checked={value === 'Respuesta1'}
                            onChange={(e, data) => setValue(data.value)}
                            style = {estiloCheckBox}
                          />
                          <Checkbox
                            radio
                            label='Respuesta 2'
                            name='checkboxRadioGroup'
                            value='Respuesta2'
                            checked={value === 'Respuesta2'}
                            onChange={(e, data) => setValue(data.value)}
                            style = {estiloCheckBox}
                          />
                          <Checkbox
                            radio
                            label='Respuesta 3'
                            name='checkboxRadioGroup'
                            value='Respuesta3'
                            checked={value === 'Respuesta3'}
                            onChange={(e, data) => setValue(data.value)}
                            style = {estiloCheckBox}
                          />
                          <Checkbox
                            radio
                            label='Respuesta 4'
                            name='checkboxRadioGroup'
                            value='Respuesta4'
                            checked={value === 'Respuesta4'}
                            onChange={(e, data) => setValue(data.value)}
                            style = {estiloCheckBox}
                          />
                        </Form.Field>
                    </Form>
                    <Button fluid primary type="submit">Agregar</Button>
                </Segment>
            </Grid.Column>
        </Grid>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Salir
        </Button>
      </Modal.Actions>
    </Modal>
  )
}


export default QandA