import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TableData from './TableData';

const Home = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('http://localhost/demoreactexample/Curd_Api/list_data.php');
                setData(res.data); 
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        } 
        
        fetchData();
    }, []);
   const  array = JSON.stringify(data, null, 2);

  return (
    <>
        <TableData rows={array} />
    </>
  )
}

export default Home;
