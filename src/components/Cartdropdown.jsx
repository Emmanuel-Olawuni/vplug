import React, { useContext } from "react";
import CartItems from "./CartItems";
import { useNavigate} from 'react-router-dom'
import { CartContext } from "../contexts/cart.context";
const Cartdropdown = () => {
  const { cartItems } = useContext(CartContext);
  const Navigate = useNavigate();
  const goTo = () => Navigate('/checkout')

  return (
    <div className="absolute bg-white top-[30px] p-4 right-[10px] z-20 text-black border border-black rounded-[5px] shadow-2xl w-[200px]">
      <div className="h-[200px] overflow-auto">
    
        {cartItems.map((cartItem) => (
          <CartItems key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <a className=" bg-red-500 p-2 text-white rounded-[5px] font-semibold text-[16px] cursor-pointer" onClick={goTo} > Go To Cart</a>
    </div>
  );
};

export default Cartdropdown;
