import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Image, Typography } from "antd";

interface Proptype extends RouteComponentProps {
  id: number | string;
  size: "large" | "small";
  title: string;
  imageSrc: string;
  price: string | number;
}

const ProductImageComponent: React.FC<Proptype> = ({
  id,
  size,
  title,
  imageSrc,
  price,
  history,
  location,
  match,
}) => {
  return (
    <div onClick={() => history.push(`/detail/${id}`)}>
      {size === "large" ? (
        <Image src={imageSrc} height={285} width={490} preview={false}></Image>
      ) : (
        <Image src={imageSrc} height={120} width={240} preview={false}></Image>
      )}
      <div>
        <Typography.Text type="secondary">
          {title?.slice(0, 25)}
        </Typography.Text>
        <Typography.Text type="danger" strong>
          {" "}
          ￥ {price} 起
        </Typography.Text>
      </div>
    </div>
  );
};

export const ProductImage = withRouter(ProductImageComponent);
