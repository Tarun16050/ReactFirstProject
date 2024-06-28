import React, { useState } from "react";
import { Headingpropsname } from './Propsdemo.jsx';
import KeepNotesBody from "./KeepNotesBody.jsx";
import KeepNotesListOFNotes from "./KeepNotesListOFNotes";

function KeepNotes(){
    const [showlists,setShoeList] = useState([]);
    function AddNote(notes){
        setShoeList((olddata) => { return [...olddata,notes];});
        // console.log(notes);
    }
    // console.log(showlists);

    function delenote(id){ setShoeList((olddata) => olddata.filter((data , index)=>{return index !== id;})) }
    return(<>
    <Headingpropsname heading = "MINI Project -  Keep Notes"/>
    <KeepNotesBody showlist={AddNote}/>
    <div className="container">
        
   { showlists.map((value,index)=>{return <KeepNotesListOFNotes key={index} id={index}  title={value.title} contants={value.content} deletenotes={delenote} />})}
    </div>
    </>);
}
export default KeepNotes;