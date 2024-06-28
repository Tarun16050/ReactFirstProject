import React from "react";

function Propsdemo(props){
return(
    <>
        <div className="cards">
            <div className="card">
            <img src={props.imrUrl} alt={props.imagename} width="500" height="600" className="image_card" />
            <h5 className="hs_card"> {props.headingName}</h5>
            </div>
        </div>
    </>
);
}
function Headingpropsname(name){
    return(
        <>
            <div className="propheding">
                <h3 className="propnameheading"> {name.heading}</h3>
            </div>
        </>
    );

}
export default Propsdemo;
export {Headingpropsname};