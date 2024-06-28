import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Search from "./SearchFilter/search";

function NavBarRouter(){
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about/:name" element={<About/>}/>
                <Route path="/about/:name/:surname" element={<About/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<Error/>}/>
                <Route path ="search" element={<Search/>}/>
            </Routes>
        </>
    );
}
export default NavBarRouter;