import React from 'react'
import {FcDeleteDatabase} from "react-icons/fc"
import {useDispatch} from "react-redux"
import {remove} from "../Redux/Slices/CartSlice"
import { toast } from "react-hot-toast";

const CartItem = ({item,itemIndex}) => {
   const dispatch=useDispatch();
   const removeFromCart = () => {
      dispatch(remove(item.id));
      toast.error("Item removed from cart");
   }
  return (
    <div className="flex items-center p-5 justify-between mt-2 mb-2 mx-5 border-b-2 border-slate-500">
      <div className="flex p-3">
          <img src={item.image} alt={item.title} className="h-28 rounded-lg" />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
            <h1 className="text-base text-slate-700">{item.description}</h1>
            <div className="flex items-center justify-between">
              <p className="font-bold text-lg text-green-600">${item.price}</p>
              <div className="text-red-800 bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3">
                <button onClick={removeFromCart}>
                  <FcDeleteDatabase/>
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CartItem
