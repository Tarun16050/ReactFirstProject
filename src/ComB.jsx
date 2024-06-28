import React, { useContext } from "react";
import ComC from "./ComC";
import { FirstName,LastName } from "./ContextAPIexamle";
function ComB(){
    const fname = useContext(FirstName); //multiple herachical me data use karna ho to usecontext ka use hota he 
    const lname = useContext(LastName);
return( <>
        <ComC/>
        <br/>
        <h1 style={{color:"skyblue"}}>useContext Hooks : </h1> <h1>My Name is {fname} {lname}</h1>
    </>

);
}
export default ComB;