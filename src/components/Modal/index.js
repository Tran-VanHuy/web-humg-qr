import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postBanner } from "../../redux/Banner/action";
import { postListFaculty } from "../../redux/FacultyList/action";


const Modalpage = ({ type }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");
  const [show, setShow] = useState(false);

  const [titledFaculty, setTitleFaculty] = useState("");
  const [imgTitle, setImgTitle] = useState("");
  const [logo, setLogo] = useState("");
  const [imgPersion, setImgPersion] = useState("");
  const [video, setVideo] = useState("");
  const [image, setImage] = useState("");
  const [contentFaculty, setContentFaculty] = useState("");

  const dispatch = useDispatch();
  const onSubmit = () => {
    if (type === "BannerMNS") {
      const postBannerData = {
        title: title,
        content: content,
        attachment:
          img && img !== null && img !== undefined && img !== ""
            ? `/images/${img[0].name}`
            : "",
      };
      dispatch(postBanner(postBannerData));
      setTitle("");
      setContent("");
      setImage("");
      setShow(false);
    } else if (type === "FacultyList") {
      const postFacultyListData = {
        title: titledFaculty,
        img_title:
          imgTitle &&
          imgTitle !== null &&
          imgTitle !== undefined &&
          imgTitle !== ""
            ? imgTitle[0].name
            : imgTitle,
        img_logo:
          logo && logo !== null && logo !== undefined && logo !== ""
            ? logo[0].name
            : logo,
        img_persion:
          imgPersion &&
          imgPersion !== null &&
          imgPersion !== undefined &&
          imgPersion !== ""
            ? imgPersion[0].name
            : imgPersion,
        video:
          video && video !== null && video !== undefined && video !== ""
            ? video[0].name
            : video,
        images:
          image && image !== null && image !== undefined && image !== ""
            ? image[0].name
            : image,
        content: contentFaculty,
      };
      dispatch(postListFaculty(postFacultyListData));
    }
  };
  return (
    <>
      {type === "BannerMNS" ? (
        <>
          <Button variant="primary" onClick={() => setShow(true)}>
            +
          </Button>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Thêm sản phẩm
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                Title
                <br></br>
                <input
                  className="content-title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="wrapper-contnet">
                content
                <br></br>
                <input
                  className="content-banner"
                  type="text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="wrapper-contnet">
                <input type="file" onChange={(e) => setImg(e.target.files)} />
              </div>
              <div>
                <Button onClick={() => onSubmit()}> Create at</Button>
              </div>
            </Modal.Body>
          </Modal>
        </>
      ) : type === "FacultyList" ? (
        <>
          <Button variant="primary" onClick={() => setShow(true)}>
            +
          </Button>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Thêm sản phẩm
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                Title
                <br></br>
                <input
                  className="content-title"
                  type="text"
                  onChange={(e) => setTitleFaculty(e.target.value)}
                />
              </div>
              <div className="wrapper-contnet">
                Image_title
                <br></br>
                <input
                  type="file"
                  onChange={(e) => setImgTitle(e.target.files)}
                />
              </div>
              <div className="wrapper-contnet">
                Logo
                <br></br>
                <input type="file" onChange={(e) => setLogo(e.target.files)} />
              </div>
              <div className="wrapper-contnet">
                Image_persion
                <br></br>
                <input
                  type="file"
                  onChange={(e) => setImgPersion(e.target.files)}
                />
              </div>
              <div className="wrapper-contnet">
                Video
                <br></br>
                <input type="file" onChange={(e) => setVideo(e.target.files)} />
              </div>
              <div className="wrapper-contnet">
                Image
                <br></br>
                <input type="file" onChange={(e) => setImage(e.target.files)} />
              </div>
              <div className="wrapper-contnet">
                content
                <br></br>
                <input
                  className="content-banner"
                  type="text"
                  onChange={(e) => setContentFaculty(e.target.value)}
                />
              </div>
              <div>
                <Button onClick={() => onSubmit()}> Create at</Button>
              </div>
            </Modal.Body>
          </Modal>
        </>
      ) : null}
    </>
  );
};

export default Modalpage;
