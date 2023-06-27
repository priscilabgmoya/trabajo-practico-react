import Button from 'react-bootstrap/Button';
import './Button.css'; 
function ExampleButton(props){
    return(
        <Button variant={props.color} id='btnPrueba' onClick={props.functions} type={props.type}>
       {props.text} 
      </Button>
    );
}

export default ExampleButton; 