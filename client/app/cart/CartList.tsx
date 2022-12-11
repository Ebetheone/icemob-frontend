"use client";
import React from "react";
import { Col, Row } from "antd";
import { useStateContext } from "../../context/context";
const CartList = () => {
  const { totalPrice } = useStateContext();
  return (
    <div>
      <Row>
        <Col span={8}>Нийт</Col>
        <Col span={8} offset={8}>
          Худалдан авах
        </Col>
      </Row>
      <p>Нийт үнэ</p>
      <div>{totalPrice} </div>
    </div>
  );
};

export default CartList;
