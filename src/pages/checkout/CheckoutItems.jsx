import React, { useContext } from "react";
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItems = ({ cartItem }) => {
  const { image, title, price, quantity } = cartItem;
  const {addItemtoCart} = useContext(CartContext)
  const Increment =() => addItemtoCart(cartItem);
  return (
    <>
      <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
        <td className="whitespace-nowrap px-6 py-4 font-medium">
          <img
            src={image}
            alt=""
            className="w-[50px] h-[40px] object-contain"
          />{" "}
          {title}
        </td>
        <td className="whitespace-nowrap px-6 py-4">${price}</td>
        <td className="whitespace-nowrap px-6 py-4">
          <div className="flex gap-[10px] items-center">
            <AiOutlineMinus /> <p>{quantity}</p>
            <AiOutlinePlus onClick={Increment} />
          </div>
        </td>
        <td className="whitespace-nowrap px-6 py-4">$190</td>
        <td className="whitespace-nowrap px-6 py-4">{AiFillDelete}</td>
      </tr>
    </>
  );
};

export default CheckoutItems;
