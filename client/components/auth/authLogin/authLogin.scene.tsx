import React, { useState } from "react";
import { Button, Divider, Spin } from "antd";
import { AuthModalType } from "../../../utils/constants";
import { AuthVerifyTokenSenderInput } from "../../../typin";
import { LoginEmail } from "./components/loginEmail";
import Image from "next/image";
interface Props {
  setVisibleAuthModal: (value: AuthModalType | undefined) => void;
  onAuthVerifyCode: (data: AuthVerifyTokenSenderInput) => void;
  onOkSendCode: () => void;
}

export const AuthLoginScene = ({
  setVisibleAuthModal,
  onAuthVerifyCode,
  onOkSendCode,
}: Props) => {
  // REDUX
  return (
    <Spin spinning={false}>
      <div className="auth-container-body">
        <h2 style={{ textAlign: "center" }}>Нэвтрэх</h2>
        <Image
          src="/assets/images/logo.jpg"
          alt="logo"
          width={80}
          height={80}
          className="auth-logo"
        />
        <LoginEmail
          setVisibleAuthModal={setVisibleAuthModal}
          onResendCode={onAuthVerifyCode}
          onOkSendCode={onOkSendCode}
        />
        <div className="social-container">
          <Divider className="m-0 fs-13">Эсвэл</Divider>
        </div>
        <div className="auth-container-footer">
          <span> Шинэ хэрэглэгч үү?</span>
          <Button
            type="link"
            size="large"
            onClick={() => setVisibleAuthModal(AuthModalType.Register)}
          >
            Бүртгүүлэх
          </Button>
        </div>
      </div>
    </Spin>
  );
};
