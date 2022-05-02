import { Button,Modal } from 'semantic-ui-react'
import React from 'react'

//component
import CargarAlumnoForm from '../Components/CargarAlumnoForm'

export default function CargaMaestro() {
  const [open, setOpen] = React.useState(false)


  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button basic color='black'>Cargar CSV de maestro</Button>}
    >
      <Modal.Header>Cargar CSV de maestro</Modal.Header>
      <Modal.Content>
        <CargarAlumnoForm tipo={"maestro"}/>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Salir
        </Button>
      </Modal.Actions>
    </Modal>
  )
}
