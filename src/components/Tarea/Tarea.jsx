import { AiFillDelete } from "react-icons/ai";
import './tarea.css'; 
function Tarea({id , texto, eliminarTarea }){
    return (
        <div className= {"tarea-contenedor" }>
            <div className="tarea-texto">
                {texto}
            </div>
            <div className="tarea-contenedor-iconos">
                <button className="tarea-boton-eliminar"
            onClick={() => {eliminarTarea(id)}}
            >  <AiFillDelete className="tarea-icono" />  </button>
            </div>
        </div>
    ); 
}
export default Tarea; 