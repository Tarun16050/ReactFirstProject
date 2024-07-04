import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Headingpropsname } from './Propsdemo.jsx';
import { BrowserRouter } from 'react-router-dom';

import Hedinone from './Hedinone.jsx';
import Greeting from './Greeting';
import Calculator from './Calculator.jsx';
import Propsdemo from './Propsdemo.jsx';
import data from './PropsArray.jsx';
import Propstest from './Propstest.jsx';
import SlotMachine from './SloatMachine.jsx';
import HooksDemo from './HooksDemo.jsx';
import FromsDemo from './FromsDemo.jsx';
import ToDOProject from './ToDOProject.jsx';
import IncDecChallange from './IncDecChallange.jsx';
import KeepNotes from './KeepNotes.jsx';
import ContextAPIexamle from './ContextAPIexamle.jsx';
import UseEffectHookexample from './UseEffectHookexample.jsx';
import HookUseEffectExap from './HookUseEffectExap.jsx';
import ApiCallPokemon from './ApiCallPokemon.jsx';
import NavBarRouter from './NavBarRouter.js';
import Search from './SearchFilter/search.js';
import Navlink from './CURD/Navlink.js';
import ProductNavLink from './Product/ProductNavLink.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const good = ReactDOM.createRoot(document.getElementById('good'));
const clc = ReactDOM.createRoot(document.getElementById('clc'));
const propsExample = ReactDOM.createRoot(document.getElementById('propsExample'));
const sloatGame = ReactDOM.createRoot(document.getElementById('slotMachineGames'));
const hooksdemo = ReactDOM.createRoot(document.getElementById('hooksExampale'));
const froms = ReactDOM.createRoot(document.getElementById('froms'));
const todoexample = ReactDOM.createRoot(document.getElementById('toDoProject'));
const incdecchallange = ReactDOM.createRoot(document.getElementById('incDecChallence'));
const keepNotesproject = ReactDOM.createRoot(document.getElementById('keepNotesProject'));
const ContextAPI = ReactDOM.createRoot(document.getElementById('ContextAPI'));
const hooktarun = ReactDOM.createRoot(document.getElementById('hookDemoUseEffect'));
const reactapicallexp = ReactDOM.createRoot(document.getElementById('aPICALLPOKEMON'));
const roterexample = ReactDOM.createRoot(document.getElementById('routerExample'));
const SearchFilter = ReactDOM.createRoot(document.getElementById('SearchFilter'));
const CurdOperations = ReactDOM.createRoot(document.getElementById('CurdOperations'));
const ProductDemo = ReactDOM.createRoot(document.getElementById('Product'));


// root.render(<Hedinone />);
// good.render(<Greeting />);
// clc.render(<Calculator />);
// propsExample.render( <Propstest/>);  
// sloatGame.render(   <SlotMachine /> ); 
// hooksdemo.render( <HooksDemo />);  
// ContextAPI.render(<ContextAPIexamle />); //useContext Hooks
// hooktarun.render(<UseEffectHookexample/>);
// froms.render(<FromsDemo />); 
// todoexample.render(<ToDOProject />);
// incdecchallange.render(<IncDecChallange />);
// keepNotesproject.render(<KeepNotes/>);
// reactapicallexp.render(<ApiCallPokemon/>);   
// // // roterexample.render(<BrowserRouter><RouterExamples /></BrowserRouter>);
// // roterexample.render(<BrowserRouter><NavBarRouter /></BrowserRouter>);
// SearchFilter.render(<Search/>);
// CurdOperations.render(<Navlink/>);

ProductDemo.render(<ProductNavLink/>);










reportWebVitals();
