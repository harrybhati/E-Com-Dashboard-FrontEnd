import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SingIn(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

// this is used for the when user is login but when user enter the url of singin then still user can go for that but bcz of this code user can't 
    useEffect(()=>{
        const auth=localStorage.getItem('user');

        if (auth){
            navigate('/');
        }
    },[])

function Sub(e){
    axios.post("http://localhost:5000/login",{
        Email:email,
        password:password
    }).then(resp=>{
        // it will allow ony if user is True;
        if(resp.data.Email){
            localStorage.setItem('user',JSON.stringify(resp.data));
            navigate('/');
        }else{
            alert("Enter Wrong")
        }
        
    }).catch(err=>{
        console.log(err);
       
    })
    
}

    return(
        <>
        <h1> LogIn</h1>
        <input onChange={(e)=>setEmail(e.target.value)} className="inputBox"  type="text" placeholder="Enter Email"></input>
        <input  onChange={(e)=>setPassword(e.target.value)}className="inputBox" type="password" placeholder="Enter Password"></input>

        <button onClick={Sub}> LogIn</button>
        
        
        
        </>
    )
}
export default SingIn;