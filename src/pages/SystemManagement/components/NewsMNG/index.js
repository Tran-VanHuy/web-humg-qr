import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../../redux/News/action";
import "./style.css";
import QRCode from "qrcode.react";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";

const News = () => {
  const { dataNews, loading } = useSelector((state) => state.newRuducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <div>
      <table className="table ">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titlte</th>
            <th scope="col" className="title-content">
              content
            </th>
            <th scope="col">Qr</th>
            <th scope="col">Detail</th>
          </tr>
        </thead>
        <tbody>
          {dataNews.map((item, index) => (
            <tr>
              <th scope="row">{index}</th>
              <td>{ReactHtmlParser(item.title.rendered)}</td>
              <td className="content-news">
                {ReactHtmlParser(item.content.rendered)}
              </td>
              <td>
                <QRCode
                  id="qrcode"
                  value={`http://localhost:3000/tin-tuc/${item.slug}`}
                  size={145}
                  level={"H"}
                  includeMargin={true}
                />
              </td>
              <td>
                <Link to={`/tin-tuc/${item.slug}`}>Xem chi tiết</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default News;
