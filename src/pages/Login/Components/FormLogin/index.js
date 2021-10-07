import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { handleLoginApi } from "../../../../api/userServices";
import { useDispatch, useSelector } from "react-redux";
import { userLoginSuccess } from "../../../../redux/Login/action";
import { Link, useHistory } from "react-router-dom";
import "./style.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmitLogin = async () => {
    try {
      const data = await handleLoginApi(email, password);
      if (data && data.errCode !== 0) {
        setText("Sai mật khẩu hoặc tài khoản. Vui lòng nhập lại!!!");
      }
      if (data && data.errCode === 0) {
        dispatch(userLoginSuccess(data.user));
        localStorage.setItem("accesstoken", true);
        console.log("Login Success");
        history.replace("/quan-ly-he-thong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper-form-login">
      <div className="item-form-login">
        {/* <form method = "GET" action = "/quan-ly-he-thong"> */}
        <Form.Group className="mb-3">
          <Form.Label>Tên đăng nhập</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassWord(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <div className = "error-info">{text}</div>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => onSubmitLogin()}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Login;
