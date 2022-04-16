import { Button, Card, Icon } from 'semantic-ui-react'
import React from 'react'

//components
import EditPublicacion from '../Publicacion/EditPublicacion'

const estilo = {
    position: 'absolute',
    left: '90%' 
};

const estiloCard = {
  margin: '5% 21%' 
};

const PublicacionCard = () => (
    <Card style={estiloCard}>
      <Card.Content>
        <Icon disabled name='world' style={estilo}/>
        <Card.Header>Titulo</Card.Header>
        <Card.Meta>Fecha</Card.Meta>
        <Card.Meta>Materia</Card.Meta>
        <Card.Description>
          Descripcion
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <EditPublicacion/>
          <Button basic color='red'>
            Eliminar
          </Button>
        </div>
      </Card.Content>
    </Card> 
)

export default PublicacionCard