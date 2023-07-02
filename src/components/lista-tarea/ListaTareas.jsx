import Title from "../title/Title";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Tarea from "../Tarea/Tarea";
import {generarID} from '../../helpers/help.js'; 
import "./listaTarea.css";
function ListaTarea() {
  const [stateTarea, setStateTarea] = useState(''); 
  const [stateListTarea, setStateListTarea] = useState(localStorage.getItem("listTarea")? JSON.parse(localStorage.getItem("listTarea")) : [] ); 
  const setInputTarea = (event) =>{
    setStateTarea(event.target.value); 
  }
  const crearTarea =(event) => {
if (event.keyCode === 13 ){
    event.preventDefault(); 
    if (stateTarea == '') return   alert('Escriba una tarea!'); 
    const nuevaTarea = {
        id: generarID(), 
        texto: stateTarea
    }
    const addTarea = [ ...stateListTarea,nuevaTarea];
    setStateListTarea(addTarea);
    localStorage.setItem("listTarea", JSON.stringify(addTarea)); 
    event.target.value = ''; 
    alert('Tarea Guardada! ');
}
  }
const eliminarTarea = (id) =>{
    const deleteTarea = stateListTarea.filter(tarea => tarea.id !== id);
    setStateListTarea(deleteTarea);
    localStorage.setItem("listTarea", JSON.stringify(deleteTarea)); 
    alert('Tarea Eliminada!'); 
}
  return (
    <div className="container">
      <div className="contenedorListaTarea">
        <Title title="Bienvenidos" />
        <h4 className="subtitle">Ingresa Tus Tareas</h4>
        <div className="formTarea">
          <Form className="tarea-formulario" onKeyDown={crearTarea}>
            <Form.Control
              className="tarea-input"
              type="text"
              placeholder="Escriba Una Tarea..."
              name="texto-tarea"
              required
              maxLength={2000}
              minLength={1}
              onChange={setInputTarea}
            />
          </Form>
        </div>
        <div className="listTareas">
            {
                stateListTarea.map((tarea)=>{
                  return  <Tarea  
                key = {tarea.id}
                id = {tarea.id}
                texto = {tarea.texto}
                eliminarTarea={eliminarTarea}
                />
                })
            }
        </div>
      </div>
    </div>
  );
}
export default ListaTarea;
