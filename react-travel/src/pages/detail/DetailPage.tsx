/*
 * @Author: xiewenhao
 * @Date: 2023-06-15 16:54:41
 * @LastEditTime: 2023-06-16 16:57:29
 * @Description:
 */
/*
 * @Author: xiewenhao
 * @Date: 2023-06-12 17:00:52
 * @LastEditTime: 2023-06-16 16:18:46
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

const { Link } = Anchor;

type MatchParams = {
  id: string;
};

const { RangePicker } = DatePicker;

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

export const DetailPage: React.FC = () => {
  const { id } = useParams<MatchParams>();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<null | string>(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await await axios.get(
          `http://123.56.149.216:8080/api/touristRoutes/${id}`
        );
        setProduct(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error instanceof Error ? error.message : "error");
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
                price={product.price}
                title={product.title}
                shortDescription={product.shortDescription}
                coupons={product.coupons}
                points={product.points}
                discount={product.discount}
                rating={product.rating}
                pictures={product.touristRoutePictures}
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
            dangerouslySetInnerHTML={{ __html: product.features }}
            style={{ margin: 50 }}
          ></div>
        </div>
        <div id="fees" className={styles["product-detail-container"]}>
          <Divider orientation="center">
            <Typography.Title level={3}>费用</Typography.Title>
          </Divider>
          <div
            dangerouslySetInnerHTML={{ __html: product.fees }}
            style={{ margin: 50 }}
          ></div>
        </div>
        <div id="notes" className={styles["product-detail-container"]}>
          <Divider orientation="center">
            <Typography.Title level={3}>购订须知</Typography.Title>
          </Divider>
          <div
            dangerouslySetInnerHTML={{ __html: product.notes }}
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
