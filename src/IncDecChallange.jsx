import React, { useState } from "react";

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';



function IncDecChallange(){
    const [num,numbers] =  useState(0);
    const incfun =() =>{numbers(num+1)};
    const decfun =() =>{
        if(num ===0){alert("do not increment");}else{numbers(num-1);}
        };
    return(
        <>
             <div className="todoproject incdec">
                <div className="todoproject_center incdec_center">
                    <br/>
                    <h1 className="todoproject_h1 incdec__h1">{num}</h1>
                    <div className="multiple_button ">
                        <button className="incdec_button"  onClick={incfun}>Increment</button>
                        <button className="incdec_button" onClick={decfun}>Decrement</button>
                        <br/>
                        <button className="incdec_button"  onClick={incfun}><AddIcon/></button>
                        <button className="incdec_button" onClick={decfun}><RemoveIcon/></button>
                        <br/>
                        <Button variant="contained" color="#f19b07" onClick={incfun}> <AddIcon/></Button>
                        <Button variant="contained" color="#f19b07" onClick={decfun}> <RemoveIcon/></Button>

                    </div>
                </div>
            </div>
        </>
    );
}
export default IncDecChallange;