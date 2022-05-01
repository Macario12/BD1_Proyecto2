import { Button, Form, Segment, Grid, Modal, Checkbox } from 'semantic-ui-react'
import React from 'react'

//component
import Answer from './Answer';

export default function Question() {
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
      trigger={<Button color='gray' style={estiloAdd}>Agregar Pregunta</Button>}
    >
      <Modal.Header>Agregar pregunta</Modal.Header>
      <Modal.Content>
        <Grid centered>
            <Grid.Column style={{ maxWidth: 550, marginTop: 20}}>
                <Segment>
                    <Form>
                        <Form.Field>
                            <Form.Input name='Pregunta' placeholder='Pregunta' />
                        </Form.Field>
                        <Form.Field>
                            <Answer/>
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
