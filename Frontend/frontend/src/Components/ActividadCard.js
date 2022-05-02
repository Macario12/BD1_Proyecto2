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
  entrega = this.props.entregas.find(entrega => entrega.id_actividad === this.props.actividad.id_actividad)
  
  render() {
    console.log(this.entrega)
    if(this.entrega == null){
      this.entrega = {
        estado:0,
        puntuacion:'no aplica'
      }
    }
    return (
      <Card style={estiloCard}>
        <Card.Content>
          <Icon disabled name='world' style={estilo} />
          <Card.Header>{this.props.actividad.titulo}</Card.Header>
          
          <Card.Description>Entrega: {this.props.actividad.fechaEntrega}</Card.Description>
          <Card.Description>Materia: {this.props.actividad.nombre}</Card.Description>
          <Card.Description>Estado: {this.props.actividad.Entregado < this.entrega.estado ? "No Entregado": "Entregado"}</Card.Description>
          <Card.Description>Puntuacion: {this.entrega.puntuacion}</Card.Description>
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
