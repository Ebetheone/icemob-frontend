import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { showError, showSuccess } from "../../../utils/errorHandler";

// import { setCookieToken } from "utils/cookies";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { AuthVerifyTokenSenderInput } from "../../../typin";
import { URL } from "../../../utils/url";
import { setCookieToken } from "../../../utils/cookies";
import { useUserContext } from "../../../context/user.context";

type Props = {
  data: AuthVerifyTokenSenderInput | undefined;
  isOnOkCodeSent: boolean | undefined;
};

export const AuthConfirmCodeScene = ({ data, isOnOkCodeSent }: Props) => {
  const [disabled, setDisabled] = useState(false);

  const resendCode = () => {
    onSendVerifyCode();
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 60000);
  };
  const { setUserData } = useUserContext();
  const onSendVerifyCode = async () => {
    if (data?.email) {
      const codeData = await fetch(`${URL}/auth/verify-code-send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
        }),
      }).then((res) => res.json());
      if (codeData.error) showError(codeData.error.message);
      if (codeData.result) showSuccess(codeData.description);
    }
  };

  const onNavigation = async (token: any) => {
    setCookieToken(token.authVerifyToken || undefined);
    window.location.reload();
  };

  const onFinish = async (values: { code: string }) => {
    const verifyData = await fetch(`${URL}/auth/verify-code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data?.email,
        code: values.code,
      }),
    }).then((res) => res.json());

    if (verifyData.result.accessToken) {
      showSuccess("Амжилттай");
      setUserData(verifyData.userData);
      window.localStorage.setItem(
        "USER_DATA",
        JSON.stringify(verifyData.result.userData)
      );
      onNavigation({
        authVerifyToken: {
          accessToken: verifyData.result.accessToken,
          refreshToken: verifyData.result?.refreshToken,
        },
      });
    }
    if (verifyData.error) showError(verifyData.error.message);
    // showSuccess(verifyData.description);
  };
  // useEffect(() => {
  //   if (isOnOkCodeSent) onSendVerifyCode();
  // }, []);

  const renderer = ({ seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      () => setDisabled(true);
    } else {
      return <span>{seconds}</span>;
    }
  };

  return (
    <div>
      <div className="auth-container-body">
        <h1>Бүртгэл баталгаажуулах</h1>
        <Form
          onFinish={onFinish}
          initialValues={{
            code: null,
          }}
        >
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: "Баталгаажуулах кодоо оруулна уу",
              },
              {
                validator(rule, value, callback) {
                  const phoneRe =
                    /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm.test(
                      value
                    );
                  if (phoneRe) {
                    callback();
                  } else {
                    callback("Баталгаажуулах код нь тоо байх ёстой");
                  }
                },
              },
            ]}
          >
            <Input
              name="code"
              size="large"
              placeholder="Баталгаажуулах код"
              prefix={<CheckOutlined className="mr-10" />}
            />
          </Form.Item>
          <Button type="primary" size="large" block htmlType="submit">
            Баталгаажуулах
          </Button>
        </Form>
      </div>
      <div className="auth-container-footer">
        <span>Баталгаажуулах код ирээгүй?</span>
        <br />

        {disabled ? (
          <div className="CountDown">
            <Countdown date={Date.now() + 60000} renderer={renderer} />
            <span> </span>
            сек
          </div>
        ) : (
          <Button
            type="link"
            size="large"
            onClick={resendCode}
            disabled={disabled}
          >
            Дахин илгээх
          </Button>
        )}
      </div>
    </div>
  );
};
