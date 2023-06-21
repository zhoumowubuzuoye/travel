/*
 * @Author: xiewenhao
 * @Date: 2023-06-12 17:00:52
 * @LastEditTime: 2023-06-20 16:26:21
 * @Description:
 */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Spin,
  Row,
  Col,
  DatePicker,
  Divider,
  Typography,
  Menu,
  Anchor,
} from "antd";
import { Header, Footer, ProductIntro, ProductComment } from "../../components";
import styles from "./DetailPage.module.css";
import type { DatePickerProps } from "antd";
import { commentMockData } from "./mockup";
import { useSelector, useAppDispatch } from "../../redux/hooks";
import { getProductDetail } from "../../redux/productDetail/slice";

const { Link } = Anchor;

type MatchParams = {
  id: string;
};

const { RangePicker } = DatePicker;

const onChange: DatePickerProps["onChange"] = (date, dateString) => {};

export const DetailPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<MatchParams>();
  const loading = useSelector((state) => state.productDetail.loading);
  const data = useSelector((state) => state.productDetail.data);
  const error = useSelector((state) => state.productDetail.error);
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        dispatch(getProductDetail(id));
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
    );
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <Header></Header>
      <div className={styles["page-content"]}>
        <div className={styles["product-intro-container"]}>
          <Row>
            <Col span={13}>
              <ProductIntro
                price={data.price}
                title={data.title}
                shortDescription={data.shortDescription}
                coupons={data.coupons}
                points={data.points}
                discount={data.discount}
                rating={data.rating}
                pictures={data.touristRoutePictures}
              />
            </Col>
            <Col span={11}>
              <RangePicker style={{ marginTop: 20 }} />
            </Col>
          </Row>
        </div>
        <Anchor className={styles["product-detail-anchor"]}>
          <Menu mode="horizontal">
            <Menu.Item key={1}>
              <Link href="#feature" title="产品特色"></Link>
            </Menu.Item>
            <Menu.Item key={3}>
              <Link href="#fees" title="费用"></Link>
            </Menu.Item>
            <Menu.Item key={4}>
              <Link href="#notes" title="购订须知"></Link>
            </Menu.Item>
            <Menu.Item key={5}>
              <Link href="#comments" title="用户评价"></Link>
            </Menu.Item>
          </Menu>
        </Anchor>
        <div className={styles["product-detail-container"]} id="feature">
          <Divider orientation="center">
            <Typography.Title level={3}>产品特色</Typography.Title>
          </Divider>
          <div
            dangerouslySetInnerHTML={{ __html: data.features }}
            style={{ margin: 50 }}
          ></div>
        </div>
        <div id="fees" className={styles["product-detail-container"]}>
          <Divider orientation="center">
            <Typography.Title level={3}>费用</Typography.Title>
          </Divider>
          <div
            dangerouslySetInnerHTML={{ __html: data.fees }}
            style={{ margin: 50 }}
          ></div>
        </div>
        <div id="notes" className={styles["product-detail-container"]}>
          <Divider orientation="center">
            <Typography.Title level={3}>购订须知</Typography.Title>
          </Divider>
          <div
            dangerouslySetInnerHTML={{ __html: data.notes }}
            style={{ margin: 50 }}
          ></div>
        </div>
        <div id="comments" className={styles["product-detail-container"]}>
          <Divider orientation="center">
            <Typography.Title level={3}>用户评价</Typography.Title>
          </Divider>
          <ProductComment data={commentMockData}></ProductComment>
        </div>
      </div>
      <Footer />
    </>
  );
};
