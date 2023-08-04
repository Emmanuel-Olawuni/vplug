import React from "react";

const Button = ({ text }) => {
  return (
    <>
      <button className=" bg-red-500 p-3 text-[16px] text-[#fafafa] md:text-[18px] rounded-[5px] md:h-[3.5vw] md:w-[auto] hover:bg-white hover:border-red-500 hover:text-red-500 duration-200 hover:border">
        {text}{" "}
      </button>
    </>
  );
};

export default Button;
