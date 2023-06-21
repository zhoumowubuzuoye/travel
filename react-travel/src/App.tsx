/*
 * @Author: xiewenhao
 * @Date: 2023-05-30 09:53:02
 * @LastEditTime: 2023-06-12 16:10:24
 * @Description:
 */
import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, SignIn, RegisterPage, DetailPage, Search } from "./pages";
function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/detail/:id" element={<DetailPage />}></Route>
          <Route path="/search/:keywords" element={<Search />}></Route>
          <Route path="*" element={<h1>404</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
