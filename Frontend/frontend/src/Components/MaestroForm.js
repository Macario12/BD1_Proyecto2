import { Button, Form, Segment, Grid} from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import React, { useState, useEffect } from 'react'
import { helpHttp } from "../Helper/helpHttp";

//component

export default function MaestroForm(props) {
    let urlAddEstudiante = "http://localhost:4200/maestro/add"
    let urlEditEstudiante = "http://localhost:4200/maestro/update"
    console.log(props)
    const [dataMaestro, setDataMaestro] = useState({
        nombre: "",
        apellido: "",
        no_registro: "",
        telefono: "",
        direccion: "",
        email: "",
        fecha_nac: "",
        dpi: "",
        foto_perfil: "",
        contrasenia: ""
    });
    
    const [dataEditMaestro, setDataEditMaestro] = useState({
        id: props.data.id_maestro,
        nombre: props.data.nombre,
        apellido: props.data.apellido,
        no_registro: props.data.no_registro,
        telefono: props.data.telefono,
        direccion: props.data.direccion,
        email: props.data.email,
        fecha_nac: props.data.fecha_nac,
        dpi: props.data.dpi,
        foto_perfil: props.data.foto_perfil,
        contrasenia: props.data.contrasenia
    });

    const handleInputChange = (e) => {
        setDataEditMaestro({
            ...dataEditMaestro,
            [e.target.name] : e.target.value
        })
    };

    

    let api = helpHttp();

    const sendData = (data)=> {
        data.preventDefault();

        if(props.tipo === "Agregar maestro"){
            api.post(urlAddEstudiante, {body:dataEditMaestro}).then((res) => {
                if(!res.err){
                    setDataMaestro(res)
                    alert("Se agregó el maestro")
                    console.log(res)
                }else{
                    console.log("ERROR")
                }
            })
        }else{
            api.put(urlEditEstudiante, {body:dataEditMaestro}).then((res) => {
                if(!res.err){
                    setDataMaestro(res)
                    alert("Se actualizó el maestro")
                    console.log(res)
                }else{
                    console.log("ERROR")
                }
            })
        }

        window.location.href = window.location.href;
        // or
        window.location.replace('');
    }
    return (
        <div>
            <Grid centered>
                <Grid.Column style={{ maxWidth: 550, marginTop: 20}}>
                    <Segment>
                        <Form>
                            <Form.Field>
                                <Form.Input name='nombre' placeholder='Nombres' value={dataEditMaestro.nombre} onChange={handleInputChange} />
                            </Form.Field>
                            <Form.Field>
                            </Form.Field>
                                <Form.Input name='apellido' placeholder='Apellidos' value={dataEditMaestro.apellido} onChange={handleInputChange} />
                            <Form.Field>
                                <Form.Input name='no_registro' placeholder='Número de registro' value={dataEditMaestro.no_registro}  onChange={handleInputChange}/>
                            </Form.Field>
                            <Form.Field>
                                <Form.Input name='telefono' placeholder='Teléfono' value={dataEditMaestro.telefono} onChange={handleInputChange} />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input name='direccion' placeholder='Dirección' value={dataEditMaestro.direccion} onChange={handleInputChange} />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input name='email' placeholder='Correo Electronico' value={dataEditMaestro.email} onChange={handleInputChange}/>
                            </Form.Field>
                            <Form.Field>
                            <label for="fecha_entrega">Fecha de Nacimiento</label>
                                    <input 
                                        type = "date" 
                                        name ="fecha_nac" 
                                        value = {dataEditMaestro.fecha_nac}
                                        onChange={handleInputChange}
                                    />             
                            </Form.Field>
                            <Form.Field>
                                <Form.Input name='dpi' placeholder='DPI' value={dataEditMaestro.dpi} onChange={handleInputChange}/>
                            </Form.Field>
                            <Form.Field>
                                <Form.Input name='foto_perfil' placeholder='Foto de perfil' value={dataEditMaestro.foto_perfil} onChange={handleInputChange}/>
                            </Form.Field>
                            <Form.Field>
                                <Form.Input name='contrasenia' placeholder='Contrasenia' value={dataEditMaestro.contrasenia} onChange={handleInputChange} />
                            </Form.Field>
                            <Button fluid primary type="submit" onClick={sendData}>{props.tipo}</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    )
}
