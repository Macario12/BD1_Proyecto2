import { Button,Modal } from 'semantic-ui-react'
import React from 'react'

//component
import MaestroForm from '../Components/MaestroForm'

function AddMaestro() {
  const [open, setOpen] = React.useState(false)


  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color='gray' >Crear Maestro</Button>}
    >
      <Modal.Header>Agregar maestro</Modal.Header>
      <Modal.Content>
        <MaestroForm tipo = "Agregar maestro"/>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Salir
        </Button>
      </Modal.Actions>
    </Modal>
  )
}


export default AddMaestro