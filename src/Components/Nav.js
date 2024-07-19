import React from "react";
import { Link,json,useNavigate } from "react-router-dom";



function Nav(){
    const navigate=useNavigate();
    const auth=localStorage.getItem('user');

    /// when we click on logout the localstorage should become empty and redirect to sing up page
    function LogOut(){
        localStorage.clear();
        navigate('/singup');
    }
    return(
        <>
       
{
    auth ? <ul className="nav-ul">

    <li>  <Link to='/' > Product</Link></li>    
    <li>  <Link to='/add' >  Add Products</Link> </li>  
    
    <li><Link to='/profile' >  Profile </Link> </li>
    <li><Link  onClick={LogOut} to='/singup' >  LogOut  {JSON.parse(auth).name} </Link> </li>
    </ul>


   
// {/* {//when user is login then user should not get the button of singup and vice-versa.
//    auth ?  <li><Link  onClick={LogOut} to='/singup' >  LogOut {auth}</Link> </li> :
    
// } */}



: <ul className="nav-ul bar">
<li><Link to='/singup' >  SingUp</Link> </li>
    <li>  <Link to='/singin' > LogIn  </Link></li> 
</ul>
    
}
    
   </>
    )

}
export default Nav;