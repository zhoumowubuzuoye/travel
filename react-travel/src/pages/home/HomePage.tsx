/*
 * @Author: xiewenhao
 * @Date: 2023-06-12 16:11:04
 * @LastEditTime: 2023-06-21 14:02:51
 * @Description:
 */
import React, { useEffect, useState } from "react";
import { SideMenu, Carousel, ProductCollect, Partner } from "../../components";
import { MainLayout } from "../../layout/mainLayout";
import { Row, Col, Typography, Spin } from "antd";
import sideImage from "../../assets/images/sider_2019_12-09.png";
import sideImage1 from "../../assets/images/sider_2019_02-04.png";
import sideImage2 from "../../assets/images/sider_2019_02-04-2.png";
import facebook from "../../assets/images/facebook.png";
import follow from "../../assets/images/follow.png";
import icon from "../../assets/images/icon.png";
import microsoft from "../../assets/images/microsoft.png";
import styles from "./HomePage.module.css";
import { withRouter } from "../../helpers/withRouter";
import { useTranslation } from "react-i18next";
import { useSelector, useAppDispatch } from "../../redux/hooks";
// import { useDispatch } from "react-redux";
import { giveDataActionCreator } from "../../redux/recommendProducts/recommandProductsActions";

interface State {
  productList: any[];
}

const HomePageComponent: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const loading = useSelector((state) => state.recommendProducts.loading);
  const productList = useSelector(
    (state) => state.recommendProducts.productList
  );
  const error = useSelector((state) => state.recommendProducts.error);
  const ChildNode: React.FC = () => {
    return (
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
              {t("home_page.hot_recommended")}
            </Typography.Title>
          }
          products={productList[0].touristRoutes}
          sideImage={sideImage}
        ></ProductCollect>
        <ProductCollect
          title={
            <Typography.Title level={3} type="danger">
              {t("home_page.new_arrival")}
            </Typography.Title>
          }
          products={productList[1].touristRoutes}
          sideImage={sideImage1}
        ></ProductCollect>
        <ProductCollect
          title={
            <Typography.Title level={3} type="success">
              {t("home_page.domestic_travel")}
            </Typography.Title>
          }
          products={productList[2].touristRoutes}
          sideImage={sideImage2}
        ></ProductCollect>
        <Partner
          title={
            <Typography.Title level={3} type="secondary">
              {t("home_page.joint_venture")}
            </Typography.Title>
          }
          imgList={[facebook, icon, follow, microsoft]}
        ></Partner>
      </div>
    );
  };
  useEffect(() => {
    dispatch(giveDataActionCreator());
  }, []);
  if (loading) {
    return <Spin />;
  }
  return (
    <div>
      <MainLayout>
        <ChildNode />
      </MainLayout>
    </div>
  );
};

export const Home = withRouter(HomePageComponent);
