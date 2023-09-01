import React, { useContext } from "react";
import { WishlistContext } from "../../contexts/wishlist.context";
import WishlistItems from "./WishlistItems";
import Layout from "../../components/Layout";
const Wishlist = () => {
  const { wishlistItems } = useContext(WishlistContext);

  return (
    <Layout>
      <h4 className="flex text-center justify-center font-bold text-[20px] p-3">WISHLIST</h4>
      <div className='flex gap-[10px] '>
        
        {wishlistItems.map((x) => (
          <WishlistItems product={x} />
        ))}
      </div>
    </Layout>
  );
};

export default Wishlist;
