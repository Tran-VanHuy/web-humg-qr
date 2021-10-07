import React, { useEffect } from "react";
import "./style.css";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { getListVideo } from "../../../../redux/Video/action";

const Video = () => {
  const { dataVideo, loading } = useSelector((state) => state.videoReucer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListVideo());
  }, []);
  return (
    <div className="wrapper-video">
    {loading === false ? dataVideo.map((item, index) => (

      <div className="item-video" key = {index}>
        <ReactPlayer
          url= {`${item.video}`}
          width={"100%"}
          height={"100%"}
        />
        <div className="content-video">
          {item.title}
        </div>
      </div>
    )) : (null)}
     
      {/* <div className="item-video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=eZ8bA6PfEGU"
          width={"100%"}
          height={"100%"}
        />
        <div className="content-video">
          [ Bản tin số 6 ] Hãy tự hào khi bạn là sinh viên HUMG !!!
        </div>
      </div> */}
      {/* <div className="item-video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=qS44AQqh3rg"
          width={"100%"}
          height={"100%"}
        />
        <div className="content-video">60s Trường Đại học Mỏ - Địa chất</div>
      </div> */}
    </div>
  );
};

export default Video;
