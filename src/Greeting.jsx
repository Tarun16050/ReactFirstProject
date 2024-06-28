import React from "react";

function Greeting(){
    let currentDate =  new Date(2024,6,17,20);
    currentDate = currentDate.getHours();
    let greeting = '';
    const cssStyle = { };
    if(currentDate >= 1 && currentDate<12){
    greeting  = 'Good Morning';
    cssStyle.color = 'green';
    }else if(currentDate >=12 && currentDate < 19){
    greeting  = 'Good Afternoon';cssStyle.color = 'orange';
    }else{
    greeting  = 'Good Night';cssStyle.color = 'Black';
    }
    return(
        <div className='pages'>
            <h1 className='hello'>Hello Sir,<span style={cssStyle}>{greeting}</span></h1>
        </div>
    );
}

export default Greeting;
