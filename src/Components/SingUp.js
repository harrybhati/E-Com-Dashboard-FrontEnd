import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




function SingUp(){
    const[name,setname]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    // when user is login the user should not be able to redirect to the singup page
    useEffect(()=>{
        const auth=localStorage.getItem('user');

        if (auth){
            navigate('/');
        }
    })

    const navigate=useNavigate();



    function Sub(e){
        console.log(name,email,password)
        axios.post("http://localhost:5000/register",{
            name:name,
            Email:email,
            password:password
        }).then(resp=>{
            console.log(resp);
            localStorage.setItem('user',JSON.stringify(resp.data))
            navigate('/')
        }).catch(err=>{
            console.log(err);
        })
    }
    return(

       
       <div className="register">
      <h1> Register</h1>
        <input  onChange={(e)=>setname(e.target.value)} className="inputBox" type="text" placeholder="Enter your name"></input>
        <input onChange={(e)=>setEmail(e.target.value)} className="inputBox" type="text" placeholder="Enter email name"></input>
        <input  onChange={(e)=>setPassword(e.target.value)} className="inputBox" type="password" placeholder="Enter password name"></input>

        <button onClick={Sub}>SingUp</button>


       </div>
       
        
       
    )
}
export default SingUp;