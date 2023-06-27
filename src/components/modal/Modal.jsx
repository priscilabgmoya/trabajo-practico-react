import  {useState} from "react";
import ExampleButton from "../button/Button";
import Modal from 'react-bootstrap/Modal';
import ExampleText from '../text/Text';
function ExampleModal(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <ExampleButton functions = {handleShow} text='Prueba Modal' color='danger' type='button'/>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.text}
        <ExampleText/>
        </Modal.Body>
        <Modal.Footer>
        <ExampleButton functions = {handleClose} text='Cerrar' color='secondary' type='submit'/>
          <ExampleButton functions = {handleClose} text='Guardar Cambios' color='primary' type='submit'/>
        </Modal.Footer>
      </Modal>
      </>
    ); 
}
export default ExampleModal; 