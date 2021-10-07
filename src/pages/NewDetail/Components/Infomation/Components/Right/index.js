import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import "./style.css";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { Button, Modal } from "react-bootstrap";
import QRCode from "qrcode.react";

const RightInfomation = ({ data, slug }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmitCopy = () => {
    toast.success("Coppy link thành công");
    alert("Copy thành công");
  };

  return (
    <div className="wrapper-content-right">
      <div className="wrapper-content-right-top">
        <div className="Title-News">
          {data && data.length > 0 ? (
            <> {ReactHtmlParser(data[0].title.rendered)}</>
          ) : null}
        </div>
        <div>
          <div className="">
            <p>Địa chỉ:</p>
          </div>
          <div className="">
            <p>Khu: A</p>
          </div>
          <div className="">
            {data && data.length > 0 ? (
              <>Thời gian: {ReactHtmlParser(data[0].date)}</>
            ) : null}
          </div>
        </div>
      </div>

      <div className="share-item">
        <div className="border-item">
          <div className="content-border-item"></div>
        </div>
        <div className="border-item-center">Chia sẻ:</div>
        <div className="border-item">
          <div className="content-border-item"></div>
        </div>
      </div>
      <div className="Title-News-Bottom">
        <div className="item-share">
          <FacebookShareButton url={`http://localhost:3000/tin-tuc/${slug}`}>
            Facbooke
          </FacebookShareButton>
        </div>

        <div className="item-share">
          <TwitterShareButton url={`http://localhost:3000/tin-tuc/${slug}`}>
            Twitter
          </TwitterShareButton>
        </div>
        <div className="item-share" variant="primary" onClick={handleShow}>
          QR
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <QRCode
              id="qrcode"
              value={`http://localhost:3000/tin-tuc/${slug}`}
              size={250}
              level={"H"}
              includeMargin={true}
            />
          </Modal.Body>
        </Modal>
        <div className="item-share" onClick={() => onSubmitCopy()}>
          <CopyToClipboard text={`http://localhost:3000/tin-tuc/${slug}`}>
            <div>Copy link</div>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default RightInfomation;
