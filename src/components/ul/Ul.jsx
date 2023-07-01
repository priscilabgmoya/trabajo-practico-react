import React from "react";
import './ul.css'; 
import Li from '../li/Li'

function Ul(){
    const urlBase = () => {
        return window.location.origin; 
    }
    return(
        <ul className="listadoNavegacion">
            <Li  texto = 'Inicio' link={`/`}/>
            <Li  texto = 'Contactos' link={`/contacto`}/>
            <Li  texto = 'Formulario' link={`/formulario`}/>
            <Li  texto= 'Lista De Tarea' link= {`/lista-de-tarea`}/>
        </ul>
    ); 
}
export default Ul; 