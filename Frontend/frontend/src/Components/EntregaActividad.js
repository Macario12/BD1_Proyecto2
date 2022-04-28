import { Button, Modal, Form, Segment, Grid } from 'semantic-ui-react'
import React from 'react'

function EntregaActividad() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button basic color='blue' >Subir</Button>}
    >
      <Modal.Header>Entrega Actividad</Modal.Header>
      <Modal.Content>
        <Grid centered>
            <Segment> 
                <Form>
                    <Form.Input type="file"></Form.Input>
                    <Button fluid primary type="submit">Subir</Button>
                </Form>
            </Segment>
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


export default EntregaActividad