import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import PublicacionForm from '../Components/PublicaionForm'


function AddPublicacion() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Agregar una publicaicon</Modal.Header>
      <Modal.Content>
        <PublicacionForm/>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}


export default AddPublicacion