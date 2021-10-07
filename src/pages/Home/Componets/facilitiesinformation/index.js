import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const FaInformation = () => {
  return (
    <div>
      <div className="wrapper-fai">
        {" "}
        <div className="wrapper-content-fai">
          <div className="title-fai">
            Cơ sở vật chất của trường đại học mỏ địa chất
          </div>
          <div className ="area-fai">Bảo tàng địa chất - (Tầng 9 nhà C, trường ĐH Mỏ - Địa chất)</div>
          <div className = "area-fai"><a href = "#"> Xem chi tiết</a></div>
        </div>
        <div className="wrapper-img-fai">
          <div className="img-fai">
            <img src="/images/bt1.JPG" style={{ objectFit: "cover" }} />
          </div>
          <div className="img-fai">
            <img src="/images/bt1.JPG" style={{ objectFit: "cover" }} />
          </div>
          <div className="img-fai">
            <img src="/images/bt1.JPG" style={{ objectFit: "cover" }} />
          </div>
        </div>
        <div className="choice-fai">
          <div className="img-choice-fai">Bảo tàng Địa chất</div>
          <div className="img-choice-fai">Ký túc xá</div>
          <div className="img-choice-fai">Giảng đường - phòng học</div>
          <div className="img-choice-fai">Sân bãi tập thể dục thể thao</div>
          <div className="img-choice-fai">TT Thông tin - Thư viện</div>
          <div className="img-choice-fai">Hệ thống phòng thí nghiệm</div>
          <div className="img-choice-fai">Khác</div>
        </div>
      </div>
    </div>
  );
};

export default FaInformation;
