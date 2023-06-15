/*
 * @Author: xiewenhao
 * @Date: 2023-06-13 16:41:57
 * @LastEditTime: 2023-06-15 14:02:07
 * @Description:
 */

import {
  FETCH_RECOMMEND_PRODUCTS_FAIL,
  FETCH_RECOMMEND_PRODUCTS_START,
  FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  RecommendProductsAction,
} from "./recommandProductsActions";

interface RecommendProductsState {
  productList: any[];
  loading: boolean;
  error: string | null;
}

const defaultState: RecommendProductsState = {
  loading: true,
  productList: [],
  error: null,
};

export default (state = defaultState, action: RecommendProductsAction) => {
  switch (action.type) {
    case FETCH_RECOMMEND_PRODUCTS_FAIL:
      return { ...state, error: action.payload, loading: false };
    case FETCH_RECOMMEND_PRODUCTS_START:
      return { ...state, loading: true };
    case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
      return { ...state, loading: false, productList: action.payload };
    default:
      return state;
  }
};
