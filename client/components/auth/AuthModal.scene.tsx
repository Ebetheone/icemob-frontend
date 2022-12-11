import React, { useState } from "react";

import { AuthLoginScene } from "./authLogin/authLogin.scene";
import { AuthRegisterScene } from "./authRegister/authRegister.scene";
import { AuthConfirmCodeScene } from "./authConfirmCode/authConfirmCode.scene";
import { AuthModalType } from "../../utils/constants";

interface Props {
  visibleAuthModal: AuthModalType;
  setVisibleAuthModal: (value: AuthModalType | undefined) => void;
}

export const AuthModalScene = ({
  visibleAuthModal,
  setVisibleAuthModal,
}: Props) => {
  const [authVerifyTokenSenderData, setAuthVerifyTokenSenderData] =
    useState(undefined);
  const [isOnOkCodeSent, setIsOnOkCodeSent] = useState(false);
  const onAuthVerifyCode = (data: any) => {
    setAuthVerifyTokenSenderData(data);
  };

  const onOkSendCode = () => {
    setIsOnOkCodeSent(true);
  };

  return (
    <div>
      {visibleAuthModal && visibleAuthModal === AuthModalType.Login && (
        <AuthLoginScene
          onAuthVerifyCode={onAuthVerifyCode}
          setVisibleAuthModal={setVisibleAuthModal}
          onOkSendCode={onOkSendCode}
        />
      )}
      {visibleAuthModal && visibleAuthModal === AuthModalType.Register && (
        <AuthRegisterScene
          setVisibleAuthModal={setVisibleAuthModal}
          onAuthVerifyCode={onAuthVerifyCode}
        />
      )}
      {visibleAuthModal && visibleAuthModal === AuthModalType.ConfirmCode && (
        <AuthConfirmCodeScene
          data={authVerifyTokenSenderData}
          isOnOkCodeSent={isOnOkCodeSent}
        />
      )}
    </div>
  );
};
