import React from 'react';
import './App.css';
import Nav  from './Components/Nav';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Footer from './Components/Footer';
import SingUp from './Components/SingUp';
import PrivateCo from"./Components/PrivateCo";
import LogOut from './Components/LogOut';
import SingIn from './Components/SingIn';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import UpdList from './Components/UpdList';
import Profile from './Components/Profile';
function App() {

  
  return (
    <>
    
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route element={<PrivateCo/>}>



<Route path='/' element={<ProductList />}></Route>
<Route path='/add' element={<AddProduct/>}></Route>
<Route path='/update/:id' element={<UpdList/>}></Route>
<Route path='/profile' element={<Profile/>}></Route>
<Route path='/logout' element={<LogOut/>}></Route>



</Route>

<Route path='/singup' element={<SingUp/>}></Route>
<Route path='/singin' element={<SingIn/>}></Route>
<Route path='/*' element={<h1> Page not Found </h1>}></Route>




   </Routes>



  
   <Footer/>
   </BrowserRouter>
    </>
    
  )
}

export default App;
