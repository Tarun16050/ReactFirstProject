import React from "react";
import CommonNavBar from "./CommonNavBar";
import { useLocation, useNavigate, useParams } from "react-router-dom";
function About(){

    const Navigate = useNavigate();
    const gotoabout = () =>{Navigate("/");}
    const goback = () =>{Navigate(-1);}
    const { name ,surname } = useParams();
    const location = useLocation();
    // const history = useHistory();
return ( 
    <>
        <CommonNavBar/>
        <section>
            <h1>
                    This is a About Page .
            </h1>
            <p>Welcome, {name} {surname}!</p>
            <button onClick={gotoabout}>go To Home page</button>
            <h3>My Current Location is : <span style={{color:'blue'}}>{location.pathname}</span> </h3>
            {location.pathname === `/about/tarun/${surname}` ?<pa>hello Dear Tarun patidar Chopra </pa> :" "}

        </section>
    </>
);
}
export default About;
