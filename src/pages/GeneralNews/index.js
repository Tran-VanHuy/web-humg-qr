import React from "react";
import Menu from "../../components/Menu";
import NewLatest from "../../components/NewsLatest";
import NewRight from "./Components/NewsRight";
import { Helmet } from "react-helmet";
import "./style.css"


const PageGaneralNews = () => {

   
  return (
    <>
      <Helmet>
      <title>Tin tức</title>
    </Helmet>
    <div>
    <div><Menu /></div>
      <div className = "wrapper-ganera-news">
        <div className = "wrapper-ganera-news-left">
          <NewRight />
        </div>
        <div className = "wrapper-ganera-news-right">
              <NewLatest />
        </div>
      </div>
    </div>
    </>
  );
};

export default PageGaneralNews;
