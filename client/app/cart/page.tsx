"use client";
import React from "react";
import {
  CheckCircleOutlined,
  ShoppingCartOutlined,
  WalletOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

import {
  Badge,
  Button,
  Col,
  Layout,
  List,
  Menu,
  message,
  Modal,
  Result,
  Row,
  Spin,
  Steps,
} from "antd";
import { showError, showSuccess } from "../../utils/errorHandler";
import { useCartContext } from "../../context/cart.context";
import { CartContextType, PaymentMethodEnum } from "../../typin";
import CartList from "../../components/cart/ShoppingCart";

const CartPage = () => {
  const cartData: CartContextType = useCartContext();
  const { Header, Footer, Sider, Content } = Layout;

  // const confirm = () => {
  //   Modal.confirm({
  //     title: <h1 style={{ fontStyle: "bold" }}>Leave Checkout?</h1>,
  //     icon: <ExclamationCircleOutlined />,
  //     content:
  //       "Are you sure want to leave checkout? the items you've selected may not be aviable later.",

  //     okText: "Stay",
  //     cancelText: "Leave",
  //     width: 500,
  //     centered: true,
  //     onCancel() {
  //       setVisiblePendingId(undefined);
  //     },
  //   });
  // };

  return (
    <Layout>
      <Content style={{ padding: "0 50px", height: "auto" }}>
        <Layout style={{ background: "#fff" }}>
          <Content>
            {/* <List
              className="trend-list"
              itemLayout="vertical"
              dataSource={cartData.cardItems}
              renderItem={(item) => (
                <List.Item>
                </List.Item>
                )}
              /> */}
            {/* <CartList data={cartData} /> */}
          </Content>
        </Layout>
      </Content>
      <Sider>TOlboasdsadadasr toloh</Sider>
    </Layout>
  );
};

export default CartPage;

//  <Header className="header">
//    <Row>
//      <Col span={8}>
//        <Menu
//          theme="dark"
//          mode="horizontal"
//          defaultSelectedKeys={["2"]}
//          style={{ lineHeight: "64px" }}
//        >
//          <Menu.Item key="1">Cart Demo</Menu.Item>
//        </Menu>
//      </Col>
//      <Col style={{ textAlign: "right" }}>
//        {/* <Drawers
//               shoppingCart={cart.shoppingCart}
//               clear={() => {
//                 setCart({ ...cart, shoppingCart: [] });
//                 message.destroy();
//                 message.info("Cart Clear");
//               }}
//             /> */}

//        {/* <Button
//               onClick={() => console.log("asd")}
//               className="ant-dropdown-link"
//               href="#"
//             >
//               {cart.shoppingCart.length === 0
//                 ? "Cart List"
//                 : "Added cart " + cart.shoppingCart.length}
//             </Button> */}
//      </Col>
//    </Row>
//  </Header>;
