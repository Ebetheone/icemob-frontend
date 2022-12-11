import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
// import crypto from "crypto-js";
import { showError, showSuccess } from "../../../../utils/errorHandler";
import { AuthModalType } from "../../../../utils/constants";
import crypto from "crypto-js";

import { AuthVerifyTokenSenderInput } from "../../../../typin";
import { URL } from "../../../../utils/url";
import { useRouter } from "next/navigation";
import { useUserContext } from "../../../../context/user.context";
import { destroyCookieToken, setCookieToken } from "../../../../utils/cookies";

const { useForm } = Form;

interface Props {
  setVisibleAuthModal: (value: AuthModalType | undefined) => void;
  onResendCode: (data: AuthVerifyTokenSenderInput) => void;
  onOkSendCode: () => void;
}

interface loginEmailType {
  email: string | undefined;
  password: string | undefined;
  remember: boolean;
}
export const LoginEmail = ({
  setVisibleAuthModal,
  onResendCode,
  onOkSendCode,
}: Props) => {
  const router = useRouter();
  const [form] = useForm();
  const { user, setUserData } = useUserContext();

  const onLoginEmailPress = async (_values: loginEmailType) => {
    // if (_values) {
    //   localStorage.setItem(
    //     "credentials-email",
    //     crypto.AES.encrypt(
    //       JSON.stringify({ email: _values.email }),
    //       "icemob_secret"
    //     ).toString()
    //   );
    //   // setUserData(_values);
    // } else localStorage.removeItem("credentials-email");

    destroyCookieToken(undefined);
    const { result } = await fetch(`${URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.getFieldValue("email"),
        password: form.getFieldValue("password"),
      }),
    }).then((res) => res.json());

    if (result.accessToken) {
      let authVerifyToken = {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
      };

      setUserData(result.userData);
      window.localStorage.setItem("USER_DATA", JSON.stringify(result.userData));
      setCookieToken(authVerifyToken || undefined);
      window.location.reload();
      router.push("/");
      setVisibleAuthModal(AuthModalType.None);
    }
    if (!result.userData.isEmailConfirmed) {
      Modal.confirm({
        title: "Анхааруулга",
        content: `Таны ${_values.email} Имейл хаяг баталгаажаагүй байна.`,
        okText: "Баталгаажуулах",
        onOk: () => {
          onResendCode({ email: _values.email });
          onOkSendCode();
          setVisibleAuthModal(AuthModalType.ConfirmCode);
        },
        cancelText: "Буцах",
      });
    }
  };

  return (
    <Form
      name="form-email"
      form={form}
      initialValues={
        {
          email: undefined,
          password: undefined,
          remember: false,
        } as loginEmailType
      }
      onFinish={onLoginEmailPress}
      onFinishFailed={(errorInfo) =>
        console.log("onFinishFailed === error", errorInfo)
      }
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "И-мэйлээ оруулна уу",
          },
          {
            type: "email",
            message: "Зөв и-мэйл оруулна уу",
          },
        ]}
        normalize={(val?: string) => val?.replace(/\s/g, "") || ""}
      >
        <Input
          size="large"
          placeholder=" И-мэйл хаяг"
          prefix={<UserOutlined className="mr-10" />}
          name="email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Нууц үгээ оруулна уу",
          },
        ]}
      >
        <Input.Password
          size="large"
          placeholder="Нууц үг"
          prefix={<LockOutlined className="mr-10" />}
          type="password"
          name="password"
        />
      </Form.Item>
      <div className="row-content space">
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Сануулах</Checkbox>
        </Form.Item>
        <Button
          type="link"
          className="p-0"
          onClick={() => setVisibleAuthModal(AuthModalType.Forget)}
        >
          Нууц үгээ мартсан
        </Button>
      </div>
      <Button type="primary" size="large" block htmlType="submit">
        Нэвтрэх
      </Button>
    </Form>
  );
};
