"use client";
import React, { use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartContext } from "../../context/cart.context";
import { URL } from "../../utils/url";
import { queryClient } from "../../utils/queryClient";
import { Space, Row, Col, Button, Divider } from "antd";
import { CloseOutlined } from "@ant-design/icons";
type CardItemProps = {
  id: string;
  quantity: number;
};

type Props = {
  data: CardItemProps;
};
const CardItem = ({ data }: Props) => {
  const { id, quantity } = data;

  const { result } = use(
    queryClient(`product-${id}`, () =>
      fetch(`${URL}/product/${id}`, { cache: "no-store" }).then((res) =>
        res.json()
      )
    )
  );
  const {
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    closeCart,
    cartQuantity,
    addPrice,
  } = useCartContext();

  return (
    <section>
      <div>
        <Row gutter={20}>
          <Col span={10}>
            <Image
              src={result.img[0].name}
              width={140}
              height={120}
              alt="cart image"
            />
          </Col>
          <Col span={14}>
            <Row>
              <Col span={20}>
                <h3>{result.name}</h3>
              </Col>
              <Col span={4}>
                <Button
                  type="primary"
                  size="small"
                  onClick={() => removeFromCart(id)}
                  style={{
                    float: "right",
                    backgroundColor: "white",
                    color: "#000000",
                  }}
                >
                  <CloseOutlined />
                </Button>
              </Col>
            </Row>
            <Space>
              <Button
                onClick={() => {
                  decreaseQuantity(id);
                  // addPrice(result.price, quantity);
                }}
              >
                -
              </Button>
              <p>{quantity}</p>
              <Button
                onClick={() => {
                  increaseQuantity(id, 1);
                  addPrice(result.price, quantity);
                }}
              >
                +
              </Button>
            </Space>
            <h4>Үнэ: {result.price * quantity}₮</h4>
          </Col>
        </Row>
        <div>
          <Button style={{ width: "100%" }}>
            <Link href={`/purchase`} onClick={closeCart}>
              Худалдан авах
            </Link>
          </Button>
        </div>
        <Divider />
      </div>
    </section>
  );
};

export default CardItem;
