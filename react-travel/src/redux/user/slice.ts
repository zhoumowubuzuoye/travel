/*
 * @Author: xiewenhao
 * @Date: 2023-06-26 09:21:21
 * @LastEditTime: 2023-06-26 10:21:15
 * @Description:
 */
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { DefaultState } from "../../types/defaule";
import axios from "axios";

interface UserState extends DefaultState {
  token: string | null;
  username: string | null;
}

interface QueryParams {
  email: string;
  password: string;
}

const initialState: UserState = {
  token: null,
  loading: false,
  error: null,
  username: null,
};

export const SignIn = createAsyncThunk(
  "signIn/user",
  async (data: QueryParams) => {
    const res = await axios.post("http://123.56.149.216:8080/auth/login", data);
    return res.data.token;
  }
);

export const UserSlice = createSlice({
  name: "user",
  reducers: {
    fetchUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    fetchSignOut: (state) => {
      state.token = null;
      state.username = null;
    },
  },
  initialState,
  extraReducers: {
    [SignIn.pending.type]: (state) => {
      state.loading = true;
    },
    [SignIn.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.error = null;
      state.loading = false;
    },
    [SignIn.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
