import React from "react";

const Size = ( {handler , currentSize} ) => {
  const SizeValue = ["XXL", "XL", "L", "S", "M"];
 
  
  return (
    <>
    {
        SizeValue.map((value , i) => (
            <button key={i} className=" border border-red-500 p-1 rounded-[10px] w-[40px] h-[30px]" onClick={()=>handler(`${value}`)} style={{background: value === currentSize ? '#db4444' : '#fff' }}>
            {value}
          </button>
        ))
    }
      
    </>
  );
};

export default Size;
