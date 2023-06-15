/*
 * @Author: xiewenhao
 * @Date: 2023-06-12 17:00:52
 * @LastEditTime: 2023-06-15 16:48:40
 * @Description:
 */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Header, Footer } from "../../components";
import { Spin } from "antd";

type MatchParams = {
  id: string;
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
      <Footer />
    </>
  );
};
