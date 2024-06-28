import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



function KeepNotesBody(probs){
    const useStyles = makeStyles((theme) => ({
        margin: {
          margin: theme.spacing(1),
        },
        extendedIcon: {
          marginRight: theme.spacing(1),
        },
      }));
    const classes = useStyles();


const [notes,setNotes] = useState({title : '',content : ''});

const InputEvent = (event) =>{ 
    const {name,value }= event.target;
    setNotes((oldData) => {return{  ...oldData,[name]:value,} })};

const addEvents = () => {probs.showlist(notes); setNotes({title : '',content : ''});};

const [exapand,setexpand] = useState(false);
const expandit = () => {setexpand(true);}
const doubleexpand = () => {setexpand(false);}
    
return(
    <>
    <div className="container"  onDoubleClick={doubleexpand} >
        <div className="cards">
            <div className="card" style={{ position: 'relative', paddingBottom: '60px' }}>                    
                <form  autoComplete="off">
                    {exapand ?   <TextField id="standard-basic" label="Title" name="title" value={notes.title} placeholder="Title" onChange={InputEvent}/>:null}<br/>          
                    <TextField  id="standard-textarea" label="Note" name="content" value={notes.content} placeholder="Write a Note" multiline onChange={InputEvent} onClick={expandit}/>
                    { exapand ?<Fab size="small" color="primary" aria-label="add" className={classes.margin} style={{ position: 'absolute', bottom: '-8px', right: '-9px' }} onClick={addEvents}> <AddIcon /></Fab>:null}                   

                </form>
            </div>
        </div>
    </div>
    </>
);
}
export default KeepNotesBody;