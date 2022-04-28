import { Card, Icon } from 'semantic-ui-react'
import React, { Component } from "react";

//components
import EntregaActividad from './EntregaActividad';

const estilo = {
  position: 'absolute',
  left: '90%'
};

const estiloCard = {
  margin: '5% 21%'
};

export default class ActividadCard extends Component {

  render() {
    return (
      <Card style={estiloCard}>
        <Card.Content>
          <Icon disabled name='world' style={estilo} />
          <Card.Header>Tarea#</Card.Header>
          <Card.Description>Entrega: Fecha</Card.Description>
          <Card.Description>Materia: nombreMateria</Card.Description>
          <Card.Description>Estado: Entregado/NoEntregado</Card.Description>
          <Card.Meta>
            Descripcion
          </Card.Meta>
          <Card.Meta>
            Fecha: Publicacion
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
        <div className='ui two buttons' >
          <EntregaActividad/>
        </div>
        </Card.Content>
      </Card>
    )
  }
}
