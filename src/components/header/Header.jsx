import React from "react";
import './header.css'; 
import Ul from "../ul/Ul";
import Logo from "../logo/Logo";
function Header (){
    return(
        <nav className="navBar">
            < Logo/>
            <Ul/>
        </nav>
    );
}
export default Header; 