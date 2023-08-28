import React from "react";

const Colors = () => {
  const colors = ["red", "green"];
  return (
    <>
    {
        colors.map((color , i) => (

            <div key={i} className="color_circle bg-[color]"></div>
        ))
    }
      
    </>
  );
};

export default Colors;
