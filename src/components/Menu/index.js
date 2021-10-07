import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="content-function">
      <div className="item-content-function">
        <div className="text-content-function">
          <Link to="/">
            <span> Home</span>
          </Link>
        </div>
        
        <div className="text-content-function">
        <Link to="/dang-nhap">
          <span> Giới thiệu</span>
          </Link>
        </div>
        <div className="text-content-function">
          <span>Tuyển sinh</span>
        </div>
        <div className="text-content-function">
        <Link to = "/tin-tuc"> <span>Tin tức</span></Link>
         
        </div>
        <div className="text-content-function">
          <span>Đào tạo-ĐBCLGD</span>
        </div>
        <div className="text-content-function">
          <span>Khoa học-công nghệ</span>
        </div>
        <div className="text-content-function">
          <span> Hợp tác-đối ngoại </span>
        </div>
        <div className="text-content-function">
          <span> Sinh viên </span>
        </div>
        <div className="text-content-function">
          <span> Hội đồng GS cơ sở</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
