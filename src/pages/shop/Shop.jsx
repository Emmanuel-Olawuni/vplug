import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import Layout from "../../components/Layout";
import CardSkeleton from "../../components/Skeleton";
import "./Shop.css";
import SelectSort from "../../components/SelectSort";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, IsLoading] = useState(true);
  const [sortParams, setSortParams] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value.trim().toLowerCase();
    if (value === "all") {
      setSortParams("");
    } else {
      setSortParams(value);
    }
  };

  useEffect(() => {
    const delay = setTimeout(async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          IsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          IsLoading(true); 
        });
    }, 2000); 
    return () => clearTimeout(delay);
  }, []);
  useEffect(() => {
    
    if (sortParams === "all" || !sortParams) {
      setFilteredProducts(products);
    } else  {
      setFilteredProducts(products.filter((x) => sortParams === x.category));
    }
  }, [products, sortParams]);
  return (
    <Layout>
      <div className=" ">
        <div className="flex justify-between p-4 mb-5 flex-col md:flex-row">
          <div></div>
          <div className="">
            <SelectSort handleChange={handleChange} value={sortParams} />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-around items-center">
            {loading && (
              <div className="flex flex-col md:flex-row gap-[10px] flex-wrap ml-2 justify-center items-center">
                <CardSkeleton cardcount={20} />
              </div>
            )}

            {filteredProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
