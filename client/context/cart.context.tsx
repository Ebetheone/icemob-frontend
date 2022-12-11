"use client";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import CardItem from "../components/cart/CardItem";
import ShoppingCart from "../components/cart/ShoppingCart";
import { CartContextType, CartItemType, Product } from "../typin";

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const addPrice = (price: number, quantity: number) => {
    if (quantity == 0) return setPrice(0);
    setPrice((prev) => {
      if (prev === 0) {
        const prc = price * quantity;
        return (prev = prev + prc);
      } else {
        return (prev += price);
      }
    });
    window.localStorage.removeItem("CART_ITEMS_PRICE");
    console.log(quantity);
    console.log(price);
    window.localStorage.setItem("CART_ITEMS_PRICE", JSON.stringify(price));
  };
  const reducePrice = (price: number, quantity: number) => {
    if (quantity == 0) return setPrice(0);
    setPrice((prev) => (prev -= price));
    window.localStorage.removeItem("CART_ITEMS_PRICE");
    window.localStorage.setItem("CART_ITEMS_PRICE", JSON.stringify(price));
  };

  const addInitialPrice = (price: number, quantity: number) => {
    if (quantity == 0) return setPrice(0);
    setPrice((prev) => (prev += price * quantity));
    window.localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
  };
  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };
  const getItemQuantity = (id: string) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseQuantity = (id: string, count: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: count }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + count };
          } else {
            return item;
          }
        });
      }
    });
    console.log(cartItems);
    window.localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
  };

  const decreaseQuantity = (id: string) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
    window.localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
    window.localStorage.removeItem("CART_ITEMS_PRICE");
    window.localStorage.setItem("CART_ITEMS_PRICE", JSON.stringify(price));
  };

  const removeFromCart = (id: string) => {
    setCartItems((currentItems) => {
      return setPrice(0), currentItems.filter((item) => item.id !== id);
    });
  };

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        openCart,
        closeCart,
        addPrice,
        reducePrice,
        addInitialPrice,
        price,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
