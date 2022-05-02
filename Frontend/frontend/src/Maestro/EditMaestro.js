import { Button,Modal } from 'semantic-ui-react'
import React from 'react'

//component
import MaestroForm from '../Components/MaestroForm'

function EditMaestro(props) {
  const [open, setOpen] = React.useState(false)


  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button basic color='blue' >Editar Maestro</Button>}
    >
      <Modal.Header>Editar maestro</Modal.Header>
      <Modal.Content>
        <MaestroForm tipo = "Editar maestro" data={props.data}/>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Salir
        </Button>
      </Modal.Actions>
    </Modal>
  )
}


export default EditMaestro