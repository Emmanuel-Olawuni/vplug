import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import StarRating from "./Star";
import { BsHeart } from "react-icons/bs";
import Size from "./Size";
import Colors from "./Colors";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const SingleProduct = () => {
  const [value, setValue] = useState(1);
  const [size, setSize] = useState("");
  const incrementQty = () => {
    setValue(value + 1);
  };
  const decrementQty = () => {
    if (value !== 1 && value > 1) {
      setValue(value - 1);
    } else if (value === 1) {
      setValue(1);
    } else {
      setValue(1);
    }
  };

  const handleSize = (size) => {
    setSize(size);
  };
  const [loading, isLoading] = useState(true);

  const handleWishList = () => {};
  const [singleProduct, setsingleProduct] = useState([]);
  const productId = useParams();
  const id = productId.id;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((product) => {
        isLoading(false);
        setsingleProduct(product);
      });
  }, [id]);

  return (
    <Layout>
      <div className="flex single_product_wrapper gap-[15px] justify-around flex-col md:flex-row p-3">
        <div className="left_col_image_wrapper_container flex flex-row md:flex-col gap-[10px] justify-between md:h-[500px] md:w-[150px]">
          <div className="left_col_image_wrapper">
            <img
              src="https://images.unsplash.com/photo-1532618793091-ec5fe9635fbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="left_col_image_wrapper">
            <img
              src="https://images.unsplash.com/photo-1532618793091-ec5fe9635fbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="left_col_image_wrapper">
            <img
              src="https://images.unsplash.com/photo-1532618793091-ec5fe9635fbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="left_col_image_wrapper">
            <img
              src="https://images.unsplash.com/photo-1532618793091-ec5fe9635fbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
        <div className="middle_image h-[400px] md:h-[500px] md:w-[800px] flex-1">
          {<img src={singleProduct.image } alt="" />  ||  <Skeleton height={400} />} 
        </div>
        <div className="flex flex-col gap-[15px] w-[100%] md:w-[400px]">
          <h1 className="text-[20px] font-bold ">{singleProduct.title}</h1>
          <div className="flex gap-[3px]">
            {/* <StarRating rating={singleProduct.rating.rate} /> 
           ( {singleProduct.rating.count || <Skeleton />} reviews) */}
          </div>
          <div className="flex gap-[10px]">
            <p className="text-[16px] font-semibold ">
              $ {singleProduct.price || <Skeleton />}{" "}
            </p>{" "}
            <p className="text-[16px] font-semibold line-through">
              
             $ { singleProduct.price || <Skeleton />}
            </p>
          </div>
          <div className="text-[16px] font-normal">
            {singleProduct.description || <Skeleton count={5} height={20}/>}
          </div>
          <hr />
          <div className="flex flex-col gap-[4px] ">
            <div className="flex">
              <p>Colours: </p>
              <div className="flex gap-[10px]">
                <Colors />
              </div>
            </div>
            <div className="flex items-center gap-[4px]">
              <p>Size:</p>{" "}
              <div className="flex gap-[10px]">
                <Size handler={handleSize} currentSize={size} />
              </div>
            </div>
            <div className="text-[12px] text-red-500 font-bold">
              Add Products to Cart
            </div>
            <div className="flex gap-[20px]">
              <div className="flex items-center justify-center text-center">
                <button
                  className="w-[40px]  h-[40px]  text-black p-3 items-center border hover:bg-red-500 hover:text-white duration-100 hover:border-red-500 hover:border"
                  onClick={decrementQty}
                >
                  -
                </button>
                <input
                  type="text"
                  readOnly
                  value={value}
                  className="w-[100px] border border-black   h-[40px] flex justify-center items-center text-center"
                />

                <button
                  className="w-[40px]  h-[40px]  text-black p-3 items-center border hover:bg-red-500 hover:text-white duration-100 hover:border-red-500 hover:border"
                  onClick={incrementQty}
                >
                  +
                </button>
              </div>

              <button className="text-white bg-red-500 p-3 w-[200px] h-[40px] font-medium text-center rounded-[4px] ">
                Buy Now
              </button>
              <div className="border border-red-500 p-2 rounded-[5px] cursor-pointer ">
                <BsHeart size={20} onClick={() => handleWishList} />
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>{" "}
    </Layout>
  );
};

export default SingleProduct;
