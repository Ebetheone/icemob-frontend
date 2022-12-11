"use client";
import React, { useContext, useDebugValue, useState } from "react";
import { Product } from "../typin";
export type ContextType = {
  totalPrice: number;
  showCart: boolean;
  cardItems: Array<Product> | undefined;
  totalQuantity: number;
  qty: number;
  onAdd(product: Product, quantity: number): void;
  incQty(): void;
  decQty(): void;
};

export const Context = React.createContext<ContextType>({
  totalPrice: 0,
  showCart: false,
  cardItems: undefined,
  totalQuantity: 0,
  qty: 0,
  onAdd: function (product: Product, quantity: number): void {
    throw new Error("Function not implemented.");
  },
  incQty: function (): void {
    throw new Error("Function not implemented.");
  },
  decQty: function (): void {
    throw new Error("Function not implemented.");
  },
});

export const StateContext = ({ children }: any) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cardItems, setCardItems] = useState<Array<Product> | undefined>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [qty, setQty] = useState(0);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decQty = () => {
    setQty((prevQty) => (prevQty - 1 < 1 ? 1 : prevQty - 1));
  };

  const onAdd = (product: Product, quantity: number) => {
    const checkProductExists = cardItems?.find(
      (item) => item._id === product._id
    );
    setTotalPrice((prev) => prev + product.price * quantity);
    setTotalQuantity((prev) => prev + quantity);

    if (checkProductExists) {
      const updatedCart = cardItems?.map((cartItem) => {
        if (cartItem._id === product._id)
          return {
            ...cartItem,
            quantity: cartItem.quantity + quantity,
          };
      });

      if (updatedCart) setCardItems(updatedCart as Product[]);
    } else {
      product.quantity = quantity;
      setCardItems([...(cardItems as Product[]), { ...product }]);
    }
  };
  return (
    <Context.Provider
      value={{
        showCart,
        totalPrice,
        totalQuantity,
        cardItems,
        qty,
        onAdd,
        incQty,
        decQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
