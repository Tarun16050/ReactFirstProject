import React from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
function KeepNotesListOFNotes(probs){
    const useStyles = makeStyles((theme) => ({
        margin: {
          margin: theme.spacing(1),
        },
        extendedIcon: {
          marginRight: theme.spacing(1),
        },
      }));
      console.log(probs);
    const classes = useStyles();

    const deleItem = () =>{ probs.deletenotes(probs.id);}
    return(<>
        <div className="container" >
        <div className="cards">
            <div className="card" style={{ position: 'relative', paddingBottom: '60px' }}>
                <h1> {probs.title}</h1>
                <p>{probs.contants}</p>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} style={{ position: 'absolute', bottom: '-8px', right: '-9px' }} onClick={deleItem}> <DeleteIcon /></Fab>
            </div>
        </div>
    </div>
    </>);

}
export default KeepNotesListOFNotes;