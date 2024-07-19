import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct(){
    const [name,setname]=useState("");
    const [price,setprice]=useState("");
    const [company,setcompany]=useState("");
    
    const navigate=useNavigate();

    function Sub(e){
        console.log(name,price,company);
        if(!name.length==0 && !price.length==0 && !company.length==0 )
        {
              // local storage is  used to get the user id ,bcz it helps that in under which user this product is add;
        const userId= JSON.parse(localStorage.getItem('user'));
        const Id=userId._id
        axios.post("http://localhost:5000/add-product",{
            // first are from the api and last from the front end 
            name:name,
            price:price,
            company:company,
            userId:Id
        }).then(resp=>{
           // used to navigate when click the  Add Product Button 
            navigate('/');
            // they all are used to screatch the value from these fields
            setname("");
            setprice("");
            setcompany("");
        }).catch(err=>{
            console.log(err);
        })
        }
        else{
            alert("Enter All details")
        }
       
    }
    return(
        <>
        <input onChange={(e)=>setname(e.target.value)}  className="inputBox" type="text" placeholder="Product Name"></input>
        <input  onChange={(e)=>setprice(e.target.value)}  className="inputBox" type="number" placeholder="Product Price"></input>
        <input  onChange={(e)=>setcompany(e.target.value)} className="inputBox" type="text" placeholder="Product Company"></input>

        <button onClick={Sub}> Add Product </button>
        
        
        </>
    )
}
export default AddProduct;