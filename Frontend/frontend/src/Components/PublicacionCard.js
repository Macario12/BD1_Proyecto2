import { Button, Card, Icon } from 'semantic-ui-react'
import React, { Component } from "react";

//components
import EditPublicacion from '../Publicacion/EditPublicacion'

const estilo = {
  position: 'absolute',
  left: '90%'
};

const estiloCard = {
  margin: '5% 21%'
};

export default class PublicacionCard extends Component {

  render() {
    return (
      <Card style={estiloCard}>
        <Card.Content>
          <Icon disabled name='world' style={estilo} />
          <Card.Header>Titulo</Card.Header>
          <Card.Meta>Fecha</Card.Meta>
          <Card.Meta>Materia</Card.Meta>
          <Card.Description>
            Descripcion
          </Card.Description>
        </Card.Content>
      {this.props.show ? 
        <Card.Content extra>
          <div className='ui two buttons' >
            <EditPublicacion />
            <Button basic color='red'>
              Eliminar
            </Button>
          </div>
        </Card.Content>
        :null}
      </Card>
    )
  }
}
