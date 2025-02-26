import React, { useEffect } from 'react'
import {useSelector} from "react-redux";
import CartItem from '../components/CartItem';
import {useDispatch} from "react-redux";
import {useState} from "react";
import {clear} from "../Redux/Slices/CartSlice";
import {NavLink, useNavigate} from "react-router-dom";

const Cart = () => {
   const { cart } = useSelector((state) => state.cart);
   const [totalAmount,setTotalAmount]=useState(0);
   const Navigate=useNavigate();
   const dispatch = useDispatch();
   useEffect( () => { 
      setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
    }, [cart])
   
  return (
    <div>
      {
         cart.length ==0 ?
         (<div><h1>No items in cart</h1>
         <NavLink to="/">
            <button>Go to Home</button>
         </NavLink></div>)
         :
         <div>
            <div>
               {
                  cart.map( (item,index) => {
                     return <CartItem key={item.id} item={item} itemIndex={index} />
                  } )
               }
            </div>
            <div>
               <p>Your Cart</p>
               <p>Summary</p>
               <p><span>
                  Total Items: {cart.length}   
               </span></p>
               <div>
                  <p>Total Amount: ${totalAmount.toFixed(2)}</p>
                  <button>CheckOut</button>
               </div>
            </div>
         </div>
      }
      
    </div>
  )
}

export default Cart
