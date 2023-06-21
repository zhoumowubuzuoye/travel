import React from "react";
import styles from "./ProductIntro.module.css";
import { Typography, Image, Carousel, Table, Rate } from "antd";
import { ColumnsType } from "antd/es/table";

interface PropType {
  title: string;
  shortDescription: string;
  price: string | number;
  coupons: string;
  points: string;
  discount: string;
  rating: string | number;
  pictures: { id: string | number; url: string; touristRouteId: string }[];
}

interface RowType {
  title: string;
  key: number;
  description: string | number | JSX.Element;
}

const columns: ColumnsType<RowType> = [
  {
    title: "title",
    dataIndex: "title",
    key: "title",
    align: "center",
    width: 120,
  },
  {
    title: "description",
    dataIndex: "description",
    key: "description",
    align: "center",
  },
];

export const ProductIntro: React.FC<PropType> = (props) => {
  const {
    title,
    pictures,
    shortDescription,
    price,
    points,
    rating,
    coupons,
    discount,
  } = props;
  const tableDataSource: RowType[] = [
    {
      key: 0,
      title: "路线名称",
      description: title,
    },
    {
      key: 1,
      title: "价格",
      description: (
        <>
          ¥{" "}
          <Typography.Text type="danger" strong>
            {price}
          </Typography.Text>
        </>
      ),
    },
    {
      key: 2,
      title: "限时抢购折扣",
      description: discount ? (
        <>
          ¥ <Typography.Text delete>{price}</Typography.Text>{" "}
          <Typography.Text type="danger" strong>
            ¥ {discount}
          </Typography.Text>
        </>
      ) : (
        "暂无折扣"
      ),
    },
    {
      key: 3,
      title: "领取优惠",
      description: coupons ? discount : "无优惠券可领",
    },
    {
      key: 4,
      title: "线路评价",
      description: (
        <>
          <Rate allowHalf defaultValue={+rating} />
          <Typography.Text style={{ marginLeft: 10 }}>
            {rating} 星
          </Typography.Text>
        </>
      ),
    },
  ];
  return (
    <div className={styles["intro-container"]}>
      <Typography.Title level={4}>{title}</Typography.Title>
      <Typography.Text>{shortDescription}</Typography.Text>
      <div className={styles["intro-detail-content"]}>
        <Typography.Text style={{ marginLeft: 20 }}>
          ￥ <span className={styles["intro-detail-strong-text"]}>{price}</span>
        </Typography.Text>
        <Typography.Text style={{ marginLeft: 50 }}>
          <span className={styles["intro-detail-strong-text"]}>{rating}</span>
        </Typography.Text>
      </div>
      <Carousel autoplay slidesToShow={3}>
        {pictures.map((item) => (
          <Image height={150} src={item.url} key={item.id} preview={false} />
        ))}
      </Carousel>
      <Table<RowType>
        columns={columns}
        dataSource={tableDataSource}
        size="small"
        bordered={false}
        pagination={false}
      />
    </div>
  );
};
