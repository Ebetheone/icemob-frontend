"use client";
import React, { Suspense, useEffect } from "react";
import { Drawer, Empty } from "antd";
import { useCartContext } from "../../context/cart.context";
import { CartContextType } from "../../typin";
import CardItem from "./CardItem";

type Props = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: Props) => {
  const { closeCart, cartItems, cartQuantity }: CartContextType =
    useCartContext();

  return (
    <div>
      <Drawer
        title="Миний сагс"
        placement="right"
        onClose={closeCart}
        open={isOpen}
      >
        {cartItems && cartQuantity !== 0 ? (
          cartItems.map((item, key) => (
            <div key={key}>
              <Suspense fallback={<p>asd</p>}>
                <CardItem key={key} data={item} />
              </Suspense>
            </div>
          ))
        ) : (
          <Empty />
        )}
      </Drawer>
    </div>
  );
};

export default ShoppingCart;
