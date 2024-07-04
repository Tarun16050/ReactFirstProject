import React, { useEffect, useState } from 'react';
import './indexcss.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Mainpage = () => {
    const [message, setMessage]= useState('');

    const [product,setProduct] = useState([]);

    // const [product, setProduct] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(()=>{
      
        getRecord();
    },[]);

    const getRecord = ()=>{
        fetch("http://localhost/demoreactexample/src/Product/API/index.php")
        .then(res=>{return res.json()})
        .then(data=>{setProduct(data)})
        .catch(error=>{console.log(error)});
    }


      const handleDelete = (id) => {
        if(window.confirm("Are You Sure Delete the Record")){
            async function fetchData() {
                const response = await axios.get(`http://localhost/demoreactexample/src/Product/API/delete.php/${id}`);
                alert('Record deleted successfully.');
                window.location.reload();
            }
            fetchData();
        }
    };

    const handleSelect = (id) => {
        setSelectedProducts(prevSelectedProducts =>
            prevSelectedProducts.includes(id)
                ? prevSelectedProducts.filter(productId => productId !== id)
                : [...prevSelectedProducts, id]
        );
    };

    const handleDeleteSelected = () => {
        if (selectedProducts.length === 0) {
            alert("Please select at least one record to delete.");
            return;
        }
        if (window.confirm("Are you sure you want to delete the selected records?")) {
            async function fetchData() {
                try {
                    await Promise.all(selectedProducts.map(id => 
                        axios.get(`http://localhost/demoreactexample/src/Product/API/delete.php/${id}`)
                    ));
                    alert('Records deleted successfully.');
                    window.location.reload();
                } catch (error) {
                    console.log(error);
                }
            }
            fetchData();
        }
    };



    const handleSelectAll = (e) => {
        if (e.target.checked) {
            const allProductIds = product.map(p => p.id);
            setSelectedProducts(allProductIds);
        } else {
            setSelectedProducts([]);
        }
    };

    return (
        <div className='productdemofrom'>
            <h3>List of Product </h3>
            <button className="btn btn-danger m-4" onClick={handleDeleteSelected}>Delete</button>
            <table>
                <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                onChange={handleSelectAll}
                                checked={selectedProducts.length === product.length && product.length > 0}
                            />
                        </th>
                        <th>S.No</th>
                        <th>Category Name</th>
                        <th>Category Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { product?
                        product.map((datas, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={selectedProducts.includes(datas.id)}
                                        onChange={() => handleSelect(datas.id)}
                                    />
                                </td>
                                <td>{index + 1}</td>
                                <td>{datas.categoryName}</td>
                                <td><img src={`http://localhost/demoreactexample/src/Product/images/${datas.categoryImage}`} alt={datas.categoryName} width="100" height="50" /></td>
                                <td>
                                    <Link to={`/editCategory/${datas.id}`} className='btn btn-success mx-2'>Edit</Link>
                                    <button className="btn btn-danger" onClick={ ()=>handleDelete(datas.id)}>Delete</button>
                                </td>
                            </tr>
                        )) 
                        :  <tr><td colSpan={5} style={{textAlign:'center'}}>empty records</td></tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Mainpage;
