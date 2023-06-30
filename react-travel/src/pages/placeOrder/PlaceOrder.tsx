import React from "react";
import { Row, Col } from "antd";
import { MainLayout } from "../../layout/mainLayout";
import { PaymentForm, CheckOutCard } from "../../components";
import { checkPlaceOrder } from "../../redux/placeOrder/slice";
import { useSelector, useAppDispatch } from "../../redux/hooks";

export const PlaceOrderPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error, currentOrder } = useSelector(
    (state) => state.placeOrder
  );
  return (
    <MainLayout>
      <Row>
        <Col span={12}>
          <PaymentForm />
        </Col>
        <Col span={12}>
          <CheckOutCard
            loading={loading}
            order={currentOrder}
            onCheckout={() => {
              dispatch(checkPlaceOrder(currentOrder.id));
            }}
          />
        </Col>
      </Row>
    </MainLayout>
  );
};
