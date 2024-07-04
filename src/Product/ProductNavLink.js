import React from 'react';
import { Headingpropsname } from '../Propsdemo';
import Mainpage from './Mainpage';
import AddCategory from './AddCategory';
import AddProduct from './AddProduct';
import ProductList  from './ProductList';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import EditProduct from './EditProduct';
import EditCategory from './EditCategory';
const ProductNavLink = () => {
    return (<>
         <Headingpropsname heading = "CURD Operations using PHP API and MYSQL database in React JS with Image "/>
        <div>
        <br/>
        <BrowserRouter>
            <div style={{ display: "flex", background: "black", padding: "5px 0 5px 5px", fontSize: "20px", }} >
                <div style={{ margin: "10px" }}>
                    <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "greenyellow" : "white", })} > Category List </NavLink>
                </div>
                <div style={{ margin: "10px" }}>
                    <NavLink to="/productList" style={({ isActive }) => ({ color: isActive ? "greenyellow" : "white", })} > Product List </NavLink>
                </div>
                <div style={{ margin: "10px" }}>
                    <NavLink to="/addCategory" style={({ isActive }) => ({ color: isActive  ? "greenyellow" : "white",  })} > Add Category  </NavLink>
                </div>
                <div style={{ margin: "10px" }}>
                    <NavLink to="/addProduct" style={({ isActive }) => ({  color: isActive  ? "greenyellow"  : "white",  })} > Add product </NavLink>
                </div>
            </div>
            <Routes>
                <Route exact path="/" element={<Mainpage />} />
                <Route exact path="/addCategory" element={<AddCategory />} />
                <Route exact path="/addProduct" element={<AddProduct />} />
                <Route exact path="/productList" element={<ProductList />} />
                <Route exact path="/editCategory/:id" element={<EditCategory />} />
            </Routes>
        </BrowserRouter>
        </div>
    </>
    );
}

export default ProductNavLink;
