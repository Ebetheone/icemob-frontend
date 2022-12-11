import React from "react";
import { message, Modal } from "antd";

const isObject = function (a: any) {
  return !!a && a.constructor === Object;
};

export const showSuccess = (text: string) => {
  Modal.success({
    okText: "OK",
    content: <span>{text}</span>,
  });
};

export const showInfo = (text: string) => {
  message.info(text);
};

export const showWarning = (text: string) => {
  message.warning(text);
};

export function showError(error: any) {
  try {
    Modal.error({
      okText: "OK",
      content: <span>{error}</span>,
    });
  } catch (err: unknown) {
    message.error("Алдаа гарлаа. Та админтай холбоо барина уу!");
  }
}
