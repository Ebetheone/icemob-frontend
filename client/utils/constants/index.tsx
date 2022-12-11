export enum AuthModalType {
  Login = "LOGIN",
  Register = "REGISTER",
  Forget = "FORGET",
  NewPassword = "NEW_PASSWORD",
  ConfirmCode = "CONFIRM_CODE",
  ConfirmPassword = "CONFIRM_PASSWORD",
  None = "NONE",
}

const constants = {
  ACCESS_TOKEN_KEY: "access-token",
  REFRESH_TOKEN_KEY: "refresh-token",
  WS_TOKEN_KEY: "ws-token",
};

export enum DetailType {
  PurchaseInformation = "PURCHASE_INFORMATION",
  UserForm = "USER_FORM",
}

export const config = {
  ...constants,
  NODE_ENV: process.env.ENV || process.env.NODE_ENV,
  BACKEND_URL: process.env.BACKEND_URL || "http://localhost:5000/",
  BACKEND_WS_URL: process.env.BACKEND_WS_URL || "ws://localhost:5000/",
};
