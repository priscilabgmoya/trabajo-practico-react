import  {useState} from "react";
import Form from 'react-bootstrap/Form';
import ExampleButton from '../button/Button' ; 
import './Formulario.css'; 
import Title from "../title/Title";

function Formulario(){


    const [message, setMessage] = useState({nombre_y_apellido: '', dni: '', correo: '' , mensaje: ''}); 
    const [listMessage, setListMessage] = useState([]); 
    const handlerChange =(event) =>{
        setMessage({...message, [event.target.name] : event.target.value}); 
        
    };
    const handlerSubmit = (event)=> {
            event.preventDefault(); 
            if( message.nombre_y_apellido !== '' || message.correo !== '' || message.mensaje !== ''){
                const  updateListMessage = [...listMessage, message]; 
                setListMessage(updateListMessage); 
                setMessage({nombre_y_apellido: '',  dni: '', correo: '' , mensaje: ''}); 
                alert('Mensaje Enviado')
            }else{
                alert('Error: Falta completar algun campo. No se envio ningun mensaje!'); 
            }
    
    }

    return(
        <div className="container">
        <Title title='Formulario' />
        <Form   onSubmit={handlerSubmit}  className="formulario">
        <Form.Label  htmlFor="nombre">Nombre:  </Form.Label>
        <Form.Control type="text" name='nombre_y_apellido' id="nombre" className="inputNombre" onChange={handlerChange} value={message.nombre_y_apellido}/> 
        <Form.Label  htmlFor="nombre">DNI:  </Form.Label>
        <Form.Control type="text" name='dni' id="nombre" className="inputNombre" onChange={handlerChange} value={message.dni}/>
        <Form.Label  htmlFor="correo">Correo:  </Form.Label>
        <Form.Control type="email" name='correo' id="correo" className="inputCorreo" onChange={handlerChange} value={message.correo}/>
        <Form.Label htmlFor="mensaje">Deje su mensaje: </Form.Label>
        <Form.Control as="textarea" rows={6}  cols={60} name="mensaje" id="inputMensaje" onChange={handlerChange} value={message.mensaje}/>
        <ExampleButton color="secondary" text="Enviar Mensaje" type='submit' />
       
        </Form>
        <div className="listMessage">
            <h2>Mensajes Enviados</h2>
            <ul className="ulForm">
                {
                    listMessage.map((message ,index)=> {
                        return <li  className="liForm" key={index} > {
                           `Nombre: ${message.nombre_y_apellido} - DNI: ${message.dni} - Correo: ${message.correo} - Mensaje: ${message.mensaje}` }</li>
                    })
                }
            </ul>
        </div>
        </div>

    );
}

export default Formulario; 