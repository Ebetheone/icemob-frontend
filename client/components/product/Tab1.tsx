"use client";
import { Tabs } from "antd";
export const SideCategoryTabs = () => {
  return (
    <Tabs tabPosition="left" className="Tab1">
      <Tabs.TabPane tab={<div>ЭЛЕКТРОНИК</div>} key="1"></Tabs.TabPane>
      <Tabs.TabPane tab={<div>МОНГОЛ</div>} key="2"></Tabs.TabPane>
      <Tabs.TabPane tab={<div>КИДС</div>} key="3"></Tabs.TabPane>
      <Tabs.TabPane tab={<div>ROCK</div>} key="4"></Tabs.TabPane>
      <Tabs.TabPane tab={<div>REGGAE</div>} key="5"></Tabs.TabPane>
      <Tabs.TabPane tab={<div>SOUNDTRACK</div>} key="6"></Tabs.TabPane>
      <Tabs.TabPane tab={<div>CLASSIC</div>} key="7"></Tabs.TabPane>
      <Tabs.TabPane tab={<div>BLUES</div>} key="8"></Tabs.TabPane>
      <Tabs.TabPane tab={<div>SOUL / R&B </div>} key="9"></Tabs.TabPane>
      <Tabs.TabPane tab={<div>JAZZ </div>} key="10"></Tabs.TabPane>
      <Tabs.TabPane tab={<div>POP </div>} key="11"></Tabs.TabPane>
    </Tabs>
  );
};
