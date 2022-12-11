"use client";
import React, { useState } from "react";
import { Row, Col, Button, Divider, Space, message } from "antd";
import Image from "next/image";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCartContext } from "../../../context/cart.context";
import { useRouter } from "next/navigation";

type ProductType = {
  _id: string;
  productId: string;
  name: String | undefined;
  price: number;
  description: number;
  img: Array<any>;
};

type Props = {
  data: ProductType;
};
export default function ProductDetails({ data }: Props) {
  const { increaseQuantity, addInitialPrice } = useCartContext();

  const router = useRouter();
  const [count, setCount] = useState<number>(1);
  const { name, price, description, img } = data;

  const click = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const cartButton = (id: string, count: number) => {
    addInitialPrice(data.price, count);
    increaseQuantity(id, count);
    message.success("Сагсанд амжилттай нэмэгдлээ.");
  };
  return (
    <div className="product-details">
      <Row>
        <Col span={12}>
          <Image
            src={img[0].name}
            alt="img"
            width={500}
            height={500}
            className="details-img"
          />
        </Col>
        <Col span={12} className="detail-description">
          <p></p>
          <h1>{name}</h1>
          <h3>Үнэ: {price}₮</h3>
          <h3>Богино тайлбар</h3>
          <p style={{ textAlign: "justify" }}>{description}</p>
          <Divider />
          <div className="detail-counter">
            <Space size={10}>
              <Button
                type="primary"
                style={{ backgroundColor: "#101010", color: "#ffd200" }}
                size="large"
                onClick={() => click()}
              >
                -
              </Button>
              <h2>{count}</h2>
              <Button
                type="primary"
                size="large"
                style={{ backgroundColor: "#101010", color: "#ffd200" }}
                onClick={() => setCount(count + 1)}
              >
                +
              </Button>
              <Button
                type="primary"
                size="large"
                style={{
                  backgroundColor: "#ffd200",
                  color: "#000000",
                  width: 350,
                }}
                onClick={() => {
                  cartButton(data._id, count);
                }}
                icon={<ShoppingCartOutlined />}
              >
                Сагслах
              </Button>
            </Space>
          </div>
        </Col>
      </Row>
    </div>
  );
}
