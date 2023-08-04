import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";

const ProductCard = () => {
    const handleScroll = () => {
        window.scrollBy(50,0)
    }
  return (
    <div>
      <div className="card-container flex flex-col  relative w-[100%] md:w-[30vw] p-5 gap-[20px]">
        <div className="card-image bg-[#f5f5f5] relative group  ">
          <img
            src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
            alt=""
          />
          <div className="absolute bottom-0 w-[100%] cursor-pointer md:hidden group-hover:block bg-black text-white text-center font-medium p-3 duration-150">
            <button>Add to cart</button>
          </div>
        </div>
        <div className="card-details bg-white flex flex-col gap-[12px]">
          <p className="text-[24px] font-semibold ">IPS LCD Gaming Monitor</p>
          <div className="flex">
          <span className="mr-3 text-red-500 font-semibold">$120</span>
          <span className=" line-through font-semibold">$140</span>
          </div>
          <span className="flex gap-2">
            <div className="ratings flex gap-[3px]">
              <BsFillStarFill fill="#FFAD33" />
              <BsFillStarFill fill="#FFAD33" />
              <BsFillStarFill fill="#FFAD33" />
              <BsFillStarFill fill="#FFAD33" />
              <BsFillStarFill fill="#FFAD33" />
            </div>
            <span className="font-semibold">(88)</span>
          </span>
        </div>
        <div className="card-absolute absolute flex flex-col justify-between h-[100px] right-10 top-12">
          <FaRegHeart className="card-icon" />
          <AiOutlineEye className="card-icon" onClick={handleScroll}/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
