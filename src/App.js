import React from "react";
import "./App.css";
import HomePage from "./pages/Home";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Manage from "./pages/SystemManagement";
import PageNewDetail from "./pages/NewDetail";
import PageLogin from "./pages/Login";
import PageGaneralNews from "./pages/GeneralNews";
import { createMemoryHistory } from 'history';

function App() {
  const history = createMemoryHistory();
  console.log(localStorage.getItem("token"));
  return (
    <>
    <div className="App">
      <BrowserRouter history = {history}>
        <Switch>
          <Route path="/tin-tuc/:slug" component={PageNewDetail} />
          <Route
            path="/quan-ly-he-thong"
            render={() => {
              return localStorage.getItem("token") ? (
                <Manage />
              ) : (
                <Redirect to="/dang-nhap" />
              );
            }}
          />
          <Route path="/tin-tuc" component={PageGaneralNews} />
          <Route path="/dang-nhap" component={PageLogin} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
