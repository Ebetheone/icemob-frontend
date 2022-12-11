"use client";
import React, { Suspense, use, useEffect, useState } from "react";
import { Tabs, Layout, Row, Col, Radio, Space } from "antd";

import { SideCategoryTabs } from "../../components/product/Tab1";
import { Records } from "../../components/product/Records";
import { RecordPlayer } from "../../components/product/RecordPlayer";
import { URL } from "../../utils/url";
import CategoriesData from "../../utils/json/categories.json";
import { queryClient } from "../../utils/queryClient";
import { useUserContext } from "../../context/user.context";

type PageProps = {
  searchParams: {
    type: string;
    category: string;
  };
};
export enum TabType {
  Accessories = "ACCESSORIES",
  Pyanz = "PYANZ",
}

export default function ProductListComponent(props: any) {
  const [products, setProducts] = useState([]);
  const [players, setPLayers] = useState([]);
  const [tab, setTab] = useState("1");

  const { result } = use(
    queryClient("products", () =>
      fetch(`${URL}/product/all`).then((res) => res.json())
    )
  );

  const { Header, Footer, Sider, Content } = Layout;

  const productFilter = (value: string) => {
    const prod = result.filter((item: any) => {
      return (
        item.category.find((cat: any) => cat.name == value) &&
        item.type.find((type: any) => type.name == "Пянз")
      );
    });
    setProducts(prod);
  };
  const playerFilter = () => {
    const prod = result.filter((item: any) => {
      return item.type.find((type: any) => type.name == "Пянзны хэрэгсэл");
    });
    setPLayers(prod);
  };
  useEffect(() => {
    if (tab == "2") playerFilter();
  }, [tab]);
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  return (
    <div className="products">
      <Layout>
        <Sider style={{ backgroundColor: "white" }}>
          <Tabs onChange={(e) => setTab(e)} tabPosition="left" className="Tab1">
            <Tabs.TabPane tab="Пянз" key="1">
              <Suspense fallback={<p>Loading records</p>}>
                <Records data={products} />
              </Suspense>
            </Tabs.TabPane>

            <Tabs.TabPane tab="Пянзны хэрэгсэл" key="2">
              <Suspense fallback={<p>Loading players</p>}>
                <RecordPlayer data={players} />
              </Suspense>
            </Tabs.TabPane>
          </Tabs>
        </Sider>
        <Content className="content">
          {tab == "1" && (
            <Row>
              <Col span={20} offset={2}>
                <Radio.Group
                  style={radioStyle}
                  defaultValue={CategoriesData[9].name}
                  onChange={(e) => {
                    productFilter(e.target.value);
                  }}
                  className="radioGroup"
                >
                  {CategoriesData.map((_data) => (
                    <Radio.Button key={_data.id} value={_data.name}>
                      {_data.name}
                    </Radio.Button>
                  ))}
                </Radio.Group>
              </Col>
            </Row>
          )}
        </Content>
      </Layout>
    </div>
  );
}
