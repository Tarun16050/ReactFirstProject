import React, { useEffect, useState }  from "react";
import { Headingpropsname } from './Propsdemo.jsx';
function UseEffectHookexample(){

    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);
    const [num3,setNum3] = useState(0);
    


    useEffect(()=>{alert("only Num2 Componet is used ");},[num2]); //()=>{} is if any changes in page we will autometic call ,()=>{},[] is first time page is loaded is autocall only one time ,//()=>{},[values] is a specific componet ke liye use hoga .

return(
    <>
        <Headingpropsname heading = "UseEffect Hooks Example "/>
        <div className="contaner_margin" >
            <button className="button" onClick={()=>{setNum1(num1+1);}} >Click me{num1} </button> 
            <button className="button" onClick={()=>{setNum2(num2+1);}} >Click me{num2} </button>
            <button className="button" onClick={()=>{setNum3(num3+1);}} >Click me{num3} </button>
        </div>
    </>
    
);
}
export default UseEffectHookexample;