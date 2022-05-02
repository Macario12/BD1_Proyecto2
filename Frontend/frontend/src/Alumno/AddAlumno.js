import { Button,Modal } from 'semantic-ui-react'
import React from 'react'

//component
import AlumnoForm from '../Components/AlumnoForm';

function AddAlumno() {
  const [open, setOpen] = React.useState(false)


  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button basic color='black'>Crear Alumno</Button>}
    >
      <Modal.Header>Agregar una Alumno</Modal.Header>
      <Modal.Content>
        <AlumnoForm tipo = "Agregar alumno"/>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Salir
        </Button>
      </Modal.Actions>
    </Modal>
  )
}


export default AddAlumno