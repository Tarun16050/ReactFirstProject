import React, { useEffect, useState } from "react";
import axios from "axios";
import { Headingpropsname } from './Propsdemo.jsx';
function ApiCallPokemon(){
    const [num,setnum] = useState();
    const [employeename,setemployeename] = useState();
    const [employeesalary,setemployeesalary] = useState();
    useEffect(()=>{
       async function getData(){
            const res = await axios.get(`https://dummy.restapiexample.com/api/v1/employee/${num}`);
            console.log(res.data.data);
            setemployeename(res.data.data.employee_name);
            setemployeesalary(res.data.data.employee_salary);
        }
        getData();
    });
    return(<>
        <Headingpropsname heading = " API CAll   "/>
        <div className="contaner_API" >
            <select value={num} onChange={(event)=>{setnum(event.target.value);}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="25">5</option>
            </select>

            <h1>user select {num} value</h1><br/>
            API : employee Name : {employeename}
            <br/>
            salary : {employeesalary}

        </div>
    </>);
}
export default ApiCallPokemon;