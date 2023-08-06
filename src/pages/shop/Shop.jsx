import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import Layout from "../../components/Layout";
import CardSkeleton from "../../components/Skeleton";
import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, IsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 2 seconds with setTimeout
    const delay = setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          IsLoading(false); // Set isLoading to false once the data is fetched
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          IsLoading(true); // Set isLoading to false in case of an error
        });
    }, 2000); // Simulate a 2-second delay

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(delay);
  }, []);
  return (
    <Layout>
        
      <div className=" ">
        <div>Sort Page</div>
        <div>
          Showing Products 1 to 100
          <div className="flex flex-wrap">
            {loading && 
            
            <div className="flex flex-col md:flex-row gap-[10px] flex-wrap">
            <CardSkeleton cardcount={20} />
            </div>

            }

            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
