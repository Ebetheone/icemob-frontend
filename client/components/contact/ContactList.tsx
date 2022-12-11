import React, { useState } from "react";
import { Row, Col, Form, Input, Button } from "antd";
import MapView from "./components/mapView";
import {
  PhoneOutlined,
  MailOutlined,
  CompassOutlined,
} from "@ant-design/icons";
const { TextArea } = Input;
const ContactList: React.FC = () => {
  const mapLoc = { lat: 47.9159813, lng: 106.9028419 };
  return (
    <div>
      <div className="contactus">
        <div className="contact-title">
          <h1>Холбоо барих</h1>
        </div>
        <Row justify="center">
          <Col xl={10} xs={22}>
            <div className="contactList">
              <h2> Бидэнтэй холбогдох</h2>
              <p>Танд асууж лавлах зүйл байвал бидэнтэй холбогдоорой</p>
              <p>
                <PhoneOutlined /> Утас: 80177190
              </p>
              <p>
                <CompassOutlined /> Хаяг: Улсын их дэлгүүрээс Peacemall явах зам
                дагуу ICE MOB records
              </p>
              <p>
                <MailOutlined /> И-мэйл хаяг: icemob.mongol@gmail.com
              </p>
              <div className="map-container">
                <MapView center={mapLoc} />
              </div>
            </div>
          </Col>
          <Col xl={10} xs={22}>
            <Form
              layout="horizontal"
              autoComplete="off"
              name="basic"
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 20 }}
              className="contact-feedback"
            >
              <h2 style={{ color: "white" }}>Санал хүсэлт үлдээх</h2>
              <Form.Item
                name="name "
                rules={[
                  { required: true, message: "Нэр оруулах шаардлагатай" },
                ]}
              >
                <Input style={{ padding: 10 }} placeholder="Нэр" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Цахим шуудан оруулах шаардлагатай ",
                  },
                ]}
              >
                <Input style={{ padding: 10 }} placeholder="Цахим шуудан" />
              </Form.Item>
              <Form.Item
                name="name"
                rules={[
                  { required: true, message: "Зурвас оруулах шаардлагатай " },
                ]}
              >
                <TextArea
                  style={{ padding: 10 }}
                  rows={8}
                  placeholder="Зурвас"
                />
              </Form.Item>
              <Button
                style={{
                  backgroundColor: "#ffd200",
                  color: "#000000",
                  width: 400,
                }}
                type="primary"
                size="large"
              >
                Илгээх
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default ContactList;
