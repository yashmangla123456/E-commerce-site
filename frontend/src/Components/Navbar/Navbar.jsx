import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import car_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    const [menu,setmenu]=useState("shop");
  return (
    <div className='navbar' style={{ padding:5 }}>
    <Link to="/" style={{textDecoration:'none'}}>
        <div className='nav-logo' >
            <img src={logo} alt=""/>
            <p >SHOPPER</p>
            </div>
            </Link>
        
        <ul className='nav-menu'>
            <li onClick={()=>{setmenu("shop")}}> <Link to='/' style={{textDecoration:"none"}}>Shop</Link> { menu==="shop"?<hr/>:<div></div>}</li>
            <li onClick={()=>{setmenu("mens")}}><Link to='/mens' style={{textDecoration:"none"}}>Men</Link> {menu==="mens"?<hr/>:<div></div>}</li>
            <li onClick={()=>{setmenu("women")}}><Link to='/womens' style={{textDecoration:"none"}}>Women</Link> {menu==="women"?<hr/>:<div></div>}</li>
            <li onClick={()=>{setmenu("kids")}}><Link to='/kids' style={{textDecoration:"none"}}>Kids</Link> {menu==="kids"?<hr/>:<div></div>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login' style={{textDecoration:"none"}}><button>Login</button></Link>
            <Link to='/cart' style={{textDecoration:"none"}}><img src={car_icon} alt=""/></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
