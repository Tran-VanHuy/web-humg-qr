import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";
import { getNewsLatest } from "../../redux/News/action";

const NewLatest = () => {
  const { dataNewsLatest } = useSelector((state) => state.newRuducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsLatest());
  }, []);
  return (
    <div>
      <div className="wrapper-news-latest-top">
        <div className="content-news-latest-top">THÔNG BÁO</div>
        <div className="content-news-latest-top">|</div>
        <div className="content-news-latest-top">TIN MỚI NHẤT</div>
      </div>
      <div className="wapper-item-news-latest-top">
        {dataNewsLatest && dataNewsLatest.length > 0
          ? dataNewsLatest.map((item, index) => (
              <div key={index} className="item-news-latest-top">
                <div className="content-item-news-latest-top">
                  <Link to={`/tin-tuc/${item.slug}`}>
                    icon {ReactHtmlParser(item.title.rendered)}{" "}
                    <span style={{ color: "gray", fontSize: "12px" }}>
                      ( ngày {moment(item.date).format("DD")} tháng {moment(item.date).format("MM")} năm {moment(item.date).format("YYYY")} )
                    </span>
                  </Link>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default NewLatest;
