/*
 * @Author: xiewenhao
 * @Date: 2023-06-13 09:31:31
 * @LastEditTime: 2023-06-28 13:32:33
 * @Description:
 */
import { createStore, applyMiddleware } from "redux";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { productDetailSlice } from "./productDetail/slice";
import { productSearchSlice } from "./productSearch/slice";
import { UserSlice } from "./user/slice";
import { ShoppingCartSlice } from "./shoppingCart/slice";
import { placeOrderSlice } from "./placeOrder/slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer,
  user: UserSlice.reducer,
  shoppingCart: ShoppingCartSlice.reducer,
  placeOrder: placeOrderSlice.reducer,
});

// const store = createStore(rootReducer, applyMiddleware(thunk));

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDwfaultMiddleware) =>
    getDwfaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default { store, persistor };
