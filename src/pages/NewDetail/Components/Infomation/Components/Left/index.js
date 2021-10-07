import React, { useEffect, useState } from "react";
import { dispatch } from "react-hot-toast/dist/core/store";
import { useDispatch } from "react-redux";
import "./style.css";

const LeftInfomation = ({ data }) => {
  const [url, setUrl] = useState();
 

  return (
    <div className="wrapper-LeftInfomation">
      <div className="leftinfomation-top">
        <div className="">
          {url === null ? (
            <img
              src= "/images/thongbao_Key_26052021092402.jpg"
              alt=""
            />
          ) : (
            <img src={`${url}`} alt="" />
          )}
        </div>
      </div>
      <div className="leftinfomation-bottom">
        {data && data.img_new_1 ? (
          <div
            className="item-img-leftinfomation"
            onClick={() => setUrl(data.img_new_1.url)}
          >
            <img
              src={`${data && data.img_new_1 ? data.img_new_1.url : 0}`}
              alt=""
            />
          </div>
        ) : null}

        {data && data.img_new_2 ? (
          <div
            className="item-img-leftinfomation"
            onClick={() => setUrl(data.img_new_2.url)}
          >
            <img
              src={`${data && data.img_new_2 ? data.img_new_2.url : 0}`}
              alt=""
            />
          </div>
        ) : null}

        {data && data.img_new_3 ? (
          <div
            className="item-img-leftinfomation"
            onClick={() => setUrl(data.img_new_3.url)}
          >
            <img
              src={`${data && data.img_new_3 ? data.img_new_3.url : 0}`}
              alt=""
            />
          </div>
        ) : null}

        {data && data.img_new_4 ? (
          <div
            className="item-img-leftinfomation"
            onClick={() => setUrl(data.img_new_4.url)}
          >
            <img
              src={`${data && data.img_new_4 ? data.img_new_4.url : 0}`}
              alt=""
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LeftInfomation;
