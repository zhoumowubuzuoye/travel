import React from "react";
import { Image, Col, Divider, Row } from "antd";

interface PropType {
  title: JSX.Element;
  imgList: string[];
}

export const Partner: React.FC<PropType> = ({ title, imgList }) => {
  return (
    <div>
      <Divider orientation="left">{title}</Divider>
      <Row gutter={16}>
        {imgList.map((src) => {
          return (
            <Col key={src} className="gutter-row" span={6}>
              <Image src={src} preview={false}></Image>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
