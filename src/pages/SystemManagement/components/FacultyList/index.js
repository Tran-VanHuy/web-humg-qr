import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { deleteListFaculty, getListFaculty } from "../../../../redux/FacultyList/action";
import axios from "axios"

const Faculty = () => {
  const [show, setShow] = useState(false);
  const { dataFaculty, loading } = useSelector((state) => state.facultyReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListFaculty());
  }, [dispatch]);

  const onDeleteSubmit =  (id) => {
   
      // dispatch(deleteListFaculty(id))
  }

  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Image_title</th>
          <th scope="col">Logo</th>
          <th scope="col">Image_persion</th>
          <th scope="col">Video</th>
          <th scope="col">Images</th>
          <th scope="col">Content</th>
          <th scope="col">Act</th>
        </tr>
      </thead>
      <tbody>
        {loading === false
          ? dataFaculty?.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{item.title}</td>
                <td>
                  {item &&
                  item.img_title !== undefined &&
                  item.img_title !== null &&
                  item.img_title !== "" ? (
                    <img src={`/images/${item.img_title}`} alt="" />
                  ) : (
                    <img src={`/images/no-img.PNG`} alt="" />
                  )}
                </td>
                <td>
                  {item &&
                  item.img_logo !== undefined &&
                  item.img_logo !== null &&
                  item.img_logo !== "" ? (
                    <img src={`/images/${item.img_logo}`} alt="" />
                  ) : (
                    <img src={`/images/no-img.PNG`} alt="" />
                  )}
                </td>
                <td>
                  {item &&
                  item.img_persion !== undefined &&
                  item.img_persion !== null &&
                  item.img_persion !== "" ? (
                    <img src={`/images/${item.img_persion}`} alt="" />
                  ) : (
                    <img src={`/images/no-img.PNG`} alt="" />
                  )}
                </td>
                <td>
                  {item &&
                  item.video !== undefined &&
                  item.video !== null &&
                  item.video !== "" ? (
                    <img src={`/images/${item.video}`} alt="" />
                  ) : (
                    <img src={`/images/no-img.PNG`} alt="" />
                  )}
                </td>
                <td>
                  {item &&
                  item.images !== undefined &&
                  item.images !== null &&
                  item.images !== "" ? (
                    <img src={`/images/${item.images}`} alt="" />
                  ) : (
                    <img src={`/images/no-img.PNG`} alt="" />
                  )}
                </td>
                <td>{item.content ?? "not data"}</td>
                <td>
                  <div className="wrapper-info">
                    {" "}
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
                          Sửa sản phẩm
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div>
                          Title
                          <br></br>
                          <input className="content-title" type="text" />
                        </div>
                        <div className="wrapper-contnet">
                          content
                          <br></br>
                          <input className="content-banner" type="text" />
                        </div>
                        <div className="wrapper-contnet">
                          <FileBase64
                            accept="image/"
                            multiple={false}
                            type="file"
                          />
                        </div>
                        <div>
                          <Button> Create at</Button>
                        </div>
                      </Modal.Body>
                    </Modal>
                    <Button variant="danger" onClick = {() => onDeleteSubmit(item._id)}>Xóa</Button>
                  </div>
                </td>
              </tr>
            ))
          : (null)}
      </tbody>
    </table>
  );
};

export default Faculty;
