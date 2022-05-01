import { Button, Form, Segment, Grid, Modal, Checkbox } from 'semantic-ui-react'
import React from 'react'

export default function Answer() {
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
      trigger={<Button color='gray' style={estiloAdd}>Agregar Respuesta</Button>}
    >
      <Modal.Header>Agregar respuesta</Modal.Header>
      <Modal.Content>
        <Grid centered>
            <Grid.Column style={{ maxWidth: 550, marginTop: 20}}>
                <Segment>
                    <Form>
                        <Form.Field>
                            <Form.Input name='Respuesta' placeholder='Respuesta' />
                        </Form.Field>
                        <Segment >
                            <Checkbox 
                            label='Seleccion si es respuesta correcta'/>
                        </Segment>
                    </Form>
                    <br/>
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
