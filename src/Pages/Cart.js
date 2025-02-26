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
    <div className="max-w-[1200px] mx-auto">
      {
        cart.length === 0 ? 
        (
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-gray-700 font-semibold text-xl mb-2">Your cart is empty!</h1>
            <NavLink to="/">
              <button className="uppercase bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-3 rounded-lg tracking-wider">
                Shop Now
              </button>
            </NavLink>
          </div>
        ) :
        (
          <div className="min-h-[80vh] flex flex-col lg:flex-row justify-center">
            <div className="w-full lg:w-[60%] flex flex-col p-2">
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>
            <div className="w-full lg:w-[40%] mt-5 lg:mt-0 h-[500px]">
              <div className="flex flex-col p-5 gap-5 my-14 h-[100%] justify-between mx-5">
                <div className="flex flex-col gap-5">
                  <p className="font-semibold text-xl text-green-800">Your Cart</p>
                  <p className="font-semibold text-2xl text-green-700">Summary</p>
                  <p className="font-semibold text-xl text-slate-700">
                    Total Items: {cart.length}
                  </p>
                </div>

                <div className="flex flex-col">
                  <p className="font-bold text-xl text-slate-700">
                    Total Amount: <span className="text-green-600">${totalAmount.toFixed(2)}</span>
                  </p>
                  <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg mt-5 w-full">
                    Checkout Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Cart
