"use client";
import { Row, Col } from "antd";
import React, { useEffect, useState } from "react";
import PurchaseDetails from "../../components/purchase/PurchaseDetails";
import { useCartContext } from "../../context/cart.context";
import { CartItemHandle } from "../../typin";
import PurchaseItemList from "./Purchase.item.list";

const PurchaseScene = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [method, setMethod] = useState(0);

  return (
    <div
      className="purchase"
      style={{ backgroundColor: "#202020", color: "white" }}
    >
      <Row>
        <Col offset={1} span={15}>
          <PurchaseItemList />
        </Col>
        <Col span={8}>
          <PurchaseDetails />
        </Col>
      </Row>
    </div>
  );
};

export default PurchaseScene;
