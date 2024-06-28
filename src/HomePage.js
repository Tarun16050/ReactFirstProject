import React from "react";
import CommonNavBar from "./CommonNavBar";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
function HomePage(){
    const Navigate = useNavigate();
    const gotoabout = () =>{Navigate("/about");}
    const goback = () =>{Navigate(-1);}
return ( 
    <>
        <CommonNavBar/>
        <section>
            <h1>
                    This is a Home Page .
            </h1>
            <button onClick={gotoabout}>go To about page</button>
            <button onClick={goback}>go Back</button>
        </section>
        {/* <Outlet/> */}
    </>
);
}
export default HomePage;
