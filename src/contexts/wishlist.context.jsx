import { createContext, useState } from "react";

export const WishlistContext = createContext({
  wishlistItems: [],
  addItemstoList: () => {},
});
const checkadd = (wishlistItems, product) => {
    const check = wishlistItems.map((x) => x.id === product.id);
    if(check){
        return wishlistItems.filter((x) => x.id !== product.id)
    }
    
    return [
        ...wishlistItems , product
    ]
}

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addItemstoList = (product) => {
    setWishlistItems(checkadd(wishlistItems, product));
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
