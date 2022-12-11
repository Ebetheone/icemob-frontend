import { Col, Divider, Row } from "antd";
import React from "react";
import CartListContainer from "../cart/CartListContainer";

const PurchaseItemList = () => {
  return (
    <div className="purchase">
      <Row>
        <Col offset={1} span={15}>
          <p className="purchaseTitle">Миний сагс</p>
        </Col>
        <Col>
          <p className="purchaseTitle yellow">Худалдан авах</p>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <CartListContainer />
        </Col>
      </Row>

      <Divider />
    </div>
  );
};

export default PurchaseItemList;
