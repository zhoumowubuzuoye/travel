import React from "react";
import styles from "./ProductCollect.module.css";
import { Row, Col, TransferProps, Divider } from "antd";
import { ProductImage } from "./ProductImage";

interface PropType {
  title: JSX.Element;
  sideImage: string;
  products: any[];
}

export const ProductCollect: React.FC<PropType> = ({
  title,
  sideImage,
  products,
}) => {
  return (
    <div className={styles.content}>
      <Divider orientation="left">{title}</Divider>
      <Row gutter={4}>
        <Col span={4}>
          <img src={sideImage} className={styles["side-image"]} alt="" />
        </Col>
        <Col span={20}>
          <Row>
            <Col span={12}>
              <ProductImage
                id={products[0].id}
                size={"large"}
                title={products[0].title}
                imageSrc={products[0].touristRoutePictures[0].url}
                price={products[0].price}
              ></ProductImage>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={12}>
                  <ProductImage
                    id={products[1].id}
                    size={"small"}
                    title={products[1].title}
                    imageSrc={products[1].touristRoutePictures[0].url}
                    price={products[1].price}
                  ></ProductImage>
                </Col>
                <Col span={12}>
                  <ProductImage
                    id={products[2].id}
                    size={"small"}
                    title={products[2].title}
                    imageSrc={products[2].touristRoutePictures[0].url}
                    price={products[2].price}
                  ></ProductImage>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <ProductImage
                    id={products[3].id}
                    size={"small"}
                    title={products[3].title}
                    imageSrc={products[3].touristRoutePictures[0].url}
                    price={products[3].price}
                  ></ProductImage>
                </Col>
                <Col span={12}>
                  <ProductImage
                    id={products[4].id}
                    size={"small"}
                    title={products[4].title}
                    imageSrc={products[4].touristRoutePictures[0].url}
                    price={products[4].price}
                  ></ProductImage>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <ProductImage
                id={products[5].id}
                size={"small"}
                title={products[5].title}
                imageSrc={products[5].touristRoutePictures[0].url}
                price={products[5].price}
              ></ProductImage>
            </Col>
            <Col span={6}>
              <ProductImage
                id={products[6].id}
                size={"small"}
                title={products[6].title}
                imageSrc={products[6].touristRoutePictures[0].url}
                price={products[6].price}
              ></ProductImage>
            </Col>
            <Col span={6}>
              <ProductImage
                id={products[7].id}
                size={"small"}
                title={products[7].title}
                imageSrc={products[7].touristRoutePictures[0].url}
                price={products[7].price}
              ></ProductImage>
            </Col>
            <Col span={6}>
              <ProductImage
                id={products[8].id}
                size={"small"}
                title={products[8].title}
                imageSrc={products[8].touristRoutePictures[0].url}
                price={products[8].price}
              ></ProductImage>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
