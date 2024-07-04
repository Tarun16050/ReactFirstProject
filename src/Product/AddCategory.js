import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Success from './Success';
import Error from './Error';

const AddCategory = () => {
    const [data ,setData] = useState({status_id : '',message : ''});
    const [input,setInput] = useState({categoryName: '',filename: ''});
    const [errors, setErrors] = useState({categoryName: '', filename: '' });
    const [message,setMessage] = useState('');
    const [status,setStatus] = useState(0);
    const navigate = useNavigate();
    // var status = 0;
    const validate = (name, value) => {
        switch (name) {
          case 'categoryName':
            if (!value) {
              return 'Category Name is required';
            } else if (value.length <= 2) {
              return 'Category Name must be at least 3 characters';
            }
            return '';
          case 'filename':
            if (!value) {
                return 'File is required';
              } else if (value && !['image/jpeg', 'image/png', 'image/gif'].includes(value.type)) {
                return 'Only image files (jpeg, png, gif) are allowed';
              }
            return '';
          default:
            return '';
        }
      };

      const inputEvent = (e) => {
        const { name, value, files } = e.target;
        const file = files ? files[0] : null;

        setInput((prevInput) => ({
            ...prevInput,
            [name]: file || value,
        }));

        const errorMessage = validate(name, file || value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
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
         const fromdata = new FormData();
         fromdata.append('categoryName',input.categoryName);
         fromdata.append('fileName',input.filename);
         async function setData(){
         const response = await axios.post("http://localhost/demoreactexample/src/Product/API/index.php",fromdata,{headers:{"Content-Type":"multipart/form-data"},});
     
        if(response.data.success){
           setMessage(response.data.success);
           setStatus(1);
            setTimeout(() => {
                navigate('/');
            }, 300); 
        }
        else if(response.data.error){
           setMessage(response.data.error);
           setStatus(2);

        }
        else if(response.data.dataEmpty){
           setMessage(response.data.dataEmptvar );
           setStatus(3);
        }

        
    }
    setData();}
    };



    return ( 
        <>
            
            {(status === 2 || status === 3)? <Error massage = {message}/> : null}
            {(status === 1)? <Success massage = {message}/> : null}
            <div className='productdemofrom'>
            <h3>Add category </h3>
            <form onSubmit={submitFrom} >
            <TextField id="outlined-required" label="Category Name"   value={input.categoryName}   name ="categoryName"   error={!!errors.categoryName}      helperText={errors.categoryName}    variant="outlined"  type='text'   className="curd_from_cs"  autoComplete='off'  onChange={inputEvent}   /><br/><br/>
            
            <div class="custom-file-upload">
                Choose a File
                <input type="file" id="fileInput" class="file-input"  name="filename" onChange={inputEvent}  />
                {errors.filename && <span className="error-text">{errors.filename}</span>}
            </div>

            <button className="buttons buttons2">Submit</button>

            </form>
            </div>
        </>
    );
}

export default AddCategory;
