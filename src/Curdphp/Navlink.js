import React from 'react'

import {  BrowserRouter, Routes, Route, NavLink,} from "react-router-dom";
import Home from './Home';
import Create from './Create';
import Edit from './Edit';
import Contact from './Contact';
import { Headingpropsname } from '../Propsdemo';

function Navlink() {
  return (
    <>
        <Headingpropsname heading = "CURD Operations using PHP API and MYSQL database in React JS"/>
        <br/>
        <BrowserRouter>
            <div style={{ display: "flex", background: "black", padding: "5px 0 5px 5px", fontSize: "20px", }} >
                <div style={{ margin: "10px" }}>
                    <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "greenyellow" : "white", })} > Home </NavLink>
                </div>
                <div style={{ margin: "10px" }}>
                    <NavLink to="/create" style={({ isActive }) => ({ color: isActive  ? "greenyellow" : "white",  })} > Create  </NavLink>
                </div>
                <div style={{ margin: "10px" }}>
                    <NavLink to="/contactcurd" style={({ isActive }) => ({  color: isActive  ? "greenyellow"  : "white",  })} > Contact </NavLink>
                </div>
            </div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/create" element={<Create />} />
                <Route exact path="/contactcurd" element={<Contact />} />
                <Route exact path="/edit/:id" element={<Edit />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Navlink;
