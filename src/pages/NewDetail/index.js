import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../components/Menu";
import NewLatest from "../../components/NewsLatest";
import { filterNews } from "../../redux/News/action";
import DetailNews from "./Components/Details";
import LeftInfomation from "./Components/Infomation/Components/Left";
import RightInfomation from "./Components/Infomation/Components/Right";
import "./style.css";

const PageNewDetail = (props) => {
  const slug = props.match.params.slug;
  const { dataFilterNews } = useSelector((state) => state.newRuducer);
  console.log({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterNews(slug));
  }, [dispatch, slug]);
  return (
    <div className = "wrapper-page-news">
      <Menu />
      <div className="information">
        <div className="wrapper-left-news">
          <div className="wrapper-infomation">
            <div className="wrapper-left-information">
              <LeftInfomation
                data={
                  dataFilterNews && dataFilterNews.length > 0
                    ? dataFilterNews[0].acf
                    : null
                }
              />
            </div>
            <div className="wrapper-right-information">
              <RightInfomation
                slug={slug}
                data={
                  dataFilterNews && dataFilterNews.length > 0
                    ? dataFilterNews
                    : null
                }
              />
            </div>
          </div>
          <div className="wrapper-detail">
            <DetailNews
              data={
                dataFilterNews && dataFilterNews.length > 0
                  ? dataFilterNews
                  : null
              }
            />
          </div>
        </div>
        <div className="wrapper-right-news">
          <NewLatest />
        </div>
      </div>
    </div>
  );
};

export default PageNewDetail;
