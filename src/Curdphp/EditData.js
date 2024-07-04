import React, { useState,useEffect  } from 'react'
import { TextField } from '@material-ui/core';
import Error from './Error';
import Success from './Success';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function EditData({ data, user_id }) {
    const navigate = useNavigate();
    const [result ,setResult] = useState({status_id : '',message : ''});
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        mobile: '',
        department: '',
        date: ''
    });

    useEffect(() => {
    if (data) {
        setFormData(data);
    }
    }, [data]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        async function sendData() {
            try {
                console.log('tarun page id :'+user_id)
            const  response = await axios.post(`http://localhost/demoreactexample/Curd_Api/update.php?id=${user_id}`, formData);
            setResult({
                status_id: response.data.status_id,
                message: response.data.message
            });
            
            if (response.data.status_id === 1) {
                setTimeout(() => {
                    navigate('/');
                }, 300); 
              }
            } catch (error) {
              console.error('There was an error!', error);
            }
          }
          
          sendData();
    };



  return (
    <>
        {(result.status_id === 2 || result.status_id === 0)? <Error massage = {result.message}/> : null}
        {(result.status_id === 1)? <Success massage = {result.message}/> : null}
        <div className='curd_contanier'>
            <h1>Edit User From</h1>
            <form onSubmit={handleSubmit}>
                <TextField required  id="outlined-required" label="First Name"  value={formData.fname}      name="fname"      variant="outlined"  onChange={handleInputChange}  type="text"  className="curd_from_cs"  /><br/><br/>
                <TextField required  id="outlined-required" label="Last Name"   value={formData.lname}      name="lname"      variant="outlined"  onChange={handleInputChange}  type="text"  className="curd_from_cs"  /><br/><br/>
                <TextField required  id="outlined-required" label="Email"       value={formData.email}      name="email"      variant="outlined"  onChange={handleInputChange}  type="email" className="curd_from_cs"  /><br/><br/>
                <TextField required  id="outlined-required" label="Contact No." value={formData.mobile}     name="mobile"     variant="outlined"  onChange={handleInputChange}  type="text"  className="curd_from_cs"  /><br/><br/>
                <TextField required  id="outlined-required" label="Department"  value={formData.department} name="department" variant="outlined"  onChange={handleInputChange}  type="text"  className="curd_from_cs"  /><br/><br/>
                <button className="button" type="submit">Update</button>
            </form>
        </div>
    </>
  );
}

export default EditData;
