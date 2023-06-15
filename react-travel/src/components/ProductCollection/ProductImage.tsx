import React from "react";
import { Link } from "react-router-dom";
import { Image, Typography } from "antd";

interface Proptype {
  id: number | string;
  size: "large" | "small";
  title: string;
  imageSrc: string;
  price: string | number;
}

export const ProductImage: React.FC<Proptype> = ({
  id,
  size,
  title,
  imageSrc,
  price,
}) => {
  return (
    <Link to={`detail/${id}`}>
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
    </Link>
  );
};
