import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateCo(){
    const auth=localStorage.getItem('user');
    return  auth ? <Outlet/>:<Navigate to='/singup'></Navigate>
}

export default PrivateCo;