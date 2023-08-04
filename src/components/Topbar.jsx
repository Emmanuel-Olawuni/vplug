import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      <div className="flex text-center bg-black text-white gap-[20px] justify-center font-[500] text-[min(12vw , 2.5rem)] p-3 flex-col md:flex-row leading-tight ">
        <span>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </span>
        <span>
          <Link to="/shop" title="Shop Now" className="underline underline-offset-[5px]">
            {" "}
            Shop Now
          </Link>
        </span>
      </div>
    </>
  );
};

export default Topbar;
