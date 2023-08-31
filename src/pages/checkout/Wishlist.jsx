import React, { useContext } from "react";

import StarRating from "../../components/Star";
import { WishlistContext } from "../../contexts/wishlist.context";
import { CartContext } from "../../contexts/cart.context";
const Wishlist = () => {

  const { wishlistItems } = useContext(WishlistContext);
  const {addItemtoCart} = useContext(CartContext)
 
  return (
   
    <div>
      <div className="card-container flex flex-col  relative w-[100%] md:w-[30vw] p-5 gap-[20px]">
        <div className="card-image bg-[#f5f5f5] relative group  ">
          <img src={image} alt="" />
          <div className="absolute bottom-0 w-[100%] cursor-pointer md:hidden group-hover:block bg-black text-white text-center font-medium p-3 duration-150">
            <button onClick={addProductToCart}>Add to cart</button>
          </div>
        </div>
        <div className="card-details bg-white flex flex-col gap-[12px]">
          <p className="text-[18px] font-semibold card-title ">
            <a href={`/product/${id}`}>{title}</a>
          </p>
          <div className="flex">
            <span className="mr-3 text-red-500 font-semibold">$ {price}</span>
            <span className=" line-through font-semibold">$ {price}</span>
          </div>
          <span className="flex gap-2">
            <div className="ratings flex gap-[3px]">
              <StarRating rating={rating.rate} />
            </div>
            <span className="font-semibold">{rating.count}</span>
          </span>
        </div>
    
      </div>
    </div>
  );
};

export default Wishlist;
