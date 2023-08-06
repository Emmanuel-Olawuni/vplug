import React, { useState } from "react";

const SelectSort = ({ handleChange, value }) => {
  const [category, setCategory] = useState([]);
  return (
    <div className="flex flex-col gap-[2px]">
      Sort By:
      <div className="border border-red-500 p-2 rounded-[10px]">
        {" "}
        <select
          name=""
          id=""
          className="border-none outline-none w-full rounded-none bg-[white]"
          onChange={handleChange}
          value={value}
        >
          <option value="all">ALL</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">women's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
        </select>
      </div>
    </div>
  );
};

export default SelectSort;
