import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {add,remove} from "../Redux/Slices/CartSlice";
import {toast} from "react-hot-toast";



const Products = (props) => {
   const dispatch=useDispatch();
   const data= props.data;
   const {cart} = useSelector((state)=>state.cart);

   const addToCart = () => {
      dispatch(add(data));
      toast.success("Item added to Cart");
   }
   const removeFromCart = () => {
      dispatch(remove(data.id));
      toast.error("Item removed from Cart");
   }

   const isItemInCart = cart.find((item)=>item.id===data.id);

  return (
    <div>
      <div>
         <h2>{data.title}</h2>
      </div>

      <div>
         <p>{data.description.length>100? `${data.description.substring(0,100)}...` :data.description}</p>
      </div>

      <div>
         <img src={data.image} alt={data.title}/>
      </div>

      <div>
         <div><p>${data.price}</p></div>
         <div>
            {
               isItemInCart ? <button onClick={removeFromCart}>Remove Item</button>
               : <button onClick={addToCart}>Add to Cart</button>
            }
         </div>
      </div>
      
    </div>
  )
}

export default Products
