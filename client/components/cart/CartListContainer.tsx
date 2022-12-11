"use client";
import { Col, List, Row } from "antd";
import React, { use, useEffect, useState } from "react";
import { useCartContext } from "../../context/cart.context";
import { CartContextType, CartItemHandle, CartItemType } from "../../typin";
import PurchaseForm from "../forms/Purchase.form";
import CardItem from "./CardItem";
import CardItemLong from "./CardItemLong";

const CartListContainer = () => {
  const [cartItem, setCartItem] = useState<CartItemType[] | null>([]);

  const { cartItems }: CartContextType = useCartContext();

  useEffect(() => {
    if (cartItems.length == 0) {
      const cart = window.localStorage.getItem("CART_ITEMS");
      cart && console.log(JSON.parse(cart));
      cart && setCartItem(JSON.parse(cart));
    } else {
      setCartItem(cartItems);
    }
  }, [cartItems]);

  return (
    <section>
      {cartItem ? (
        cartItem.map((item) => (
          <div key={item.id}>
            <CardItemLong data={item} />
          </div>
        ))
      ) : (
        <div>NOTHING TO PURCHASE</div>
      )}
    </section>
  );
};

export default CartListContainer;
