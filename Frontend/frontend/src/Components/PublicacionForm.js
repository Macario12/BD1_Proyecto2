import { Button, Form, Segment, Grid } from 'semantic-ui-react'
import { helpHttp } from "../Helper/helpHttp";
import React, { useState }  from "react";

import "react-datepicker/dist/react-datepicker.css";

export default function PublicacionForm (props){
    let api = helpHttp();
    let urlAdd = "http://localhost:4200/publicacion/add"
    let urlEdit = "http://localhost:4200/publicacion/update"

    const [dataNewPublicacion, setDataNewPublicacion] = useState({
        titulo: "",
        descripcion: "",
        fecha: "",
        id_materia: 0
    });

    const [dataEditPublicacion, setDataEditPublicacion] = useState({
        id: props.publicacion?props.publicacion.id_publicacion:0,
        titulo: props.publicacion?props.publicacion.titulo:"Titulo",
        descripcion: props.publicacion?props.publicacion.descripcion:"Descripcion",
        fecha: props.publicacion?props.publicacion.fecha:"Fecha",
        id_materia: props.publicacion?props.publicacion.id_materia:0
    });

    const handleInputChange = (e) => {
        console.log(e.target.value)

        if(props.tipo === "Publicar"){
            setDataNewPublicacion({
                ...dataNewPublicacion,
                [e.target.name] : e.target.value
            })
        }else{
            setDataEditPublicacion({
                ...dataEditPublicacion,
                [e.target.name] : e.target.value
            })
            console.log(dataEditPublicacion)
        }

    };

    const sendData = (data)=> {
        console.log(dataNewPublicacion)
        if(props.tipo === "Publicar"){
            api.post(urlAdd, {body:dataNewPublicacion}).then((res) => {
                if(!res.err){
                    console.log(res)
                    alert("Se creo la publicación");
                }else{
                    console.log("ERROR")
                }
            })
        }else{
            api.put(urlEdit, {body:dataEditPublicacion}).then((res) => {
                if(!res.err){
                    console.log(res)
                    alert("Se editó la publicación");
                }else{
                    console.log("ERROR")
                }
            })
            console.log(dataEditPublicacion)
        }

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
                                    onChange={handleInputChange}
                                    placeholder = {dataEditPublicacion.titulo}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.TextArea 
                                    name='descripcion' 
                                    onChange={handleInputChange}
                                    placeholder = {dataEditPublicacion.descripcion}
                                />
                            </Form.Field>
                            <Form.Field>
                                <input 
                                    type = "date" 
                                    name ="fecha" 
                                    onChange={handleInputChange}
                                    placeholder = {dataEditPublicacion.fecha}
                                />
                            </Form.Field>
                            <Form.Field>
                                <select
                                    name = "id_materia"
                                    onChange={handleInputChange}
                                    placeholder = {dataEditPublicacion}   
                                >    
                                    {props.materias.map(e => 
                                        <option key={parseInt(e.id_materia, 10)} value={parseInt(e.id_materia, 10)}>
                                            {e.nombre}
                                        </option>
                                    )}
                                </select>  
                            </Form.Field>
                            <Button fluid primary type="submit" onClick={sendData}>{props.tipo}</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    )
}

//<DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />