import React from "react";
import Propsdemo from './Propsdemo.jsx';
import data from './PropsArray.jsx';
import { Headingpropsname } from './Propsdemo.jsx';
function Propstest(){
    return (
        <>
        <Headingpropsname heading = "Props Example"/>
        <div className='container'>
          <Propsdemo imagename="image 1" headingName="Image  1" imrUrl = "https://picsum.photos/id/10/200"/>
          <Propsdemo imagename="image 2" headingName="Image  2" imrUrl = "https://picsum.photos/id/13/200"/>
          <Propsdemo imagename="image 3" headingName="Image  3" imrUrl = "https://picsum.photos/id/18/200"/>
          <Propsdemo imagename="image 4" headingName="Image  4" imrUrl = "https://picsum.photos/id/17/200"/>
          <Propsdemo imagename="image 5" headingName="Image  5" imrUrl = "https://picsum.photos/id/16/200"/>
          <Propsdemo imagename="image 6" headingName="Image  6" imrUrl = "https://picsum.photos/id/15/200"/>
        </div>
    
        <Headingpropsname heading ="Props Example With Array" />
        <div className='container'>
          <Propsdemo imagename={data[0]['image_name']} headingName={data[0]['image_Heading']} imrUrl = {data[0]['image_path']}/>
          <Propsdemo imagename={data[1]['image_name']} headingName={data[1]['image_Heading']} imrUrl = {data[1]['image_path']}/>
          <Propsdemo imagename={data[2]['image_name']} headingName={data[2]['image_Heading']} imrUrl = {data[2]['image_path']}/>
          <Propsdemo imagename={data[3]['image_name']} headingName={data[3]['image_Heading']} imrUrl = {data[3]['image_path']}/>
          <Propsdemo imagename={data[4]['image_name']} headingName={data[4]['image_Heading']} imrUrl = {data[4]['image_path']}/>
          <Propsdemo imagename={data[5]['image_name']} headingName={data[5]['image_Heading']} imrUrl = {data[5]['image_path']}/>
        </div>
    
        <Headingpropsname heading ="Props Example With Array MAP and Fat Arrow Function" />
        <div className='container'>
          {data.map(function cards(val){  return(<Propsdemo  key={val.id} imagename= {val.image_name} headingName={val.image_Heading} imrUrl = {val.image_path}/>  );})}
          
          {data.map((val , index) =>{  return(<Propsdemo key={val.id} imagename= {val.image_name} headingName={val.image_Heading} imrUrl = {val.image_path}/>  );})}
        </div>
      </> 
      
    );
}
export default Propstest;