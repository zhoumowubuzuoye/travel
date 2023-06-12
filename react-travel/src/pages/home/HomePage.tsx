import React from "react";
import {
  Footer,
  Header,
  SideMenu,
  Carousel,
  ProductCollect,
  Partner,
} from "../../components";
import { Row, Col, Typography } from "antd";
import { productList1, productList2, productList3 } from "../../mockups";
import sideImage from "../../assets/images/sider_2019_12-09.png";
import sideImage1 from "../../assets/images/sider_2019_02-04.png";
import sideImage2 from "../../assets/images/sider_2019_02-04-2.png";
import facebook from "../../assets/images/facebook.png";
import follow from "../../assets/images/follow.png";
import icon from "../../assets/images/icon.png";
import microsoft from "../../assets/images/microsoft.png";
import styles from "./HomePage.module.css";
export const Home: React.FC = () => {
  return (
    <div>
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
        <Partner
          title={
            <Typography.Title level={3} type="secondary">
              合作伙伴
            </Typography.Title>
          }
          imgList={[facebook, icon, follow, microsoft]}
        ></Partner>
      </div>
      <Footer />
    </div>
  );
};
