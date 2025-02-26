import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const Products = (props) => {
  const dispatch = useDispatch();
  const data = props.data;
  const { cart } = useSelector((state) => state.cart);

  const addToCart = () => {
    dispatch(add(data));
    toast.success("Item added to Cart");
  };
  const removeFromCart = () => {
    dispatch(remove(data.id));
    toast.error("Item removed from Cart");
  };

  const isItemInCart = cart.find((item) => item.id === data.id);

  return (
    <div
      className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline"
    >
      <div>
        <h2 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {data.title}
        </h2>
      </div>

      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {data.description.length > 100
            ? `${data.description.substring(0, 100)}...`
            : data.description}
        </p>
      </div>

      <div className="h-[180px]">
        <img className="h-full w-full " src={data.image} alt={data.title} />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${data.price}</p>
        </div>
        <div>
          {isItemInCart ? (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
               text-[12px] p-1 px-3 uppercase 
               hover:bg-gray-700
               hover:text-white transition duration-300 ease-in"
              onClick={removeFromCart}
            >
              Remove Item
            </button>
          ) : (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
               text-[12px] p-1 px-3 uppercase 
               hover:bg-gray-700
               hover:text-white transition duration-300 ease-in"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
