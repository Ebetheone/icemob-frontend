"use client";
import { Form, Input } from "antd";
import React from "react";

const PurchaseForm = () => {
  const { TextArea } = Input;
  return (
    <div>
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
          rules={[{ required: true, message: "Нэр оруулах шаардлагатай" }]}
        >
          <Input placeholder="Нэр" />
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
          <Input placeholder="Цахим шуудан" />
        </Form.Item>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Зурвас оруулах шаардлагатай " }]}
        >
          <TextArea rows={4} placeholder="Зурвас" />
        </Form.Item>
        <button className="contact-button">Илгээх</button>
      </Form>
    </div>
  );
};

export default PurchaseForm;
