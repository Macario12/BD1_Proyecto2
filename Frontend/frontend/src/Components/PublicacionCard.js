import { Button, Card, Icon } from 'semantic-ui-react'
import React, { useState} from "react";
import { helpHttp } from "../Helper/helpHttp";

//components
import EditPublicacion from '../Publicacion/EditPublicacion'

const estilo = {
  position: 'absolute',
  left: '90%'
};

const estiloCard = {
  margin: '5% 21%'
};

export default function PublicacionCard (props) {
  let api = helpHttp();
  let urlDelete = "http://localhost:4200/publicacion/delete"

  const [dataPublicacion, setDataPublicacion] = useState({
    id:props.publicacion.id_publicacion
  })

  const deletePublicacion = (data)=> {
    data.preventDefault();
    api.post(urlDelete, {body:dataPublicacion}).then((res) => {
      if(!res.err){
        alert("Se eliminó la publicación")
        console.log(res)
      }else{
          console.log("ERROR")
      }
  })
  }
    

    return (
      <Card style={estiloCard}>
        <Card.Content>
          <Icon disabled name='world' style={estilo} />
          <Card.Header>{props.publicacion.titulo}</Card.Header>
          <Card.Meta>{props.publicacion.fecha}</Card.Meta>
          <Card.Meta>{props.publicacion.nombre}</Card.Meta>
          <Card.Description>
            {props.publicacion.descripcion}
          </Card.Description>
        </Card.Content>
      {props.show ? 
        <Card.Content extra>
          <div className='ui two buttons'>
            <EditPublicacion publicacion = {props.publicacion}/>
            <Button basic color='red' onClick={deletePublicacion}>
              Eliminar
            </Button>
          </div>
        </Card.Content>
        :null}
      </Card>
    )
}
