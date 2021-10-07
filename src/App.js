import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Manage from "./pages/SystemManagement";
import PageNewDetail from "./pages/NewDetail";
import PageLogin from "./pages/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "./redux/Login/action";
import PageGaneralNews from "./pages/GeneralNews";
import Header from "./layout/Header";
import Layout from "./layout";

function App() {
  const { dataInfo } = useSelector((state) => state.userReducer);
  console.log({ dataInfo });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userLogin());
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/tin-tuc/:slug" component={PageNewDetail} />
          <Route
            path="/quan-ly-he-thong"
            render={() => {
              return localStorage.getItem("accesstoken") ? (
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
      </Router>
    </div>
  );
}

export default App;
