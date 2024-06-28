import React, { useState } from 'react';
import { Headingpropsname } from '../Propsdemo';
import Searchreslt from './searchreslt';
import { blue } from '@material-ui/core/colors';

const Search = () => {
    const [img, setimg] = useState();
    const InputEvents = (e) =>{const data =  e.target.value; setimg(data);};
    return (
        <>
            <Headingpropsname heading = "Search Filter Exampla"/>
            <br/>
            <div className='searchbar'>
            <p style={{color:'blue',fontSize:'20px'}}>Please type the numbers from 1 to 999 and find a wonderful picture </p><br/>
                <input type='text' placeholder='Search Anything ' className='input_from_cs' autoComplete='off' onChange={InputEvents} value={img}/>
            </div>
            {img === "" ? <Searchreslt names="1" /> : <Searchreslt names={img}/> }
            
        </>
    );
}

export default Search;
