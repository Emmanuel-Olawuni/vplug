import React from "react";

const Size = ({ handler, currentSize, handleChange }) => {
  const SizeValue = ["XXL", "XL", "L", "S", "M"];

  return (
    <>
      {SizeValue.map((value, i) => (
        <button
          key={i}
          className=" border border-red-500 p-1 rounded-[10px] w-[40px] h-[30px]"
          onClick={() => handler(`${value}`)}
          style={{ background: value === currentSize ? "#db4444" : "#fff" }}
          onChange={handleChange}
          value={value}
        >
          {value}
        </button>
      ))}
    </>
  );
};

export default Size;
