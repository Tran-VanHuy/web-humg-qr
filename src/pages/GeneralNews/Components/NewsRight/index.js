import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../../redux/News/action";
import ReactHtmlParser from "react-html-parser";
import "./style.css";
import { Carousel } from "react-bootstrap";
import moment from "moment";
import { ImportExport } from "@material-ui/icons";
import { Link } from "react-router-dom";

const NewRight = () => {
  const { dataNews } = useSelector((state) => state.newRuducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  return (
    <div>
      {dataNews && dataNews.length > 0
        ? dataNews.slice(0, 1).map((item, index) => (
            <div className="news-top">
              <div className="news-top-left">
                <Link to={`/tin-tuc/${item.slug}`}>
                  <div className="title-news-top-left">
                    {ReactHtmlParser(item.title.rendered)}
                  </div>
                </Link>

                <div className="time-news-top-left">
                  Công nghệ thông tin -{" "}
                  <span className="news-time">
                    {moment(item.date).format("DD/MM/YYYY")}
                  </span>
                </div>
                <div className="content-news-top-left">
                  {ReactHtmlParser(item.content.rendered)}
                </div>
              </div>
              <div className="news-top-right">
                <Link to={`/tin-tuc/${item.slug}`}>
                  <Carousel>
                    {dataNews &&
                    dataNews[0].acf.img_new_1.url &&
                    dataNews[0].acf.img_new_1.url !== null &&
                    dataNews[0].acf.img_new_1.url !== undefined ? (
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={`${dataNews[0].acf.img_new_1.url}`}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    ) : null}
                    {dataNews &&
                    dataNews[0].acf.img_new_2.url &&
                    dataNews[0].acf.img_new_2.url !== null &&
                    dataNews[0].acf.img_new_2.url !== undefined ? (
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={`${dataNews[0].acf.img_new_2.url}`}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    ) : null}
                    {dataNews &&
                    dataNews[0].acf.img_new_3.url &&
                    dataNews[0].acf.img_new_3.url !== null &&
                    dataNews[0].acf.img_new_3.url !== undefined ? (
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={`${dataNews[0].acf.img_new_3.url}`}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    ) : null}
                    {dataNews &&
                    dataNews[0].acf.img_new_1.url &&
                    dataNews[0].acf.img_new_1.url !== null &&
                    dataNews[0].acf.img_new_1.url !== undefined ? (
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={`${dataNews[0].acf.img_new_1.url}`}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    ) : null}
                  </Carousel>
                </Link>
              </div>
            </div>
          ))
        : null}
      <div className="news-3-item">
        {dataNews && dataNews.length > 0
          ? dataNews.slice(1, 4).map((item, index) => (
              <div className="wrapper-news-3-item">
                <Link to={`/tin-tuc/${item.slug}`}>
                  <div className="img-news-3-item">
                    <img
                      src={`${
                        item.acf.img_new_1.url ??
                        "/images/thongbao_Key_26052021092402.jpg"
                      }`}
                      alt=""
                    />
                  </div>
                </Link>

                <Link to={`/tin-tuc/${item.slug}`}>
                  <div className="content-news-3-item">
                    {ReactHtmlParser(item.title.rendered)}
                  </div>
                </Link>
                <div className="time-news-top-left">
                  Khoa cơ điện -{" "}
                  <span className="news-time">
                    {moment(item.date).format("DD/MM/YYYY")}
                  </span>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default NewRight;
