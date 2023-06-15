/*
 * @Author: xiewenhao
 * @Date: 2023-06-13 14:52:16
 * @LastEditTime: 2023-06-13 14:55:16
 * @Description:
 */
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
  useDispatch,
} from "react-redux";

import { RootState, AppDispatch } from "./store";

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
