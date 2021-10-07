import React from "react";
import ReactHtmlParser from "react-html-parser";
import "./style.css";

const DetailNews = ({ data }) => {
  return (
    <div>
      {data && data.length > 0 ? (
        <> {ReactHtmlParser(data[0].content.rendered)}</>
      ) : null}
    </div>
  );
};

export default DetailNews;
