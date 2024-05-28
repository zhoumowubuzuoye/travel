/*
 * @Author: xiewenhao
 * @Date: 2023-05-30 09:53:02
<<<<<<< HEAD
 * @LastEditTime: 2023-06-28 11:24:01
=======
 * @LastEditTime: 2023-06-09 09:19:14
>>>>>>> parent of 23fbce9 (添加合作伙伴)
 * @Description:
 */
import React, { useEffect } from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Footer,
  Header,
  SideMenu,
  Carousel,
  ProductCollect,
} from "./components";
import { Row, Col, Typography } from "antd";
import { productList1, productList2, productList3 } from "./mockups";
import sideImage from "./assets/images/sider_2019_12-09.png";
import sideImage1 from "./assets/images/sider_2019_02-04.png";
import sideImage2 from "./assets/images/sider_2019_02-04-2.png";
function App() {
  const { token } = useSelector((state) => state.user);
  const dispatch = useAppDispatch();
  if (token) axios.defaults.headers.Authorization = `bearer ${token}`;
  useEffect(() => {
    if (token) dispatch(getShoppingCart());
  }, []);
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <div style={{ color: "blue" }}>
              <Carousel />
            </div>
          </Col>
        </Row>
        <ProductCollect
          title={
            <Typography.Title level={3} type="warning">
              爆款推荐
            </Typography.Title>
          }
          products={productList1}
          sideImage={sideImage}
        ></ProductCollect>
        <ProductCollect
          title={
            <Typography.Title level={3} type="danger">
              新品上市
            </Typography.Title>
          }
          products={productList2}
          sideImage={sideImage1}
        ></ProductCollect>
        <ProductCollect
          title={
            <Typography.Title level={3} type="success">
              国内游推荐
            </Typography.Title>
          }
          products={productList3}
          sideImage={sideImage2}
        ></ProductCollect>
      </div>
      <Footer />
    </div>
  );
}

export default App;
