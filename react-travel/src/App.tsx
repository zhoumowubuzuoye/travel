/*
 * @Author: xiewenhao
 * @Date: 2023-05-30 09:53:02
 * @LastEditTime: 2023-06-27 13:32:38
 * @Description:
 */
import React, { useEffect } from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  SignIn,
  RegisterPage,
  DetailPage,
  SearchPage,
  ShoppingCart,
} from "./pages";
import { useAppDispatch, useSelector } from "./redux/hooks";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const jwt = useSelector((state) => state.user.token);
  return jwt ? children : <Navigate to={"/signin"} />;
};

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/detail/:id" element={<DetailPage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route
            path="/shoppingcart"
            element={
              <PrivateRoute>
                <ShoppingCart></ShoppingCart>
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<h1>404</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
