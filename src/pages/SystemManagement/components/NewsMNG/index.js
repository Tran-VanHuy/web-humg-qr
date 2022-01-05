import React, { useEffect, useState, Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../../redux/News/action";
import "./style.css";
import QRCode from "qrcode.react";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import draftToHtml from "draftjs-to-html";

const EditorContainer = () => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );
  function uploadImageCallBack(file) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.imgur.com/3/image");
      xhr.setRequestHeader("Authorization", "Client-ID 7f4e8443b282a2d");
      const data = new FormData();
      data.append("image", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
        resolve(response);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        console.log(error);
        reject(error);
      });
    });
  }
  const [dataPost, setdataPost] = useState();
  const onDataPost = (data) => {
    setdataPost(data);
    console.log(data);
  };
  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={setEditorState}
      />
      <button
        type="submit"
        onClick={() =>
          onDataPost(draftToHtml(convertToRaw(editorState.getCurrentContent())))
        }
      >
        Gửi
      </button>
      <p>{ReactHtmlParser(dataPost)}</p>
    </div>
  );
};

const News = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [show, setShow] = useState(false);
  const { dataNews, loading } = useSelector((state) => state.newRuducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <div>
      <table className="table">
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
                  value={`http://humg-qr.surge.sh/tin-tuc/${item.slug}`}
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

      <Button variant="primary" onClick={() => setShow(true)}>
        +
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>Viết bài</Modal.Header>
        <Modal.Body>
          <EditorContainer />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default News;
