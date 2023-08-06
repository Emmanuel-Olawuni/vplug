import "./home.css";
import React, { useEffect, useState } from "react";
import Topbar from "../../components/Topbar";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Flashsales from "../../components/Flashsales";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/Button";
import CategoryCard from "../../components/CategoryCard";
import JBL from "../../assets/JBL.png";
import Countdown from "../../components/Countdown";
import { TbTruckDelivery } from "react-icons/tb";
import { SiAdguard } from "react-icons/si";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Footer from "../../components/Footer";
import CardSkeleton from "../../components/Skeleton";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    const productFetch = setTimeout(() => {
      fetch("https://fakestoreapi.com/products?limit=4")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          isLoading(false);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }, 2000);
    return ()=> clearTimeout(productFetch);
  }, []);
  return (
    <>
      <Topbar />
      <Header />
      <Hero />
      <Flashsales
        arrow={true}
        time={true}
        button={false}
        caption="Flash Sales"
        title="Today's Sale"
      />
        {loading && (
          <div className="flex gap-[10px] justify-center items-center">
            <CardSkeleton cardcount={3} />
          </div>
        )}
      <div className="flex w-[100%] flex-nowrap whitespace-nowrap overflow-scroll scrool ">
      
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Button text="View Products" />
      </div>
      <hr className="border-[#f5f5f5] mt-4" />
      <Flashsales
        arrow={true}
        time={false}
        button={false}
        caption="Browse by Category"
        title="Categories"
      />
      <CategoryCard />
      <Flashsales
        arrow={false}
        time={false}
        button={true}
        caption="This Months"
        title="Best Selling Products"
      />
      <div className="flex w-[100%] flex-wrap whitespace-nowrap justify-around ">
      {loading && (
          <div className="flex gap-[10px] justify-center items-center">
            <CardSkeleton cardcount={3} />
          </div>
        )}
           {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <div className=" bg-black  bg-no-repeat bg-contain relative p-[2em]  md:p-[4em] flex flex-col md:flex-row gap-[2em] justify-between">
        <div className="flex flex-col gap-[3vw] w-[auto]">
          <span className="text-[#0f6] font-semibold text-[16px] leading-[20px] ">
            Categories
          </span>
          <h2 className="text-white font-[800] text-[48px] ">
            Enhance Your Music Experience
          </h2>
          <div className="text-white">
            <Countdown />
          </div>
          <button className="text-white bg-[#0f6] p-3 text-opacity-95 rounded-[10px] w-[fit-content]">
            BUY NOW
          </button>
        </div>
        <div className="banner-image relative">
          <img src={JBL} alt="" />
          <div className="circle"> </div>
        </div>
      </div>

      <div className="flex flex-col justify-center md:justify-around  md:flex-row mt-6 mb-8 gap-[20px]">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-black border-red-500 border-[10px] border-opacity-90 rounded-[50%] h-[80px] w-[80px] flex items-center justify-center flex-col">
            <TbTruckDelivery size={30} color="#fff" />
          </div>
          <span className="font-semibold uppercase text-[20px]">
            FREE AND FAST DELIVERY
          </span>
          <span className="text-[16px] font-medium">
            {" "}
            Free delivery for all orders over $140
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-black border-red-500 border-[10px] border-opacity-90 rounded-[50%] h-[80px] w-[80px] flex items-center justify-center flex-col">
            <TfiHeadphoneAlt size={30} color="#fff" />
          </div>
          <span className="font-semibold uppercase text-[20px]">
            24/7 customer service
          </span>
          <span className="text-[16px] font-medium">
            {" "}
            Friendly 24/7 customer service
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-black border-red-500 border-[10px] border-opacity-90 rounded-[50%] h-[80px] w-[80px] flex items-center justify-center flex-col">
            <SiAdguard size={30} color="#fff" />
          </div>
          <span className="font-semibold uppercase text-[20px]">
            money back guarantee
          </span>
          <span className="text-[16px] font-medium">
            {" "}
            we rerun money within 30 days
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
