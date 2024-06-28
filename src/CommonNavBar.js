import React from "react";
import { NavLink } from "react-router-dom";

function CommonNavBar(){
    return(<>
        <header>
            <ul>
                <li><NavLink to="/">Home </NavLink></li>
                <li><NavLink to="/about">About Us  </NavLink></li>
                <li><NavLink to="/contact">Contact Us  </NavLink></li>
            </ul>
        </header>
    </>);
}
export default CommonNavBar;