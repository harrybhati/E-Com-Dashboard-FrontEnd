import axios from "axios";
import React, { useEffect, useState, } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdList() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [company, setCompany] = useState("");
    const navigate=useNavigate();
    // params is used to get the id when user want to update any filed 
    const params=useParams();
    useEffect(()=>{
        GetList();
    },[])
   const  GetList=async()=>{
        const ListDta=await axios.get(`http://localhost:5000/product/${params.id}`).then(ListDta=>{
            console.log(ListDta.data)
        }).catch(err=>{
            console.log(err);
        })
    }

    const handleSubmit = async (e) => { 
        // to check the details enter are full filling the requirement s
        if(!name.length==0 && !price.length==0 && !company.length==0){
            console.log(name,price,company);
        }
        else{
            alert("Enter the all fields")
        }
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await axios.put(`http://localhost:5000/product-update/${params.id}`, {
                name:name,
                price:price,
                company:company
            }).then(response=>{
                console.log("Update successful:", response.data);  // Handle success (e.g., show a success message)
                navigate('/');

            })
           
           
        } 
        catch (error) {
            console.error("Error updating product:");
            // Handle error (e.g., show an error message)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setName(e.target.value)} className="inputBox" type="text" placeholder="Product Name"></input>
            <input onChange={(e) => setPrice(e.target.value)} className="inputBox" type="number" placeholder="Product Price"></input>
            <input onChange={(e) => setCompany(e.target.value)} className="inputBox" type="text" placeholder="Product Company"></input>

            <button type="submit">Update </button>
        </form>
    );
}

export default UpdList;
