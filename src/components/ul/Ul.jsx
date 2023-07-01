import React from "react";
import './ul.css'; 
import Li from '../li/Li'

function Ul(){
    const urlBase = () => {
        return window.location.origin; 
    }
    return(
        <ul className="listadoNavegacion">
            <Li  texto = 'Inicio' link={`${urlBase()}/`}/>
            <Li  texto = 'Contactos' link={`${urlBase()}/contacto`}/>
            <Li  texto = 'Formulario' link={`${urlBase()}/formulario`}/>
            <Li  texto= 'Lista De Tarea' link= {`${urlBase()}/lista-de-tarea`}/>
        </ul>
    ); 
}
export default Ul; 