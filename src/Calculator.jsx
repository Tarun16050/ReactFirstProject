import React from "react";
import * as clcs from "./Clc";

function Calculator(){
    return(
        <>
            <div className="clc">
                <h4>Addtion of Two values is :  <span  className="answer">{clcs.add(10,5)}</span></h4>
                <h4>Subtartion  of Two values is : <span  className="answer">{clcs.sub(10,5)}</span> </h4>
                <h4>Division of Two values is : <span  className="answer">{clcs.division(10,7)}</span> </h4>
                <h4>Multiply  of Two values is : <span  className="answer">{clcs.multi(10,5)}</span> </h4>
            </div>
        </>
    );

}
export default Calculator;