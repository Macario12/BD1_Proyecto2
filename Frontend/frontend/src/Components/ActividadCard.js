import { Card, Icon, Button } from 'semantic-ui-react'
import { helpHttp } from "../Helper/helpHttp";
import React, { useState} from "react";

//components
import EntregaActividad from './EntregaActividad';

const estilo = {
  position: 'absolute',
  left: '90%'
};

const estiloCard = {
  margin: '5% 21%'
};

export default function ActividadCard(props) {
    let api = helpHttp();
    let urlDelete = "http://localhost:4200/actividad/delete"

    const [dataActividad] = useState({
      id:props.actividad.id_actividad
    })

    const deletePublicacion = (data)=> {
      data.preventDefault();
      api.post(urlDelete, {body:dataActividad}).then((res) => {
        if(!res.err){
          alert("Se eliminó la actividad")
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
          <Card.Header>{props.actividad.titulo}</Card.Header>
          <Card.Description>Entrega: {props.actividad.fecha_entrega}</Card.Description>
          <Card.Description>Materia: {props.actividad.nombre}</Card.Description>
          <Card.Description>Estado: {props.actividad.Entregado < 1 ? "No Entregado": "Entregado"}</Card.Description>
          <Card.Meta>
          {props.actividad.descripcion}
          </Card.Meta>
          <Card.Meta>
            Fecha: {props.actividad.fecha_publicacion}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'> 
            {props.show
            ?<EntregaActividad/> 
            :<Button basic color='red' onClick={deletePublicacion}>
              Eliminar
            </Button>}
          </div>
        </Card.Content>
      </Card>
    )
}
