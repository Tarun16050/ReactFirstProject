import React from "react";
import { Headingpropsname } from "./Propsdemo";


function Correct(){
    return(
        <>
            <div  className="messages">
                <h3>This is Maching.</h3>
            </div>
        </>
    );
}

function Nocorrect(){
    return(
        <>
            <div className="messages">
                <h3>This is Not Maching.</h3>
            </div>
        </>
    );
}
function Slot(values){
    let {x,y,z} = values ;
    if(x===y && y===z){
        return( <>  <div className="slotmashine" ><h1>{`${x}    ${y}     ${z}`}</h1><Correct /></div></>);
    }
    else{ return(<> <div className="slotmashine" ><h1>{`${x}    ${y}     ${z}`}</h1> <Nocorrect /></div> </>); }
}
function SlotMachine(){
   
return(
    <>
        <Headingpropsname heading = " 🎰 Slot Machine Games 🎰 "/>
        <div className="machine">
            <Slot  x= '😅'  y= '😅'  z= '😅' />
            <Slot  x= '😅'  y= '🐱'  z= '😅' />
            <Slot  x= '😅'  y= '😅'  z= '🧟' />
            <Slot  x= '😅'  y= '😅'  z= '😅' />
        </div>
    </>
);

}

export default SlotMachine;