"use client";
import React from "react";
import { Row, Col } from "antd";
import Image from "next/image";
type Props = {
  id: number;
  data: any;
};
const InformationList = ({ id, data }: Props) => {
  if (id % 2 == 0) {
    return (
      <div className="informationDetail">
        <Row>
          <Col span={12}>
            <div className="informationText p-90">
              <p className="title-3em">{data.title}</p>
              <p className="h-20">{data.desc}</p>
              <p className="yellow h-20">{data.date}</p>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <Image src={data.img} alt="zurag" width={720} height={720} />
            </div>
          </Col>
        </Row>
      </div>
    );
  } else {
    return (
      <div className="informationDetail">
        <Row>
          <Col span={12}>
            <div>
              <Image src={data.img} alt="zurag" width={720} height={720} />
            </div>
          </Col>
          <Col span={12}>
            <div className="informationText p-90">
              <p className="title-3em">{data.title}</p>
              <p className="h-20">{data.desc}</p>
              <p className="yellow h-20">{data.date}</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
};

export default InformationList;
