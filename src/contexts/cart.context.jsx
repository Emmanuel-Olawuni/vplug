import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemtoCart: () => {},
  removeItemFromCart: () => {},
  cartTotal: 0,
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

  return [...cartItems, { ...productToAdd }];
};
const removeCartItem = (cartItems, productToRemove) => {
  const check = cartItems.find((x) => x.id === productToRemove.id);
  if (check.quantity === 1) {
    return cartItems.filter((x) => x.id !== productToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};
const clearItems = (cartItems, productToClear) => {
  const exist = cartItems.map((x) => x.id === productToClear.id);
  if (exist) {
    return cartItems.filter((x) => x.id !== productToClear.id);
  }
};
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setcartTotal] = useState(0);
  const addItemtoCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };
  const clearItemfromCart = (productToClear) => {
    setCartItems(clearItems(cartItems, productToClear));
  };
  useEffect(() => {
    const value = cartItems.reduce((x, y) => x + y.price, 0);
    setcartTotal(value);
  }, [cartItems]);
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemtoCart,
    clearItemfromCart,
    removeItemFromCart,
    cartTotal
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
