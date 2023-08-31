import React from "react";

const Colors = ({handleChange}) => {
  const colors = ["red", "green"];
  return (
    <>
    {
        colors.map((color , i) => (

            <div key={i} className="color_circle bg-[color]" name="color" value={color} onChange={handleChange}></div>
        ))
    }
      
    </>
  );
};

export default Colors;
