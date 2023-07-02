import React from "react";
import {Outlet ,Link }from 'react-router-dom';
import './ul.css'; 

function Ul(){
    return(
        <>
        <ul className="listadoNavegacion">
        <li className="itemsNavBar"><Link  to={`/`}className="linkNavBar">{'Inicio'}</Link></li>
        <li className="itemsNavBar"><Link  to={`/contacto`} className="linkNavBar">{'Contactos'}</Link></li>
        <li className="itemsNavBar"><Link  to={`/formulario`} className="linkNavBar">{'Formulario'}</Link></li>
        <li className="itemsNavBar"><Link  to={`/lista-de-tarea`} className="linkNavBar">{'Tarea'}</Link></li>
        </ul>
        <Outlet />
        </>
    ); 
}
export default Ul; 