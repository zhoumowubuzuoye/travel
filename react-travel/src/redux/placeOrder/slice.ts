import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DefaultState } from "../../types/defaule";
import { checkShoppingCart } from "../shoppingCart/slice";

interface PlaceOrderState extends DefaultState {
  currentOrder: any;
}

const initialState: PlaceOrderState = {
  loading: false,
  error: null,
  currentOrder: null,
};

export const checkPlaceOrder = createAsyncThunk(
  "placeOrder/checkPlaceOrder",
  async (orderId: string) => {
    await axios.post(
      `http://123.56.149.216:8080/api/orders/${orderId}/placeOrder`
    );
  }
);

export const placeOrderSlice = createSlice({
  name: "placeOrder",
  initialState,
  reducers: {},
  extraReducers: {
    [checkPlaceOrder.pending.type]: (state) => {
      state.loading = true;
    },
    [checkPlaceOrder.fulfilled.type]: (state) => {
      state.loading = false;
      state.error = null;
    },
    [checkPlaceOrder.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = true;
      state.error = action.payload;
    },
    [checkShoppingCart.pending.type]: (state) => {
      state.loading = true;
    },
    [checkShoppingCart.fulfilled.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = null;
      state.currentOrder = action.payload;
    },
    [checkShoppingCart.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = true;
      state.error = action.payload;
    },
  },
});
