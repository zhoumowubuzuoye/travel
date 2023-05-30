/*
 * @Author: xiewenhao
 * @Date: 2023-05-30 09:53:02
 * @LastEditTime: 2023-05-30 10:34:10
 * @Description:
 */
import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import { Layout, Typography,Input } from "antd";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles['app-header']}>
        <Layout.Header className={styles['main-header']}>
          <img src={logo} alt="" className={styles['App-logo']} />
          <Typography.Title level={3} className={styles.title}>React haha</Typography.Title>
          <Input.Search placeholder="haha" className={styles['search-input']}></Input.Search>
        </Layout.Header>
      </div>
    </div>
  );
}

export default App;
