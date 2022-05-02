import { Button, Modal, Form, Segment, Grid,Input } from 'semantic-ui-react'
import React, { useEffect, useState } from "react";
import { helpHttp } from "../Helper/helpHttp";


function EntregaActividad(props) {
  const [open, setOpen] = React.useState(false)
  const saved = localStorage.getItem("User");
  const initial = JSON.parse(saved);
  let url = "http://127.0.0.1:4200/entregaTarea/add"
  let api = helpHttp();
  const [idUser] = useState({
      

  })
  const [dataFile, setDataFile] = useState([])

  const handleInputChange = (e) => {
    console.log(e.target.value.substring(12, (e.target.value.length+1)), "   ES LA RUTA")
    setDataFile({
        archivo: e.target.value.substring(12, (e.target.value.length+1)),
        id_actividad: props.actividad,
        id_alumno: initial.id_alumno,
        estado: 1,
        puntuacion:0,
        observacion: "Pendiente de Calificar"
    })
  };

  const sendData = (data)=> {
    data.preventDefault();

    api.post(url, {body:dataFile}).then((res) => {
        if(!res.err){
            setDataFile(res)
            console.log(res)
        }else{
            console.log("ERROR")
        }
    })
    console.log(dataFile)
}

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button basic color='blue' >Subir</Button>}
    >
      <Modal.Header>Entrega Actividad</Modal.Header>
      <Modal.Content>
        <Grid centered>
            <Segment> 
                <Form>
                    <Form.Field>
                        <Input 
                            name='Nombre' 
                            type="file"
                            value = ""
                            onChange={handleInputChange}
                        />  
                    </Form.Field>
                    <Button fluid primary onClick={sendData} type="submit">Subir</Button>
                </Form>
            </Segment>
        </Grid>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={ () => {setOpen(false)}}>
          Salir
        </Button>
      </Modal.Actions>
    </Modal>
  )
}


export default EntregaActividad