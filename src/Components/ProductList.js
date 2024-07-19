import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProductList() {
  // use to store the data from the Api
  const [listA, setList] = useState([]);
  const navigate=useNavigate();

  // used to call Api

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []); // Empty dependency array ensures useEffect runs once
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/product-get");
      // set data from api to  ListA 
      setList(response.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };
// Calling the search Api 
const Search=async(e)=>{
  // here key means what we are searching 
  let key=e.target.value;
  if(key){
    const SearchApi=await axios.get(`http://localhost:5000/product-search/${key}`);
    console.log(SearchApi)
    if(SearchApi){
      // if we have the key value in our list then render the list 
      setList(SearchApi.data)

    }

  }else{
   // if we  dont have the key value in our list then all list 
    fetchData();
  }
  
    
 
}
  
 const DelPro = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/product-del/${id}`).then(response=>{
        console.log(response.data); // Log the response from the server after delete

      // Update listA state after successful deletion
      setList(listA.filter(item => item._id !== id));
      navigate('/');

      })
      

      // 
    } catch (error) {
      console.log("Error deleting product:", error);
    }
  };
  return (
    <div className="table-container">
      <h2>Product List</h2>
      <input className="search" type="" onChange={Search} placeholder="Search Product "></input>
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
          Array.isArray(listA) && listA.length>0 ?
          (
            listA.map((item, key) => (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.company}</td>
               <td className="Ram">
                <button onClick={()=>{DelPro(item._id)}} > Delete </button>
                <Link  style={{fontSize:"25px",textDecoration:"none"}} to={'/update/'+item._id}> Update</Link>
               </td>
              </tr>
            ))
          )
          
          :(
            <tr>
              <td colSpan="4">No Results Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
