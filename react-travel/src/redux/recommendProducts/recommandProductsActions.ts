/*
 * @Author: xiewenhao
 * @Date: 2023-06-13 16:37:35
 * @LastEditTime: 2023-06-15 14:18:32
 * @Description:
 */

import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import axios from "axios";

export const FETCH_RECOMMEND_PRODUCTS_START = "FETCH_RECOMMEND_PRODUCTS_START";
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS =
  "FETCH_RECOMMEND_PRODUCTS_SUCCESS";
export const FETCH_RECOMMEND_PRODUCTS_FAIL = "FETCH_RECOMMEND_PRODUCTS_FAIL";

interface FetchRecommendProductsFailAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL;
  payload: string;
}
interface FetchRecommendProductsSuccessAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS;
  payload: any[];
}
interface FetchRecommendProductsStartAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_START;
}

export type RecommendProductsAction =
  | FetchRecommendProductsFailAction
  | FetchRecommendProductsSuccessAction
  | FetchRecommendProductsStartAction;

export const FetchRecommendProductsFailActionCreator = (
  data
): FetchRecommendProductsFailAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: data,
  };
};

export const FetchRecommendProductsStartActionCreator =
  (): FetchRecommendProductsStartAction => {
    return {
      type: FETCH_RECOMMEND_PRODUCTS_START,
    };
  };

export const FetchRecommendProductsSuccessActionCreator = (
  data
): FetchRecommendProductsSuccessAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const giveDataActionCreator =
  (): ThunkAction<void, RootState, unknown, RecommendProductsAction> =>
  async (dispatch, getState) => {
    dispatch(FetchRecommendProductsStartActionCreator());
    try {
      const res = await axios.get(
        "http://123.56.149.216:8080/api/productCollections"
      );
      dispatch(FetchRecommendProductsSuccessActionCreator(res.data));
    } catch (error) {
      dispatch(FetchRecommendProductsFailActionCreator(error));
    }
  };
