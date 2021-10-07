import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { getListVideo } from "../../../../redux/Video/action";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import moment from "moment";
import "./style.css";

const VideoPage = ({ type }) => {
  const [show, setShow] = useState(false);
  const [radio, setRadio] = useState("file");
  const { dataVideo, loading } = useSelector((state) => state.videoReucer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListVideo());
  }, []);
  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Video</th>
            <th scope="col">createdAt</th>
            <th scope="col">updateAt</th>
            <th scope="col">Act</th>
          </tr>
        </thead>
        <tbody>
          {loading === false
            ? dataVideo?.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{item.title}</td>
                  <td>
                    <ReactPlayer
                      url={`${item.video}`}
                      width={"100%"}
                      height={"100%"}
                    />
                  </td>
                  <td>{moment(item.createdAt).format("DD/MM/YYYY")}</td>
                  <td>{moment(item.updatedAt).format("DD/MM/YYYY")}</td>
                  <td>
                    <div className="wrapper-info">
                      <Button variant="primary" onClick={() => setShow(true)}>
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
                            Sửa
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div>
                            Title
                            <br></br>
                            <input className="content-title" type="text" />
                          </div>
                          <br></br>
                          <div className="wrapper-contnet">
                            <div className="Wrapper-input-video">
                              <div>Video: </div>
                              <div>
                                <input
                                  type="radio"
                                  name="name"
                                  onChange={() => setRadio("file")}
                                />
                                Chọn file
                              </div>
                              <div>
                                <input
                                  type="radio"
                                  name="name"
                                  onChange={() => setRadio("link")}
                                />
                                Đường dẫn
                              </div>
                            </div>
                            <br></br>
                            {radio === "file" ? (
                              <input type="file" />
                            ) : (
                              <input type="text" className="input-link" />
                            )}
                          </div>
                          <br></br>
                          <div>
                            <Button> Create at</Button>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </div>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default VideoPage;
