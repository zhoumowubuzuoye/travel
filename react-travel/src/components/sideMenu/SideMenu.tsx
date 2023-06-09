import React from "react";
import styles from "./SideMenu.module.css";
import { sideMenuList } from "./mockup";
import { Menu } from "antd";
import { GlobalOutlined } from "@ant-design/icons";


export const SideMenu: React.FC = () => {
  return (
    <Menu
      mode={"vertical"}
      className={styles['side-menu']}
      items={sideMenuList.map((item) => ({
        key: item.title,
        label: item.title,
        icon: <GlobalOutlined />,
        children: item.subMenu.map((itemchild) => ({
          key: itemchild.title,
          label: itemchild.title,
        })),
      }))}
    />
  );
};
