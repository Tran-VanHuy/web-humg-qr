import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Menu = () => {
  return (
    <>
      <div className="content-function">
        <div className="item-content-function">
          <Link to="/">
            <div className="text-content-function">
              <span> Home</span>
            </div>
          </Link>
          <Link to="https://humg.edu.vn/gioi-thieu/pages/thu-ngo-cua-hieu-truong.aspx?ItemID=6955">
            <div className="text-content-function">
              <span> Giới thiệu</span>
            </div>
          </Link>
          <Link to="https://tuyensinh.humg.edu.vn/Pages/home.aspx">
            <div className="text-content-function">
              <span>Tuyển sinh</span>
            </div>
          </Link>
          <Link to="/tin-tuc">
            <div className="text-content-function">
              <span>Cơ sở vật chất</span>
            </div>
          </Link>
          <Link to="https://humg.edu.vn/dao-tao/dai-hoc/Pages/default.aspx">
            <div className="text-content-function">
              <span>Đào tạo-ĐBCLGD</span>
            </div>
          </Link>
          <Link to="https://humg.edu.vn/nghien-cuu/Pages/default.aspx">
            <div className="text-content-function">
              <span>Khoa học-công nghệ</span>
            </div>
          </Link>
          <Link to="https://humg.edu.vn/hop-tac-va-doi-ngoai/Pages/default.aspx">
            <div className="text-content-function">
              <span> Hợp tác-đối ngoại </span>
            </div>
          </Link>
          <Link to="https://humg.edu.vn/sinh-vien/Pages/default.aspx">
            <div className="text-content-function">
              <span> Sinh viên </span>
            </div>
          </Link>
          <Link>
            <div className="text-content-function">
              <span> Hội đồng GS cơ sở</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
