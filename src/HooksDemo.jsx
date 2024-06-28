import React, { useState } from "react";
import { Headingpropsname } from './Propsdemo.jsx';
function HooksDemo(){
    const [count,autoinc] = useState(0);  // useState hook use kiya he (isme do peramiter dete he (The current state , A function that updates the state )) jo function ham uske under use value ko update kar dete he 
function Addnumber(){   autoinc(count+1);   }  // Addnummber ak onclick karne par function call hota he uske under hook laga he (ye useState hook ke ye ak initial value leta he or usko udated wale me send kar deta he )


let time = new Date().toLocaleTimeString();
const [times , autotime] = useState(time);
function AddTime(){
    time = new Date().toLocaleTimeString();
    autotime(time);
}



let digiclk = new Date().toLocaleTimeString();
const [digitalLock , digiclock] = useState(digiclk);
function digifunc(){
    digiclk = new Date().toLocaleTimeString();
    digiclock(digiclk);
}
setInterval(digifunc,1000);

    return(
        <>
            <Headingpropsname heading = "Hooks Example"/>
            <div className="container">
                <div className="cards">
                    <div className="card">
                        <h5 className="hs_card"> {count} </h5>
                        <button className="button" onClick={Addnumber}>Click Me</button>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <h5 className="hs_card"> {times} </h5>
                        <button className="button" onClick={AddTime}>Show Time</button>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <h5 className="hs_card"> {digitalLock} </h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HooksDemo;