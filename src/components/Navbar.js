import React from 'react'
import {NavLink} from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

import Logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-[50px] bg-slate-800 text-white'>
      <div>
           <NavLink to="/"><img src={Logo} alt="logo" /></NavLink>
      </div>
      <div>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/cart"><FaCartShopping /></NavLink>
      </div>
    </div>
  )
}

export default Navbar
