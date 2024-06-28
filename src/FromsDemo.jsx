import React, { useState } from "react";
import { Headingpropsname } from './Propsdemo.jsx';
function FromsDemo(){

/*
const [names,fullName] = useState('');
const [afterName,afterNAme] = useState('');
const [lastname,lastNames] = useState('');
const fullname = (event) =>{let name =  event.target.value ; fullName(name); };
const namesubmit = () => {afterNAme(names); };
const namesubmit2 = (e) => {e.preventDefault() ; afterNAme(names); };
const lastName = (event) =>{let lastname =  event.target.value ; lastNames(lastname); };
const namesubmit3 = (event) =>{event.preventDefault(); afterNAme (names+" "+ lastname)}


    return(
        <>
            <Headingpropsname heading = "Froms Examples "/>
            <div className="container">
                <div className="from_page">
                    <h1 className="messages">Hello...<span style={{color: 'blue'}}>{names}</span></h1>
                    <h1 className="messages">Hello,<span style={{color: 'red'}}>{afterName}</span></h1>
                    <input type="text" onChange={fullname} value={names}></input>
                    <button className="button" onClick={namesubmit}>Submit</button>
                </div>
                <div className="from_page">
                    <h1 className="messages">Hello...<span style={{color: 'blue'}}>{names}</span></h1>
                    <h1 className="messages">Hello,<span style={{color: 'red'}}>{afterName}</span></h1>
                    <form onSubmit={namesubmit2}>
                        <input type="text" onChange={fullname} value={names}></input>
                        <button className="button" type="submit">Submit</button>
                    </form>
                </div>
                <div className="from_page">
                    <h1 className="messages">Hello...<span style={{color: 'blue'}}>{`${names}  ${lastname}` }</span></h1>
                    <h1 className="messages">Hello,<span style={{color: 'red'}}>{afterName}</span></h1>
                    <form onSubmit={namesubmit3}>
                        <input type="text" onChange={fullname} value={names} placeholder="Enter First Name"></input>
                        <input type="text" onChange={lastName} value={lastname} placeholder="Enter Last Name"></input>
                        <button className="button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
            
        </>
    );*/



    const [intro,introname] = useState({  Fname : "", Lname : "", email:"",mobile:"",department:"" });
    const inputEvent = (event)=>{
        const value = event.target.value;  
        const name = event.target.name;
        introname((oldvalue)=>{
                // if(name === 'Fname'){ return{ Fname : value, Lname : oldvalue.Lname, }}
                // else{return{ Fname : oldvalue.Fname, Lname : value,    }}

                return{
                    ...oldvalue,[name]:value,
                }
            })
     };

     const [fullIntro,fullintrofun] = useState();
    const afterSubmitFrom = (e) => {e.preventDefault(); fullintrofun(intro.Fname + " " + intro.Lname +"("+intro.email+")" ) };

    return(<>
        <Headingpropsname heading = "Froms Examples "/>
        <div className="container">
            <div className="from_page">
                <div className="itroduction" >
                    <h4 >Hello...<span style={{color: 'blue'}}>{`${intro.Fname}   ${intro.Lname}`}</span></h4>
                    <br/><p>{intro.email}</p>
                    <br/><p>{intro.mobile}</p>
                    <br/><p>{intro.department}</p>
                </div>
                <h4 className="messages">Hello,<span style={{color: 'red'}}>{fullIntro}</span></h4>
                <p></p>
                <form  onSubmit={afterSubmitFrom}>
                    <input type="text" className="input_from_cs" onChange={inputEvent} name="Fname" value={intro.Fname} placeholder="Enter First Name" autoComplete="off"></input>
                    <input type="text" className="input_from_cs" onChange={inputEvent} name="Lname" value={intro.Lname} placeholder="Enter Last Name" autoComplete="off"></input>
                    <input type="email" className="input_from_cs" onChange={inputEvent} name="email" value={intro.email} placeholder="Enter Last Name" autoComplete="off"></input>
                    <input type="text" className="input_from_cs" onChange={inputEvent} name="mobile" value={intro.mobile} placeholder="Enter Last Name" autoComplete="off"></input>
                    <input type="text" className="input_from_cs" onChange={inputEvent} name="department" value={intro.department} placeholder="Enter Last Name" autoComplete="off"></input>
                    <button className="button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    </> );

}
export default FromsDemo;