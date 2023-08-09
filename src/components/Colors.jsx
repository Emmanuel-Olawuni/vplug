import React from "react";

const Colors = () => {
  const colors = ["red", "green"];
  return (
    <>
    {
        colors.map((color) => (

            <div className="color_circle bg-[color]"></div>
        ))
    }
      
    </>
  );
};

export default Colors;
