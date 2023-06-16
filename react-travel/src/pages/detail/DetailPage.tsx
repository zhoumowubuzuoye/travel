/*
 * @Author: xiewenhao
 * @Date: 2023-06-12 17:00:52
 * @LastEditTime: 2023-06-16 10:08:48
 * @Description:
 */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Spin, Row, Col, DatePicker } from "antd";
import { Header, Footer,ProductIntro } from "../../components";
import styles from "./DetailPage.module.css";
import type { DatePickerProps } from "antd";

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
            <Col span={13}></Col>
            <Col span={11}>
              <RangePicker  style={{ marginTop: 20 }} />
            </Col>
          </Row>
        </div>
        <div className={styles["product-detail-anchor"]}></div>
        <div className={styles["product-detail-container"]} id="feature"></div>
        <div id="fees" className={styles["product-detail-container"]}></div>
        <div id="note" className={styles["product-detail-container"]}></div>
        <div id="comments" className={styles["product-detail-container"]}></div>
      </div>
      <Footer />
    </>
  );
};
