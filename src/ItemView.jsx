import React from "react";

function ItemView(props){
    return ( <>
        <div className="todo_style">
            <i className="fa fa-times" aria-hidden="true" onClick={()=>{
                props.onsubmit(props.id)
            }}/>
            <li className="todoproject_li">{props.text}</li>
        </div> 
    </>);
  
}
export default ItemView;