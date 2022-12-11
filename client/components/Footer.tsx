"use client";
import React from "react";
import Image from "next/image";
import { Layout } from "antd";
import Link from "next/link"
import {
  PhoneOutlined,
  MailOutlined,
  CompassOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        {/* <Image src="/assets/images/logo.png" /> */}
        <div>
          <h3> Туслах цэс</h3>
          <Link href='./product'>
            <p>Бүтээгдэхүүн</p>
          </Link>
          <Link href="/">
            <p>Бидний тухай</p>
          </Link>
          <Link href="/">
            <p>Мэдээ мэдээлэл</p>
          </Link>
          <p>Түгээмэл асуултууд</p>
        </div>
        <div>
     <Link href="/contact">
        <h3> Холбоо барих</h3>
     </Link>
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
        </div>
      </div>
      <Layout className="footer-bottom">
        <p className="copyright">COPYRIGHT © 2022 ICEMOB</p>
      </Layout>
    </div>
  );
};
export default Footer;
