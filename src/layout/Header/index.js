import React, { useEffect } from "react";
import "./style.css";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import {BsPersonCircle} from "react-icons/bs"

const Header = () => {
  useEffect(() => {
    document
      .getElementsByClassName("icon-menu")[0]
      .addEventListener("click", function () {
        document.getElementsByClassName("item-menu")[0].style.display = "block";
      });
      document
      .getElementsByClassName("close-menu")[0]
      .addEventListener("click", function () {
        document.getElementsByClassName("item-menu")[0].style.display = "none";
      });
      
  }, []);
  return (
    <>
      <div className="wrapper-header">
        <img src="/images/header.JPG" alt="" />
        <div className="login">
          <div><BsPersonCircle color="#0c4ca3" /></div>
          <a href="/dang-nhap">
            {" "}
            <div>Đăng nhập</div>
          </a>
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
          <div>
            <img src = "https://humg.edu.vn/Publishing_Resources/web/images/en-EN.png" alt = "" />
          </div>
        </div>
      </div>
      <div className="wrapper-header-mobile">
        <div className="wrapper-menu">
          <div className="icon-menu">
            <AiOutlineMenu color="#ffffff" fontSize="32px" />
          </div>
          <img
            src="https://humg.edu.vn/Publishing_Resources/web/images/logo.png"
            alt=""
          />
        </div>
        <div className="item-menu menu-transition">
          <div className="wrapper-sreach">
            <div className="input">
              <input type="text" />
            </div>
            <div className="icon-search">
              <AiOutlineSearch />
            </div>
          </div>
          <div className="category">
            Danh mục <div className = "close-menu">x</div>
          </div>
          <div>
            <ul>
              <li>
                <a href = "/">
                  <div>Home</div>
                </a>
              </li>
              <li>giới thiệu</li>
              <li>tuyển sinh</li>
              <li>
                <a href = "/tin-tuc">
                  <div>tin tức</div>
                </a>
              </li>
              <li>đào tạo - BĐCLGD</li>
              <li>khoa học - công nghệ</li>
              <li>hợp tác - đối ngoại</li>
              <li>sinh viên</li>
              <li>hội đồng gs cơ sở</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
