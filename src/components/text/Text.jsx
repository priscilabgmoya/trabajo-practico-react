import  {useState} from "react";
import ExampleButton from "../button/Button";
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './text.css'
function ExampleText() {
    const [input, setInput] = useState(''); 
    const [change, setChange] = useState(true); 
    const setText = (event)=> {
        setInput(event.target.value); 
    }
    const changeVisibility = () =>{
      if(input === '') {
        setInput('Error: No se escribio nada!'); 
      }else{
        setChange(!change); 
      }
    }
  return (
    <>
      <Card>
        <Card.Header as="h5">Ocultando Un texto </Card.Header>
        <Card.Body>
          <Form>
          <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control      required
            type="text" onChange={setText} placeholder="Leave a comment here" />
      </FloatingLabel>
        <Card.Footer>
            <ExampleButton color="info" text="Ocultar texto" functions={changeVisibility} type='submit'/>
        </Card.Footer>
          </Form>
          <p className={change ? 'trueVisibility' : 'falseVisibility'}>{input}</p>
        </Card.Body>
      </Card>
    </>
  );
}
export default ExampleText;
