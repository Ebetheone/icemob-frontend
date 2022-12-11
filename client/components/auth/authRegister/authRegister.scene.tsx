import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Modal, Divider } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { showError, showSuccess } from "../../../utils/errorHandler";
import { AuthModalType } from "../../../utils/constants";
import { RegisterUserInput } from "../../../typin";
import { URL } from "../../../utils/url";
import Image from "next/image";
import { useUserContext } from "../../../context/user.context";
const { useForm } = Form;
interface Props {
  setVisibleAuthModal: (value: AuthModalType | undefined) => void;
  onAuthVerifyCode: (data: RegisterUserInput) => void;
}
export const AuthRegisterScene = ({
  setVisibleAuthModal,
  onAuthVerifyCode,
}: Props) => {
  const [form] = useForm();
  const [isOpen, setIsOpen] = useState(false);

  const onFinish = async (values: any) => {
    try {
      let _data: RegisterUserInput;

      _data = { email: values.email, password: values.password };

      try {
        const data = await fetch(`${URL}/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: form.getFieldValue("userName"),
            email: form.getFieldValue("email"),
            password: form.getFieldValue("password"),
            isEmailConfirmed: true,
          }),
        }).then((res) => res.json());
        if (data.error) showError(data.error.message);
        onAuthVerifyCode(_data);
        setVisibleAuthModal(AuthModalType.ConfirmCode);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      showError("Дахин оролдоно уу?");
    }
  };

  return (
    <div>
      <div className="auth-container-body">
        <h2 style={{ textAlign: "center" }}>Бүртгүүлэх</h2>
        <Image
          src="/assets/images/logo.jpg"
          alt="logo"
          width={80}
          height={80}
          className="auth-logo"
        />
        <Form
          form={form}
          autoComplete="off"
          initialValues={{
            email: undefined,
            password: undefined,
            passwordAgain: undefined,
            remember: false,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="userName"
            rules={[
              { required: true, message: "Username оруулна уу," },
              {
                message: "Зөв username оруулна уу",
              },
            ]}
          >
            <Input
              name="userName"
              size="large"
              placeholder=" Username хаяг"
              prefix={<MailOutlined className="mr-10" />}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "И-мэйлээ оруулна уу," },
              {
                type: "email",
                message: "Зөв и-мэйл оруулна уу",
              },
            ]}
          >
            <Input
              name="email"
              size="large"
              placeholder=" И-мэйл хаяг"
              prefix={<MailOutlined className="mr-10" />}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Нууц үгээ оруулна уу" }]}
          >
            <Input.Password
              size="large"
              placeholder="Нууц үг"
              prefix={<LockOutlined className="mr-10" />}
              type="password"
              name="password"
            />
          </Form.Item>
          <Form.Item
            name="passwordAgain"
            rules={[
              {
                required: true,
                message: "Нууц үгээ оруулна уу",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error("Нууц үг таарахгүй байна!"));
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Нууц үг давтах"
              prefix={<LockOutlined className="mr-10" />}
              type="password"
              name="passwordAgain"
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error(
                          "Бүртгүүлэхийн тулд үйлчилгээний нөхцөлийг зөвшөөрнө үү"
                        )
                      ),
              },
            ]}
          >
            <Checkbox>
              <Button
                type="link"
                onClick={() => setIsOpen(true)}
                className="p-0 text-under"
              >
                Үйлчилгээний нөхцөлийг
              </Button>{" "}
              зөвшөөрч байна
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" size="large" block htmlType="submit">
              Бүртгүүлэх
            </Button>
          </Form.Item>
          <div className="social-container">
            <Divider className="m-0 fs-13">Эсвэл</Divider>
            {/* <LoginFacebookButton />
                  <LoginGoogleButton />
                  <LoginAppleButton /> */}
          </div>
        </Form>
        <div className="auth-container-footer">
          <span>Та бүртгэлтэй юу?</span>
          <Button
            type="link"
            size="large"
            onClick={() => setVisibleAuthModal(AuthModalType.Login)}
          >
            Нэвтрэх
          </Button>
        </div>
      </div>
      <Modal
        visible={isOpen}
        title="Үйлчилгээний нөхцөлтэй танилцах"
        centered
        width={800}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
        footer={[
          <Button key="back" onClick={() => setIsOpen(false)}>
            Ok
          </Button>,
        ]}
      >
        <p>Энд үйлчилгээний нөхцөл байна.</p>
      </Modal>
    </div>
  );
};
