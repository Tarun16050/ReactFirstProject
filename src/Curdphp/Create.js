import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Error from './Error';
import Success from './Success';

const Create = () => {
    const [data ,setData] = useState({status_id : '',message : ''});
    const [input,setInput] = useState({fname: '',lname: '',email:'',mobile:'',department:''});

    // const inputEvent = (event) => {
    //     const value = event.target.value;  
    //     const name = event.target.name;
    //     setInput((oldvalue) => { return{ ...oldvalue,[name]:value, } });
    // };
    const [errors, setErrors] = useState({fname: '', lname: '',email: '', mobile: '', department: '' });
    const validate = (name, value) => {
      switch (name) {
        case 'fname':
          if (!value) {
            return 'First Name is required';
          } else if (value.length < 2) {
            return 'First Name must be at least 2 characters';
          }
          return '';
        case 'lname':
          if (!value) {
            return 'Last Name is required';
          } else if (value.length < 2) {
            return 'Last Name must be at least 2 characters';
          }
          return '';
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!value) {
            return 'Email is required';
          } else if (!emailRegex.test(value)) {
            return 'Email is not valid';
          }
          return '';
        case 'mobile':
          const mobileRegex = /^\d{10}$/;
          if (!value) {
            return 'Contact No. is required';
          } else if (!mobileRegex.test(value)) {
            return 'Contact No. must be 10 digits';
          }
          return '';
        case 'department':
          if (!value) {
            return 'Department is required';
          }
          return '';
        default:
          return '';
      }
    };
  
    const inputEvent = (e) => {
      const { name, value } = e.target;
      setInput((prevState) => ({
        ...prevState,
        [name]: value
      }));
  
      const errorMessage = validate(name, value);
      setErrors((prevState) => ({
        ...prevState,
        [name]: errorMessage
      }));
    };

    const submitFrom = (event) =>{
        event.preventDefault();

        let valid = true;
        let newErrors = {};
    
        for (let key in input) {
          const error = validate(key, input[key]);
          if (error) {
            valid = false;
            newErrors[key] = error;
          }
        }
        setErrors(newErrors);

        if (valid) {
          async function sendData() {
            try {
              const  response = await axios.post('http://localhost/demoreactexample/Curd_Api/inster_data.php', input);
              setData({
                  status_id: response.data.status_id,
                  message: response.data.message
              });
              setInput( {fname: '',lname: '',email:'',mobile:'',department:''});
            } catch (error) {
              console.error('There was an error!', error);
            }
          }
          sendData();
        }
    };
  return (
    <> 
    {(data.status_id === 2 || data.status_id === 0)? <Error massage = {data.message}/> : null}
    {(data.status_id === 1)? <Success massage = {data.message}/> : null}
        <div className='curd_contanier'>
           <h1> User From </h1>
           <form  onSubmit={submitFrom}>
           <TextField id="outlined-required" label="First Name"  value={input.fname}      name ="fname"      variant="outlined" onChange={inputEvent} type='text'   className="curd_from_cs" error={!!errors.fname}      helperText={errors.fname}      /><br/><br/>
           <TextField id="outlined-required" label="Last Name"   value={input.lname}      name ="lname"      variant="outlined" onChange={inputEvent} type='text'   className="curd_from_cs" error={!!errors.lname}      helperText={errors.lname}      /><br/><br/>
           <TextField id="outlined-required" label="Email"       value={input.email}      name ="email"      variant="outlined" onChange={inputEvent} type='email'  className="curd_from_cs" error={!!errors.email}      helperText={errors.email}      /><br/><br/>
           <TextField id="outlined-required" label="Contact No." value={input.mobile}     name ="mobile"     variant="outlined" onChange={inputEvent} type='mobile' className="curd_from_cs" error={!!errors.mobile}     helperText={errors.mobile}     /><br/><br/>
           <TextField id="outlined-required" label="Department"  value={input.department} name ="department" variant="outlined" onChange={inputEvent} type='text'   className="curd_from_cs" error={!!errors.department} helperText={errors.department} /><br/><br/>
            <button className="button" type="submit">Submit</button>
            </form>
        </div>
    </>
  )
}

export default Create;
