import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemtoCart: () => {},
  removeItemFromCart: ()=> {}
});
const addCartItem = (cartItems, productToAdd) => {
  const exist = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (exist) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }
 

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems , productToRemove) => {
  const check = cartItems.find((x) => x.id === productToRemove.id);
  if(check.quantity === 1){
    return cartItems.filter((x)=> x.id !== productToRemove.id )
  }

}
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemtoCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };
  const value = { isCartOpen, setIsCartOpen, cartItems, addItemtoCart , removeItemFromCart};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
