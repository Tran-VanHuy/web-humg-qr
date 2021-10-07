import React from "react";
import Footer from "./footer";
import Header from "./Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageLogin from "../pages/Login";
import HomePage from "../pages/Home";

const Layout = ({ children }) => {
  return (
    <div>
        <Header />
          <div> {children} </div>
        <Footer />
    </div>
  );
};

export default Layout;
