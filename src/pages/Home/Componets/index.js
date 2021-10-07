import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBanner } from "../../../redux/Banner/action";
import "./style.css";
import { Carousel } from "react-bootstrap";
import {
  getFilterListFaculty,
  getListFaculty,
} from "../../../redux/FacultyList/action";
import Menu from "../../../components/Menu";

const Home = () => {
  const [slug, setSlug] = useState("khoa-cong-nghe-thong-tin");
  const { dataBanner } = useSelector((state) => state.bannerReducer);
  const { dataFaculty, loading } = useSelector((state) => state.facultyReducer);
  const { dataFilterFaculty } = useSelector((state) => state.facultyReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getListFaculty());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getFilterListFaculty(slug));
  }, [dispatch, slug]);
  return (
    <div>
      <div className="wrapper-banner">
        <Carousel>
          {dataBanner.map((item, index) => (
            <Carousel.Item key={index}>
              {item &&
              item.attachment !== undefined &&
              item.attachment !== null &&
              item.attachment !== "" ? (
                <img
                  className="d-block w-100"
                  src={`${item.attachment}`}
                  alt={`SLIDER ${index}`}
                />
              ) : (
                <img src={`/images/no-img.PNG`} alt="" />
              )}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="wrapper-content">
        <Menu />
        <div className="content-function-mobile">menu</div>
        <div className="content-product">
          <div className="content-product-top">
            <div className="content-product-top-left">
              <div
                className="content-product-top-left-1"
                style={{
                  backgroundImage: `url('/images/${dataFilterFaculty.img_logo}')`,
                }}
              ></div>
              <div className="content-product-top-left-2">
                <video width="100%" height="100%" controls>
                  <source
                    src="https://www.youtube.com/watch?v=C0-caYsDN7E"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className="content-product-top-right">
              <div
                className="content-product-top-right-1"
                style={{
                  backgroundImage: `url('/images/${dataFilterFaculty.img_persion}')`,
                  backgroundSize: "100% 100%",
                }}
              ></div>
              <div className="content-product-top-right-2">
                <div
                  className="item-content-product-top-right-left"
                  style={{
                    backgroundImage: `url('/images/${dataFilterFaculty.images}')`,
                    backgroundSize: "100% 100%",
                  }}
                ></div>
                <div className="item-content-product-top-right-right">
                  {dataFilterFaculty.content}
                </div>
              </div>
            </div>
          </div>
          <div className="content-product-bottom">
            <>
              {loading === false ? (
                dataFaculty.map((item, index) => (
                  <div
                    onClick={() => setSlug(item.slug)}
                    className="item-content-product-bottom"
                    style={{
                      backgroundImage: `url('/images/${item.img_title}')`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <h1>{item.title}</h1>
                  </div>
                ))
              ) : (
                <>
                  <div
                    className="item-content-product-bottom"
                    style={{
                      backgroundImage: `url('/images/ai.jpg')`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <h1>Khoa công nghệ thông tin</h1>
                  </div>
                  <div
                    className="item-content-product-bottom"
                    style={{
                      backgroundImage: `url('/images/codien.JPEG')`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <h1>Khoa cơ điện</h1>
                  </div>
                  <div
                    className="item-content-product-bottom"
                    style={{
                      backgroundImage: `url('/images/daukhi.JPEG')`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <h1>Khoa dầu khí</h1>
                  </div>
                  <div
                    className="item-content-product-bottom"
                    style={{
                      backgroundImage: `url('/images/xaydung.JPEG')`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <h1>Khoa xây dựng</h1>
                  </div>
                  <div
                    className="item-content-product-bottom"
                    style={{
                      backgroundImage: `url('/images/moitruong.JPEG')`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <h1>Khoa môi trường</h1>
                  </div>
                </>
              )}

              <div className="view">
                <h2>Xem thêm</h2>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
