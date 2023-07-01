import React from "react";
import {Outlet ,Link }from 'react-router-dom'
import './li.css'; 

function ItemsLi (props){
    return (
        <>
        <li className="itemsNavBar"><Link  to={props.link} className="linkNavBar">{props.texto}</Link></li>
        <Outlet />
        </>
    ); 
}
export default ItemsLi; 