"use client";
import React, { use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartContext } from "../../context/cart.context";
import { URL } from "../../utils/url";
import { queryClient } from "../../utils/queryClient";
import { Space, Row, Col, Button, Divider } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { CartItemHandle } from "../../typin";
type CardItemProps = {
  id: string;
  quantity: number;
};

type Props = {
  data: CardItemProps;
};
const CardItemLong = ({ data }: Props) => {
  const { id, quantity } = data;
  const { result } = use(
    queryClient(`product-${id}`, () =>
      fetch(`${URL}/product/${id}`, { cache: "no-store" }).then((res) =>
        res.json()
      )
    )
  );
  const decrease = () => {
    decreaseQuantity(id);
    reducePrice(result?.price, quantity);
  };
  const increase = () => {
    increaseQuantity(id, 1);
    addPrice(result?.price, quantity);
  };
  const {
    removeFromCart,
    addPrice,
    decreaseQuantity,
    increaseQuantity,
    reducePrice,
  } = useCartContext();

  return (
    <section className="cart">
      <Row gutter={20}>
        <Col offset={1} span={5}>
          <Image
            src={result.img[0].name}
            width={140}
            height={120}
            alt="cart image"
          />
        </Col>
        <Col span={5}>
          <div className="cartItemInfo">
            <p>{result.name}</p>
            <p>{result.price} ₮</p>
          </div>
        </Col>
        <Col span={5}>
          <section className="cartItemButtons">
            <button className="buttonQuantity" onClick={() => decrease()}>
              -
            </button>
            <p className="cartItemQuantity">{quantity}</p>
            <button className="buttonQuantity" onClick={() => increase()}>
              +
            </button>
          </section>
        </Col>
        <Col span={5}>
          <p className="cartItemPrice">{result.price * quantity} ₮</p>
        </Col>
        <Col span={2}>
          <div className="buttonRemove">
            <button onClick={() => removeFromCart(id)}>
              <CloseOutlined />
            </button>
          </div>
        </Col>
      </Row>
      <Divider />
    </section>
  );
};

export default CardItemLong;
