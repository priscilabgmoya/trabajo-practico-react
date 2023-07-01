import Title from '../title/Title';
import Form from 'react-bootstrap/Form';
import './listaTarea.css'; 
function ListaTarea(){
    return(
        <div className='container'>
            <div className='contenedorListaTarea'>
            <Title title='Bienvenidos' />
            <h4 className='subtitle'>Ingresa Tus Tareas</h4>
            <div className='formTarea'>
            <Form className="tarea-formulario">
            <Form.Control 
            className="tarea-input"
            type="text"
            placeholder="Escriba Una Tarea..."
            name="texto-tarea"
            required
            maxLength={2000}
            minLength={1}
            />
        </Form>
            </div>
            <div className='listTareas'></div>
            </div>
        </div>
    );
}
export default ListaTarea; 