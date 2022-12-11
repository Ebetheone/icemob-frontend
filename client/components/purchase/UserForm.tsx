"use client";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import CountryPhoneInput from "antd-country-phone-input";
import { useRouter } from "next/navigation";
import React from "react";
import { useUserContext } from "../../context/user.context";
import { DetailType } from "../../utils/constants";
import { URL } from "../../utils/url";

export enum Address {
  Baganuur = "Багануур",
  Bayarhangai = "Баярхангай",
  Bayangol = "Баянгол",
  Bayanzurkh = "Баянзүрх",
  Chingeltei = "Чингэлтэй",
  KhanUul = "Хан Уул",
  Nalaikh = "Налайх",
  SHD = "Сонгино Хайрхан",
  Sukhbaatar = "Сүхбаатар",
}

type Props = {
  setDetailForm: (form: DetailType) => void;
};

const UserForm = ({ setDetailForm }: Props) => {
  const { user, setUserData } = useUserContext();

  const initialValues = {
    firstName: undefined,
    lastName: undefined,
    phoneNumber: undefined,
    district: undefined,
    khoroo: undefined,
  };
  const { Option } = Select;
  const router = useRouter();
  const onFinish = async (values: any) => {
    const accountData = await fetch(`${URL}/auth/user/update/${user?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
        district: values.district,
        khoroo: values.khoroo,
      }),
    }).then((res) => res.json());
    if (accountData.result) {
      setUserData(accountData.result);
      window.localStorage.setItem(
        "USER_DATA",
        JSON.stringify(accountData.result)
      );

      setDetailForm(DetailType.PurchaseInformation);
      router.push("/purchase");
    }
    // if (codeData.error) showError(codeData.error.message);
    // if (codeData.result) showSuccess(codeDat.description);
  };
  const handleChange = () => {};
  return (
    <div>
      <p className="h-25">Мэдээлэл</p>
      <Form
        name="jobForm"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={(errorInfo) =>
          console.log("onFinishFailed === error", errorInfo)
        }
        initialValues={initialValues}
      >
        <Form.Item
          name="firstName"
          labelCol={{ span: 24 }}
          label={<label style={{ color: "white" }}>Овог</label>}
        >
          <Input placeholder="Овог" size="large" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label={<label style={{ color: "white" }}>Нэр</label>}
          labelCol={{ span: 24 }}
        >
          <Input placeholder="Нэр" size="large" />
        </Form.Item>
        <Form.Item
          name="district"
          label={<label style={{ color: "white" }}>Дүүрэг сонгох</label>}
        >
          <Select
            style={{ width: "100%" }}
            onChange={handleChange}
            size="large"
            placeholder="Дүүрэг сонгоно уу"
          >
            <Option value={Address.Baganuur}>{Address.Baganuur}</Option>
            <Option value={Address.Bayarhangai}>{Address.Bayarhangai}</Option>
            <Option value={Address.Bayangol}>{Address.Bayangol}</Option>
            <Option value={Address.Bayanzurkh}>{Address.Bayanzurkh}</Option>
            <Option value={Address.Chingeltei}>{Address.Chingeltei}</Option>
            <Option value={Address.KhanUul}>{Address.KhanUul}</Option>
            <Option value={Address.Nalaikh}>{Address.Nalaikh}</Option>
            <Option value={Address.SHD}>{Address.SHD}</Option>
            <Option value={Address.Sukhbaatar}>{Address.Sukhbaatar}</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="khoroo"
          label={<label style={{ color: "white" }}>Хороо сонгох</label>}
        >
          <Input placeholder="Хороо" size="large" />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          label={<label style={{ color: "white" }}>Утасны дугаар</label>}
        >
          <Input placeholder="Утасны дугаар" size="large" />
        </Form.Item>

        <div className="form-btn-center">
          <button className="btn-yellow" type="submit">
            Өөрчлөлтийг хадгалах
          </button>
        </div>
      </Form>
    </div>
  );
};

export default UserForm;
