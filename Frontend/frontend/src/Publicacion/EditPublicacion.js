import PublicacionForm from '../Components/PublicaionForm'
import { Button,Modal } from 'semantic-ui-react'
import React from 'react'

function EditPublicacion() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button basic color='blue' >Editar</Button>}
    >
      <Modal.Header>Editar la publicacion</Modal.Header>
      <Modal.Content>
        <PublicacionForm tipo = "Editar"/>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Salir
        </Button>
      </Modal.Actions>
    </Modal>
  )
}


export default EditPublicacion