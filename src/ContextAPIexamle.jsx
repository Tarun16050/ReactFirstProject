import React, { createContext } from "react";
import { Headingpropsname } from './Propsdemo.jsx';
import ComA from "./ComA.jsx";

const FirstName = createContext();
const LastName = createContext();
function ContextAPIexamle()
{
    return(<> 
        <Headingpropsname heading = "Context API Example  &  useContext Hooks "/>

        <FirstName.Provider value="Tarun">
            <LastName.Provider value="Patidar">
                <ComA/>
            </LastName.Provider>
        </FirstName.Provider>
    </>);
}
export default ContextAPIexamle;
export {FirstName,LastName};