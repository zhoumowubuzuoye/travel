import React, { useEffect } from "react";
import { Row, Col, Affix } from "antd";
import { ProductList, PaymentCard } from "../../components";
import { useAppDispatch, useSelector } from "../../redux/hooks";
import { getShoppingCart } from "../../redux/shoppingCart/slice";
import styles from "./ShoppingCart.module.css";
import {
  delShoppingCartItems,
  checkShoppingCart,
} from "../../redux/shoppingCart/slice";
import { MainLayout } from "../../layout/mainLayout";
import { useNavigate } from "react-router-dom";
import Item from "antd/lib/list/Item";

export const ShoppingCart: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const { loading, error, shoppingCart } = useSelector(
    (state) => state.shoppingCart
  );
  useEffect(() => {
    dispatch(getShoppingCart());
  }, []);
  return (
    <MainLayout>
      <Row>
        <Col span={16}>
          <div className={styles["product-list-container"]}>
            <ProductList
              data={shoppingCart.map((item) => item.touristRoute)}
            ></ProductList>
          </div>
        </Col>
        <Col span={8}>
          <Affix>
            <div className={styles["payment-card-container"]}>
              <PaymentCard
                loading={loading}
                originalPrice={shoppingCart
                  .map((item) => item.originalPrice)
                  .reduce((per, next) => per + next, 0)}
                price={shoppingCart
                  .map((item) => item.discountPresent)
                  .reduce((per, next) => per + next, 0)}
                onCheckout={() => {
                  if(shoppingCart.length>0){
                    dispatch(checkShoppingCart())
                    navigate('/placeorder')
                  }else{
                    return
                  }
                }}
                onShoppingCartClear={() => {
                  dispatch(
                    delShoppingCartItems(shoppingCart.map((item) => item.id))
                  ).then(() => {
                    dispatch(getShoppingCart());
                  });
                }}
              ></PaymentCard>
            </div>
          </Affix>
        </Col>
      </Row>
    </MainLayout>
  );
};
