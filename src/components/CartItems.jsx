import React from "react";
import TestImage from "../assets/hero.png";
const CartItems = () => {
  return (
    <div className="h-[200px] overflow-auto">
      <div className="flex h-[100px] flex-col">
        <img
          src={TestImage}
          alt=""
          className="w-[70px] h-[100px] object-contain"
        />
        <div className="flex flex-col">
          <h4 className="font-bold text-[17px]">Shoes </h4>
          <p className="text-[13px]">2 x $145</p>
        </div>
      </div>
      <div className="flex h-[100px] flex-col">
        <img
          src={TestImage}
          alt=""
          className="w-[70px] h-[100px] object-contain"
        />
        <div className="flex flex-col">
          <h4 className="font-bold text-[17px]">Shoes </h4>
          <p className="text-[13px]">2 x $145</p>
        </div>
      </div>
      <div className="flex h-[100px] flex-col">
        <img
          src={TestImage}
          alt=""
          className="w-[70px] h-[100px] object-contain"
        />
        <div className="flex flex-col">
          <h4 className="font-bold text-[17px]">Shoes </h4>
          <p className="text-[13px]">2 x $145</p>
        </div>
      </div>
      <div className="flex h-[100px] flex-col">
        <img
          src={TestImage}
          alt=""
          className="w-[70px] h-[100px] object-contain"
        />
        <div className="flex flex-col">
          <h4 className="font-bold text-[17px]">Shoes </h4>
          <p className="text-[13px]">2 x $145</p>
        </div>
      </div>
      <div className="flex h-[100px] flex-col">
        <img
          src={TestImage}
          alt=""
          className="w-[70px] h-[100px] object-contain"
        />
        <div className="flex flex-col">
          <h4 className="font-bold text-[17px]">Shoes </h4>
          <p className="text-[13px]">2 x $145</p>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
