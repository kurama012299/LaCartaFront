import React from 'react';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import  Icon from "../components/Icon";
import Drink from "../assets/icons/icon-drink.png"



const Tabss = () => (
  <Tabs
    defaultActiveKey="1"
    items={[<Icon src={Drink}></Icon>, AndroidOutlined].map((Icon, i) => {
      const id = String(i + 1);
      return {
        key: id,
        label: `Tab ${id}`,
        children: `Tab ${id}`,
        icon: <Icon />,
      };
    })}
  />
);
export default Tabss;