"use client";
import { Col, Dropdown, Menu, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useCartContext } from "../../context/cart.context";
import { useUserContext } from "../../context/user.context";
import { URL } from "../../utils/url";
enum PaymentMethodEnum {
  Q_PAY,
  CREDIT_CARD,
  CASH,
}

const menu = (
  <Menu>
    <Menu.Item>item 1</Menu.Item>
    <Menu.Item>item 2</Menu.Item>
  </Menu>
);

const PurchaseInformation = () => {
  const { cartItems, cartQuantity, price } = useCartContext();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (price !== 0) return setTotalPrice(price);
    const totalPrice = window.localStorage.getItem("CART_ITEMS_PRICE");
    totalPrice && setTotalPrice(JSON.parse(totalPrice));
  }, [totalPrice]);

  const { user } = useUserContext();

  const handlePurchase = async () => {
    const codeData = await fetch(`${URL}/purchase/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: user?._id,
        products: cartItems,
      }),
    }).then((res) => res.json());
    console.log("codeData");
  };
  return (
    <section className="purchaseForm">
      <h1>Tolbor toloh</h1>
      {/* <Dropdown overlay={menu}>
        <a>Hover me</a>
      </Dropdown> */}
      <Row>
        <Col span={20}>
          <h3 style={{ fontWeight: 400 }}>Бүтээгдэхүүний тоо, хэмжээ</h3>
        </Col>
        <Col>
          <h3 style={{ fontWeight: 400 }}>{cartQuantity}</h3>
        </Col>
      </Row>
      <Row>
        <Col span={15}>
          <h2 style={{ fontWeight: 400 }}>Нийт төлбөр</h2>
        </Col>
        <Col>
          <h2 style={{ fontWeight: 400 }}>{totalPrice}</h2>
        </Col>
      </Row>

      <button className="btn-yellow" onClick={() => handlePurchase()}>
        Төлбөр төлөх
      </button>
    </section>
  );
};

export default PurchaseInformation;
