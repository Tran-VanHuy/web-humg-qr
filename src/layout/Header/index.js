import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";

const Header = () => {
  return (
    <div className="wrapper-header">
      <img src="/images/header.JPG" alt="" />
      <div className="login">
        <div>icon</div>
            <a href = "/dang-nhap">  <div>Đăng nhập</div></a>
        <div>
          <input
            id="txtSearch"
            name="txtSearch"
            className="isearch"
            value=""
            placeholder="Tìm kiếm..."
            type="text"
          />
        </div>
        <div>americar</div>
      </div>
    </div>
  );
};

export default Header;
