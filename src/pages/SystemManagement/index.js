import React, { useState } from "react";
import BannerMNG from "./components/BannerManage";
import "./style.css";
import "reactjs-popup/dist/index.css";
import Modalpage from "../../components/Modal";
import Faculty from "./components/FacultyList";
import VideoPage from "./components/Video";
import News from "./components/NewsMNG";
import { useHistory } from "react-router-dom";
const Manage = () => {
  const [type, setType] = useState("BannerMNS");
  const history = useHistory();
  const onSubmitLogOut = () => {

    localStorage.removeItem("accesstoken");
    history.push("/")
    
  }
  return (
    <div>
      <div className="wrapper-mng">
        <div className="wrapper-left">
          <div className="item-left" onClick={() => setType("BannerMNS")}>
            <h3>Banner</h3>
          </div>
          <div className="item-left" onClick={() => setType("FacultyList")}>
            <h3>Danh sách khoa</h3>
          </div>
          <div className="item-left" onClick={() => setType("VideoIntroduce")}>
            <h3>Video giới thiệu</h3>
          </div>
          <div className="item-left">
            <h3>Danh sách cở sở vật chất</h3>
          </div>
          <div className="item-left" onClick={() => setType("News")}>
            <h3>Danh sách bài viết</h3>
          </div>
          <div className="item-left" onClick = {() => onSubmitLogOut()}>
            <h3>Thoát</h3>
          </div>
        </div>
        <div className="wrapper-right">
          {type === "BannerMNS" ? (
            <BannerMNG />
          ) : type === "FacultyList" ? (
            <Faculty />
          ) : type === "VideoIntroduce" ? (<VideoPage />) : type === "News" ? (<News />) : (null)}
        </div>
        <div className="wrapper-modal">
          <Modalpage type={type} />
        </div>
      </div>
      <div className="wrapper-mng-mobile">
        <h4>Vui lòng sủ dụng máy tính</h4>
      </div>
    </div>
  );
};

export default Manage;
