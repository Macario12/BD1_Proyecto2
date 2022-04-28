import { Button,Modal } from 'semantic-ui-react'
import React from 'react'

//component
import AlumnoForm from '../Components/AlumnoForm';

function EditAlumno() {
  const [open, setOpen] = React.useState(false)


  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button basic color='blue'>Ediatr Alumno</Button>}
    >
      <Modal.Header>Editar una publicacion</Modal.Header>
      <Modal.Content>
        <AlumnoForm tipo = "Editar alumno"/>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Salir
        </Button>
      </Modal.Actions>
    </Modal>
  )
}


export default EditAlumno