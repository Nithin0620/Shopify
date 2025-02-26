import React from 'react'
import {NavLink} from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Logo from "../Assets/logo.png";
import {useLocation} from "react-router-dom";


const Navbar = () => {
   const {cart} = useSelector((state) => state.cart);
   const location = useLocation();

  return (
    <div className='flex justify-between items-center h-[60px] pl-8 pr-8 bg-slate-800 text-white'>
      <div>
           <NavLink to="/"><img className="h-12 ml-5" src={Logo} alt="logo" /></NavLink>
      </div>
      <div className="flex items-center font-medium text-slate-100 mr-5 ease-in-out space-x-6">
         <NavLink to="/" className={`${location.pathname === "/" ? "text-green-600 border-b-2 border-red-900 animate-pulse" : ""} transition-all duration-300 ease-in-out`}>Home</NavLink>
         
         <NavLink to="/cart" className={`${location.pathname === "/cart" ? "text-green-600 border-b-2 border-red-900 animate-pulse" : ""} transition-all duration-300 ease-in-out relative`}>
            <FaCartShopping />
            {
               cart.length > 0 && 
               <span className="absolute -top-2 -right-2 bg-green-600 text-xs w-5 h-5 flex 
               justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
            }
         </NavLink>
         
         
      </div>
    </div>
  )
}

export default Navbar
