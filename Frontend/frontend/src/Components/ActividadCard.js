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
          <Card.Header>{this.props.actividad.titulo}</Card.Header>
          <Card.Description>Entrega: {this.props.actividad.fechaEntrega}</Card.Description>
          <Card.Description>Materia: {this.props.actividad.nombre}</Card.Description>
          <Card.Description>Estado: {this.props.actividad.Entregado < 1 ? "No Entregado": "Entregado"}</Card.Description>
          <Card.Meta>
          {this.props.actividad.descripcion}
          </Card.Meta>
          <Card.Meta>
            Fecha: {this.props.actividad.fechaPublicacion}
          </Card.Meta>
        </Card.Content>
        {this.props.show ?
        <Card.Content extra>
        <div className='ui two buttons' >
          <EntregaActividad/> 
        </div>
        </Card.Content>
        :null}
      </Card>
    )
  }
}
