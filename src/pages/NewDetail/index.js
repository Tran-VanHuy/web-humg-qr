import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../components/Menu";
import NewLatest from "../../components/NewsLatest";
import SEO from "../../components/Seo/seo";
import { filterNews } from "../../redux/News/action";
import DetailNews from "./Components/Details";
import LeftInfomation from "./Components/Infomation/Components/Left";
import RightInfomation from "./Components/Infomation/Components/Right";
import ReactHtmlParser from "react-html-parser";
import "./style.css";
import Helmet from "react-helmet";

const PageNewDetail = (props) => {
  const slug = props.match.params.slug;
  const { dataFilterNews } = useSelector((state) => state.newRuducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterNews(slug));
  }, [dispatch, slug]);
  useEffect(() => {}, [dataFilterNews]);
  return (
    <>
      {/* {dataFilterNews && dataFilterNews.length > 0 ? (
        <title>{ReactHtmlParser(dataFilterNews[0].title.rendered)}</title>
      ) : null} */}
      {/* {dataFilterNews && dataFilterNews.length > 0 ? (
        <Helmet>
          <SEO
            title={dataFilterNews[0].title.rendered}
            urlKey={`http://humg-qr.surge.sh/tin-tuc/${slug}`}
            image={dataFilterNews?.[0].acf?.img_new_1?.url}
            content={dataFilterNews?.[0].content.rendered ?? "HUMG"}
            keyword={dataFilterNews?.keyword ?? "HUMG"}
          />{" "}
        </Helmet>
      ) : null} */}
      {dataFilterNews && dataFilterNews.length > 0 ? (
        <Helmet defer={false}>
          <title>{dataFilterNews?.[0].title?.rendered}</title>
          <meta
            property="og:title"
            content={dataFilterNews?.[0].title?.rendered}
          />
          <meta
            property="og:url"
            content={`http://humg-qr.surge.sh/tin-tuc/${slug}`}
          />
          <meta
            property="og:image"
            content="https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_Truong_Dai_hoc_Mo_-_Dia_chat.jpg"
          />
          <meta
            property="og:description"
            content={dataFilterNews?.[0].content.rendered ?? "HUMG"}
          />
          <meta property="og:image:width" content="640" />
          <meta property="og:image:height" content="480" />
          <meta property="og:image:height" content="480" />
          <meta name="keywords" content={"aaa" ?? ""} />
          <meta http-equiv="content-language" content="vi" />
          <meta name="robots" content="noodp,index,follow" />
          <meta name="revisit-after" content="1 days" />
          <meta name="author" content="Drivadz" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@huy1821051049" />
          <meta
            name="twitter:title"
            content={dataFilterNews[0].title.rendered}
          />
          <meta
            name="twitter:description"
            content={dataFilterNews?.[0].content.rendered ?? "HUMG"}
          />
          <meta
            name="twitter:image"
            content={dataFilterNews?.[0].acf?.img_new_1?.url}
          />
        </Helmet>
      ) : null}

      <div className="wrapper-page-news">
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
    </>
  );
};

export default PageNewDetail;
