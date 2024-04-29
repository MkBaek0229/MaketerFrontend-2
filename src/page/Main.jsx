import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Main({ setAuth }) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const login_sucessfully = () => toast("로그인 성공!");

  const login_fail = () => toast("로그인 실패!");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);

        setAuth(true);
        login_sucessfully();
      } else {
        setAuth(false);
        login_fail();
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Container>
      <LoginForm>
        <h2>로그인</h2>
        <form onSubmit={onSubmitForm}>
          <Input
            type="email"
            name="email"
            placeholder="이메일 주소"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => onChange(e)}
          />
          <Button type="submit">로그인</Button>

          <Link to={"/register"}>회원가입 하기</Link>
        </form>
      </LoginForm>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 400px;
  padding: 8% 0 0;
  margin: auto;
`;

const LoginForm = styled.div`
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 400px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

const Input = styled.input`
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`;

const Button = styled.button`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  &:hover {
    background: cornflowerblue;
    color: white;
    transition: 0.5s;
  }
  margin-bottom: 24px;
`;
