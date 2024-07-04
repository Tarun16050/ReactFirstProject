import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Error from './Error';
import Success from './Success';
import { useLocation, useParams } from 'react-router-dom';
import EditData from './EditData';

const Edit = () => {
  const location = useLocation();
  const path = location.pathname;
  const id = path.split('/').pop();
  const [data ,setData] = useState();
  const [ids,setIds] = useState();
 

  useEffect(()=>{ getUser(id); setIds(id);},[id]);
    async function getUser(id) {
      try {
          const res = await axios.get(`http://localhost/demoreactexample/Curd_Api/edit.php?id=${id}`);
          setData(res.data);
      }
      catch (error) {
          console.error('Error fetching data:', error);
      }
  } 

  return (
    <> 
       <EditData data = {data} user_id={ids} />
    </>
  )
}

export default Edit;
