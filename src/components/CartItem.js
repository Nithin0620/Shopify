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
    <div>
      <div>
          <img src={item.image} alt={item.title} />
      </div>
      <div>
         <h1>{item.title}</h1>
         <h1>{item.description}</h1>
         <div>
            <p>${item.price}</p>
            <div>
               <button onClick={removeFromCart}><FcDeleteDatabase/></button>
            </div>
         </div>

        </div>
    </div>
  )
}

export default CartItem
