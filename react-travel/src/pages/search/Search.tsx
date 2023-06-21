import React, { useEffect } from "react";
import styles from "./Search.module.css";
import { Header, Footer, FilterArea, ProductList } from "../../components";
import { useSearchParams, useLocation } from "react-router-dom";
import { useSelector, useAppDispatch } from "../../redux/hooks";
import { productDetailSlice } from "../../redux/productDetail/slice";
import { getProductSearch } from "../../redux/productSearch/slice";
import { Spin } from "antd";

type MatchParams = {
  keywords: string;
};

export const SearchPage: React.FC = () => {
  const { data, loading, error, pagination } = useSelector(
    (state) => state.productSearch
  );
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const keywords = searchParams.get("keywords");
  const onPageChange = (nextPage, pageSize) => {
    dispatch(
      getProductSearch({
        keywords,
        nextPage: nextPage,
        pageSize: pageSize,
      })
    );
  };
  useEffect(() => {
    onPageChange(1, 10);
  }, [location]);
  if (error) return <div>{error}</div>;
  if (loading) return <Spin />;
  return (
    <>
      <Header />
      <div className={styles["page-content"]}>
        <div className={styles["page-list-container"]}>
          <FilterArea />
        </div>
        <div className={styles["page-list-container"]}>
          <ProductList
            data={data}
            paging={pagination}
            onPageChange={onPageChange}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};
