import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart, FaAlignJustify } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="flex md:flex-row justify-between md:justify-around relative gap-[12px] p-4 mt-2  md:m-3  md:items-center  border-b border-[#f5f5f5] ">
        <div className=" text-[22px] font-extrabold"> EXCLUSIVE</div>
        <div className=" hidden md:flex  font-[400] text-[min(12vw , 2.5rem)] gap-[12px] md:gap-[40px] ">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/shop" className="hover:underline">
            Shop
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/sign-up" className="hover:underline">
            SignUp
          </Link>
        </div>
        <div className="hidden md:flex">
          <div className="input-wrapper relative flex gap-[2vw] items-center justify-between px-3">
            <div className="relative">
              <input
                placeholder="What are you looking for ?"
                className=" h-[40px] rounded-[7px] bg-[#f5f5f5]  w-[100%] md:w-[20em] p-2 focus:outline-none "
              />
              <CiSearch
                className="absolute top-2 right-2 cursor-pointer"
                color="#000"
                size={23}
                fontWeight={900}
              />
            </div>
            <FaRegHeart size={23} cursor="pointer" title="Wishlist" />
            <BsCart3 size={23} fontWeight={900} cursor="pointer" title="Cart" />
          </div>
        </div>
        <div className="flex md:hidden">
          <FaAlignJustify onClick={toggle} size={25} />
        </div>
        {open && (
          <div className="menu absolute top-[4em]  flex items-center justify-around flex-col gap-[5vw] shadow-xl rounded-[10px] bg-[#fff] w-[100%] py-[20px] z-10 ">
            <div className="flex flex-row gap-[2em]">
              <Link to="/">Home</Link>
              <Link to="/shop" >
            Shop
          </Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
              <Link to="/sign-up">SignUp</Link>
            </div>
            <div className="input-wrapper relative flex gap-[2vw] items-center justify-between px-3 flex-col">
              <div className="relative">
                <input
                  placeholder="What are you looking for ?"
                  className=" h-[40px] rounded-[7px] bg-[#f5f5f5]  w-[100%] md:w-[20em] p-2 focus:outline-none "
                />
                <CiSearch
                  className="absolute top-2 right-2 cursor-pointer"
                  color="#000"
                  size={23}
                  fontWeight={900}
                />
              </div>
              <div className="flex gap-[12vw]">
                <FaRegHeart size={23} />
                <BsCart3 size={23} fontWeight={900} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
