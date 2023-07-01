import React from "react";
import './logo.css'; 
import logo from '../../assets/logo.jpeg'; 

function Logo(){
    return(
        <div className="logoNavBar">
            <img src={logo} alt="logo sunflower" />
        </div>
    );
}
export default Logo; 