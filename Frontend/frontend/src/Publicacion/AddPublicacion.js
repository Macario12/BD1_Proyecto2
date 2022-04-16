import PublicacionForm from '../Components/PublicaionForm'
import { Button,Modal } from 'semantic-ui-react'
import React from 'react'

function AddPublicacion() {
  const [open, setOpen] = React.useState(false)
  const estiloAdd= {
    position: 'absolute',
    width: '25%',
    height: '20%',
    left: '-54%',
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color='gray' style={estiloAdd}>Crear</Button>}
    >
      <Modal.Header>Agregar una publicacion</Modal.Header>
      <Modal.Content>
        <PublicacionForm tipo = "Publicar"/>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Salir
        </Button>
      </Modal.Actions>
    </Modal>
  )
}


export default AddPublicacion