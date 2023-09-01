import { createContext, useState } from "react";

export const WishlistContext = createContext({
  wishlistItems: [],
  addItemstoList: () => {},
});
const checkAdd = (wishlistItems, product) => {
  const isProductInWishlist = wishlistItems.some((item) => item.id === product.id);
  
  if (isProductInWishlist) {
      // If the product is already in the wishlist, remove it
      return wishlistItems.filter((item) => item.id !== product.id);
  } else {
      // If the product is not in the wishlist, add it
      return [...wishlistItems, product];
  }
}


export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addItemstoList = (product) => {
    setWishlistItems(checkAdd(wishlistItems, product));
  };
  const value = {
    wishlistItems,
    addItemstoList,
  };
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
