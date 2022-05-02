import { Button, Form, Segment, Grid } from 'semantic-ui-react'
import { helpHttp } from "../Helper/helpHttp";
import React, { useState } from "react";


export default function ActividadForm(props) {
    const [dataNewActividad, setDataNewActividad] = useState({
        titulo: "",
        descripcion: "",
        fecha_entrega: "",
        punteo: 0,
        id_materia: 0
    });

    let api = helpHttp();
    let urlAdd = "http://localhost:4200/actividad/add"

    const handleInputChange = (e) => {
        setDataNewActividad({
            ...dataNewActividad,
            [e.target.name] : e.target.value
        })
    };

    const sendData = (data)=> {
        console.log(dataNewActividad)
        api.post(urlAdd, {body:dataNewActividad}).then((res) => {
            if(!res.err){
                console.log(res)
                alert("Se creo la Actividad");
            }else{
                console.log("ERROR")
            }
        })
    }

        return (
            <div>
                <Grid centered>
                    <Grid.Column style={{ maxWidth: 550, marginTop: 20}}>
                        <Segment>
                            <Form>
                                <Form.Field>
                                    <Form.Input 
                                        name='titulo' 
                                        placeholder='Titulo' 
                                        onChange={handleInputChange}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.TextArea 
                                        name='descripcion' 
                                        placeholder='Descripcion' 
                                        onChange={handleInputChange}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label for="fecha_entrega">Fecha de entrega</label>
                                    <input 
                                        type = "date" 
                                        name ="fecha_entrega" 
                                        onChange={handleInputChange}
                                    />                         
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input 
                                        name='punteo' 
                                        placeholder='Punteo' 
                                        onChange={handleInputChange}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <select
                                        name = "id_materia" 
                                        onChange={handleInputChange}
                                    >    
                                        {props.materias.map(e => 
                                            <option key={parseInt(e.id_materia, 10)} value={parseInt(e.id_materia, 10)}>
                                                {e.nombre}
                                            </option>
                                        )}
                                    </select>  
                                </Form.Field>
                                <Button onClick={sendData} fluid primary type="submit">{props.tipo}</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
}

//<DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />