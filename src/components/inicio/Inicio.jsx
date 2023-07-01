import Title from '../title/Title';
import ExampleModal from '../modal/Modal'; 
import './inicio.css'; 

function Inicio(){
    return(
        <div className='container'>
            <Title title='Prueba de Componentes Unitarios'/>
            <ExampleModal title='Modal Con Props' text='Esto es un texto con Props'/>
        </div>
    ); 
}
export default Inicio; 