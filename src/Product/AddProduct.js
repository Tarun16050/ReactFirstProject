import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Success from './Success';
import Error from './Error';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { FormControl, MenuItem } from '@material-ui/core';

const AddProduct = () => {
    const [data ,setData] = useState({status_id : '',message : ''});
    const [input,setInput] = useState({productName: '',productDescription : '' ,filename: ''});
    const [errors, setErrors] = useState({productName: '',productDescription : '' ,filename: '' , categoryId: '' });
    const [message,setMessage] = useState('');
    const [status,setStatus] = useState(0);

    const [fetchCategoryName,setfetchCategoryName] = useState([]);
    const [selectedCategoryname, setSelectedCategoryname] = useState('');

    const navigate = useNavigate();
  
    useEffect(()=>{  
        getRecord(); 
    },[]);
    const getRecord = ()=>{
        fetch("http://localhost/demoreactexample/src/Product/API/index.php/")
        .then(res=>{return res.json()})
        .then(data=>{setfetchCategoryName(data)})
        .catch(error=>{console.log(error)});
    }

    const validate = (name, value) => {
        switch (name) {
            case 'productName':
                if (!value) {
                return 'Product Name is required';
                } else if (value.length <= 2) {
                return 'Product Name must be at least 3 characters';
                }
                return '';
            case 'productDescription':
                if (!value) {
                    return 'Product Name is required';
                }
                return '';
            case 'filename':
                if (!value) {
                    return 'File is required';
                } else if (value && !['image/jpeg', 'image/png', 'image/gif'].includes(value.type)) {
                    return 'Only image files (jpeg, png, gif) are allowed';
                }
                return '';
            case 'categoryId':
                if (!value) return 'Category is required';
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
        const categoryError = validate('categoryId', selectedCategoryname);
        if (categoryError) {
            valid = false;
            newErrors.categoryId = categoryError;
        }
        // setErrors(newErrors);
        setErrors(newErrors);

        if (valid) {
         const fromdata = new FormData();
         fromdata.append('productName',input.productName);
         fromdata.append('fileName',input.filename);
         fromdata.append('productDescription',input.productDescription);
         fromdata.append('categoryId', selectedCategoryname);
         console.log(fromdata);
         async function setData(){
         const response = await axios.post("http://localhost/demoreactexample/src/Product/API/product.php",fromdata,{headers:{"Content-Type":"multipart/form-data"},});
        // const response ='';
        if(response.data.success){
           setMessage(response.data.success);
           setStatus(1);
            setTimeout(() => {
                navigate('/productList');
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

// select Filed
    const handleChangeSelect = (event) => {
        const { value } = event.target
        setSelectedCategoryname(value);
        const errorMessage = validate('categoryId', value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            categoryId: errorMessage,
        }));
    };
//   End Select code
    return (
        <>
            
        {(status === 2 || status === 3)? <Error massage = {message}/> : null}
        {(status === 1)? <Success massage = {message}/> : null}
        <div className='productdemofrom'>
        <h3>Add Product </h3>
        <form onSubmit={submitFrom} >
        <TextField id="outlined-required" label="Product Name"   value={input.productName}   name ="productName"   error={!!errors.productName}      helperText={errors.productName}    variant="outlined"  type='text'   className="curd_from_cs"  autoComplete='off'  onChange={inputEvent}   /><br/><br/>
        <TextField id="outlined-required" label="Product Description"   value={input.productDescription}   name ="productDescription"   error={!!errors.productDescription}      helperText={errors.productDescription}    variant="outlined"  type='text'   className="curd_from_cs"  autoComplete='off'  onChange={inputEvent} multiline minRows={4}  /><br/><br/>
        
        <div className="custom-file-upload">
            Choose a File
            <input type="file" id="fileInput" className="file-input"  name="filename" onChange={inputEvent}  />
            {errors.filename && <span className="error-text">{errors.filename}</span>}
        </div> <br/><br/>
        <FormControl fullWidth>
                        <InputLabel id="category-select-label">Category</InputLabel>
                        <Select
                            labelId="category-select-label"
                            value={selectedCategoryname}
                            onChange={handleChangeSelect}
                            label="Category"
                        >
                            {fetchCategoryName?
                                fetchCategoryName.map((category) => (
                                <MenuItem key={category.id} value={category.id}>
                                    {category.categoryName}
                                </MenuItem>
                            )):<MenuItem >"Select Category" </MenuItem>}
                        </Select>
                        {errors.categoryId && <span className="error-text">{errors.categoryId}</span>}
                    </FormControl><br/><br/>
        <button className="buttons buttons2">Submit</button>

        </form>
        </div>
    </>
    );
}

export default AddProduct;
 