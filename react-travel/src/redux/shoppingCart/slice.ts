/*
 * @Author: xiewenhao
 * @Date: 2023-06-27 14:03:18
 * @LastEditTime: 2023-06-27 14:26:02
 * @Description:
 */
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { DefaultState } from "../../types/defaule";
import axios from "axios";

interface ShoppingCartItem {
  id: number | string;
  touristRouteId: string;
  touristRoute: any;
  shoppingCartId: string;
  originalPrice: number;
  discountPresent: null | string;
}

interface ShoppingCartState extends DefaultState {
  shoppingCart: ShoppingCartItem[];
}

export const getShoppingCart = createAsyncThunk(
  "shoppingCart/getShoppingCart",
  async () => {
    const res = await axios.get("http://123.56.149.216:8080/api/shoppingCart");
    return res.data.shoppingCartItems;
  }
);

const initialState: ShoppingCartState = {
  error: null,
  shoppingCart: [],
  loading: false,
};

export const ShoppingCartSlice = createSlice({
  name: "shoppingCart",
  reducers: {},
  initialState,
  extraReducers: {
    [getShoppingCart.pending.type]: (state) => {
      state.loading = true;
    },
    [getShoppingCart.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    [getShoppingCart.fulfilled.type]: (
      state,
      action: PayloadAction<ShoppingCartItem[]>
    ) => {
      state.error = null;
      state.shoppingCart = action.payload;
      state.loading = false;
    },
  },
})
