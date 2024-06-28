import React from "react";
function Hedinone(){
    const name = 'tarun patidar';
    const lastname = 'nandra';
    var date = new Date().toLocaleDateString();
    var time = new Date().toLocaleTimeString();
    return(

    <>
        <h1>hello Tarun Patidar ji</h1>
        <p>Listing</p>
        <ol><li>tarun</li><li>patidar</li><li>Ji </li><li>Chopra</li><li>Nandra</li></ol>
        <h3>my name id : {name}</h3>
        <p>Add of Two numer : {4+4} </p>
        <p>Random number is {Math.floor(Math.random() * 100)}</p>
        <p>my name is : {`${name} ${lastname}`}</p>
        <h1>My name is {`${name} ${lastname}`}</h1>
        <p>Current Date : {date}</p>
        <p>Current Time : {time}</p>
  </>
    );
}
export default Hedinone;