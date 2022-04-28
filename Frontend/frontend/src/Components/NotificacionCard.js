import { Card, Icon, Button } from 'semantic-ui-react'
import React, { Component } from "react";

//components

const estilo = {
  position: 'absolute',
  left: '90%'
};

const estiloCard = {
  margin: '5% 21%'
};

export default class NotificacionCard extends Component {

  render() {
    return (
      <Card style={estiloCard}>
        <Card.Content>
          <Icon disabled name='world' style={estilo} />
          <Card.Header>Titulo notificacion</Card.Header>
          <Card.Description>Nota: #</Card.Description>
          <Card.Meta>
            Observacion: 
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
        <div className='ui two buttons' >
            <Button basic color='blue'>
              Enterado
            </Button>
        </div>
        </Card.Content>
      </Card>
    )
  }
}
