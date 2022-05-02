import { Button,Modal } from 'semantic-ui-react'
import React from 'react'

//component
import AlumnoForm from '../Components/AlumnoForm';

function EditAlumno(props) {
  const [open, setOpen] = React.useState(false)

  const sendData = (data)=> {
    data.preventDefault();
    console.log(props.data)
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button onClick={sendData} basic color='blue'>Ediatr Alumno</Button>}
    >
      <Modal.Header>Editar una publicacion</Modal.Header>
      <Modal.Content>
        <AlumnoForm tipo="Editar alumno" data={props.data}/>
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