/*
 * @Author: xiewenhao
 * @Date: 2023-05-30 09:53:02
 * @LastEditTime: 2023-06-12 16:10:24
 * @Description:
 */
import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home,SignIn,RegisterPage } from "./pages";
function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/signIn" component={SignIn}></Route>
          <Route path='/register' component={RegisterPage}></Route>
          <Route render={() => <h1>404</h1>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
