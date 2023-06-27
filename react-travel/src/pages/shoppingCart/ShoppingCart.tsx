import React from "react";
import { MainLayout } from "../../layout/mainLayout";
import { Row, Col, Affix } from "antd";
import styles from "./ShoppingCart.module.css";
import { ProductList, PaymentCard } from "../../components";
import { getShoppingCart } from "../../redux/shoppingCart/slice";

export const ShoppingCart: React.FC = () => {
  return (
    <MainLayout>
      <Row>
        <Col span={16}>
          <div className={styles["product-list-container"]}>
            {/* <ProductList></ProductList> */}
          </div>
        </Col>
        <Col span={8}>
          <Affix>
            <div className={styles["payment-card-container"]}>
              div
              {/* <PaymentCard></PaymentCard> */}
            </div>
          </Affix>
        </Col>
      </Row>
    </MainLayout>
  );
};
