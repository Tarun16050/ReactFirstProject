import React, { useState } from "react";
import ItemView from "./ItemView";
function ItemsLits(){
    
}

function ToDOProject(){
    const [inputList,setInputList] = useState('');
    const [items,setItems] = useState([]);
    const itemEvent = (event)=>{setInputList(event.target.value)};
    const listOfiteams = ()=>{setItems((oldlist)=>{return [...oldlist,inputList]});setInputList('');};
    const deleteItems = (id) =>{setItems((oldItem)=>{return oldItem.filter((arrayElement , index)=>{return index !== id;}); });};
    return (
        <>
            <div className="todoproject">
                <div className="todoproject_center">
                    <br/>
                    <h1 className="todoproject_h1">ToDo List</h1>
                    <br/>
                    <input className="todoproject_input" type="text" placeholder="Add a Items" value={inputList} onChange={itemEvent}/>
                    <button className="todoproject_button" onClick={listOfiteams}>+</button>
                    <ol className="todoproject_ol">
                        {
                            items.map((iteamvalue ,index)=>{return ( 
                                    <ItemView key={index} id={index} text={iteamvalue}  onsubmit={deleteItems}/>
                             ) })
                        }
                    </ol>
                </div>
            </div>
        </>
    );
}

export default ToDOProject;