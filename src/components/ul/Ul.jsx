import React from "react";
import './ul.css'; 
import Li from '../li/Li'

function Ul(){
    return(
        <ul className="listadoNavegacion">
            <Li  texto = 'Inicio' link={`${import.meta.env.VITE_ROUTE}/`}/>
            <Li  texto = 'Contactos' link={`${import.meta.env.VITE_ROUTE}/contacto`}/>
            <Li  texto = 'Formulario' link={`${import.meta.env.VITE_ROUTE}/formulario`}/>
            <Li  texto= 'Lista De Tarea' link= {`${import.meta.env.VITE_ROUTE}/lista-de-tarea`}/>
        </ul>
    ); 
}
export default Ul; 