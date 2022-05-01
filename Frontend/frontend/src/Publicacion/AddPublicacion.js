import PublicacionForm from '../Components/PublicacionForm'
import { Button,Modal } from 'semantic-ui-react'
import { helpHttp } from "../Helper/helpHttp";
import React, {useState} from 'react'

function AddPublicacion() {
  
  const estiloAdd= {
    position: 'absolute',
    width: '25%',
    height: '20%',
    left: '-54%',
  };

  let api = helpHttp();
  let urlFindMateria = "http://localhost:4200/materia/consultarmateriaxmaestro"

  const [dataMateria, setDataMateria] = useState([]);
  const [dataUser, setDataUser] = useState({
    id: 2
  })
  const [open, setOpen] = useState(false)

  const findMateria = (data)=> {
    data.preventDefault();
    api.post(urlFindMateria, {body:dataUser}).then((res) => {
      if(!res.err){
        setDataMateria(res)
        console.log(res)
      }else{
          console.log("ERROR")
      }
  })
    console.log(dataMateria)
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button onClick={findMateria}  style={estiloAdd}>Crear Publicacion</Button>}
    >
      <Modal.Header>Agregar una publicacion</Modal.Header>
      <Modal.Content>
        <PublicacionForm tipo = "Publicar" materias = {dataMateria}/>
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