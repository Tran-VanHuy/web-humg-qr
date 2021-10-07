import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBanner,
  getBanner,
  updateBanner,
} from "../../../../redux/Banner/action";
import { Button, Modal } from "react-bootstrap";

import "./style.css";

const BannerMNG = () => {
  const [id, setID] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImage] = useState("");
  const [show, setShow] = useState(false);
  const { dataBanner, loading } = useSelector((state) => state.bannerReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBanner());
  }, []);

  const onDeleteSubmit = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa!!!")) {
      dispatch(deleteBanner(id));
    }
  };

  const putSubmitData = (item) => {
    setShow(true);
    setTitle(item.title);
    setContent(item.content);
    setID(item._id);
  };

  const onSubmitUpdate = () => {
    const infoData = {
      _id: id,
      info: {
        title: title,
        content: content,
        attachment: `/images/${img[0].name}`,
      },
    };
    dispatch(updateBanner(infoData));
    setShow(false);
  };

  return (
    <table className="table table-dark" >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Image</th>
          <th scope="col">Conent</th>
          {/* <th scope="col">createdAt</th>
          <th scope="col">updatedAt</th> */}
          <th scope="col">act</th>
        </tr>
      </thead>
      <tbody>
        {loading === false
          ? dataBanner.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{item.title}</td>
                <td>
                  {item &&
                  item.attachment !== undefined &&
                  item.attachment !== null &&
                  item.attachment !== "" ? (
                    <img src={`${item.attachment}`} />
                  ) : (
                    <img src={`/images/no-img.PNG`} />
                  )}
                </td>
                <td>{item.content}</td>
                {/* <td>{item.createdAt}</td>
                <td>{item.updatedAt}</td> */}
                <td>
                  <div className="wrapper-info">
                    {" "}
                    <Button
                      variant="primary"
                      onClick={() => putSubmitData(item)}
                    >
                      Sửa
                    </Button>
                    <Modal
                      show={show}
                      onHide={() => setShow(false)}
                      dialogClassName="modal-90w"
                      aria-labelledby="example-custom-modal-styling-title"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                          Sửa sản phẩm
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
                          <input
                            type="file"
                            onChange={(e) => setImage(e.target.files)}
                          />
                        </div>
                        <div>
                          <Button onClick={() => onSubmitUpdate()}>
                            {" "}
                            Create at
                          </Button>
                        </div>
                      </Modal.Body>
                    </Modal>
                    <Button
                      variant="danger"
                      onClick={() => onDeleteSubmit(item._id)}
                    >
                      Xóa
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
};

export default BannerMNG;
