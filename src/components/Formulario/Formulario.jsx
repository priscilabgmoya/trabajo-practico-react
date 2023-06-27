import  {useState} from "react";
import Form from 'react-bootstrap/Form';
import ExampleButton from '../button/Button' ; 
import ExampleModal from '../modal/Modal'; 
import './Formulario.css'; 

function Formulario(){


    const [message, setMessage] = useState({nombre: '', correo: '' , mensaje: ''}); 
    const [listMessage, setListMessage] = useState([]); 
    const handlerChange =(event) =>{
        setMessage({...message, [event.target.name] : event.target.value}); 
        
    };
    const handlerSubmit = (event)=> {
            event.preventDefault(); 
        const  updateListMessage = [...listMessage, message]; 
        setListMessage(updateListMessage); 
        setMessage({nombre: '', correo: '' , mensaje: ''}); 
    
    }

    return(
        <>
        <Form   onSubmit={handlerSubmit}  className="formulario">
        <Form.Label  htmlFor="nombre">Nombre:  </Form.Label>
        <Form.Control type="text" name='nombre' id="nombre" className="inputNombre" onChange={handlerChange} value={message.nombre}/>
        <Form.Label  htmlFor="correo">Correo:  </Form.Label>
        <Form.Control type="email" name='correo' id="correo" className="inputCorreo" onChange={handlerChange} value={message.correo}/>
        <Form.Label htmlFor="mensaje">Deje su mensaje: </Form.Label>
        <Form.Control as="textarea" rows={6}  cols={60} name="mensaje" id="inputMensaje" onChange={handlerChange} value={message.mensaje}/>
        <ExampleButton color="secondary" text="Enviar Mensaje" type='submit' />
        <ExampleModal title='Modal Con Props' text='Esto es un texto con Props'/>
        </Form>
        <div className="listMessage">
            <h2>Mensajes Enviados</h2>
            <ul>
                {
                    listMessage.map((message ,index)=> {
                        return <li key={index} > {
                            ( message.nombre !== '' || message.correo !== '' || message.mensaje !== '' ) ? `Nombre: ${message.nombre} - Correo: ${message.correo} -Mensaje: ${message.mensaje}` : 'Error: No se envio ningun mensaje'}</li>
                    })
                }
            </ul>
        </div>
        </>
    );
}

export default Formulario; 