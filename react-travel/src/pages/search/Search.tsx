import React, { useEffect } from "react";
import styles from "./Search.module.css";
import { Header, Footer, FilterArea, ProductList } from "../../components";
import { useParams } from "react-router-dom";
import { useSelector, useAppDispatch } from "../../redux/hooks";
import { productDetailSlice } from "../../redux/productDetail/slice";
import { getProductSearch } from "../../redux/productSearch/slice";

type MatchParams = {
  keywords: string;
};

export const Search: React.FC = () => {
  const { data, loading, error } = useSelector((state) => state.productSearch);
  const dispatch = useAppDispatch();
  const { keywords } = useParams<MatchParams>();
  useEffect(() => {
    const fetchData = () => {
      if (keywords) dispatch(getProductSearch(keywords));
    };
    fetchData();
  }, [keywords]);
  return (
    <>
      <Header />
      <div className={styles["page-content"]}></div>
      <div className={styles["page-list-container"]}>
        <FilterArea />
      </div>
      <div className={styles["page-list-container"]}>
        {/* <ProductList /> */}
      </div>
      <Footer />
    </>
  );
};
