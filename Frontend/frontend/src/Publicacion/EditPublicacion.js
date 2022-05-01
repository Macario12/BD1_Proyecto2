import PublicacionForm from '../Components/PublicacionForm'
import { Button,Modal } from 'semantic-ui-react'
import { helpHttp } from "../Helper/helpHttp";
import React, {useState} from 'react'

function EditPublicacion(props) {
  const [open, setOpen] = React.useState(false)
  
  let api = helpHttp();
  let urlFindMateria = "http://localhost:4200/materia/consultarmateriaxmaestro"

  const saved = localStorage.getItem("User");
  const initial = JSON.parse(saved);

  const [dataMateria, setDataMateria] = useState([]);
  const [dataUser, setDataUser] = useState({
    id:initial.id_maestro
  })

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
      trigger={<Button onClick={findMateria} basic color="blue" >Editar</Button>}
    >
      <Modal.Header>Editar la publicacion</Modal.Header>
      <Modal.Content>
        <PublicacionForm tipo = "Editar" materias = {dataMateria} publicacion = {props.publicacion}/>
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