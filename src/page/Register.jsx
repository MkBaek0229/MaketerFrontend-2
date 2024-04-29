import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

const Register = ({ setAuth }) => {
  const [inputs, setinputs] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const { email, password, name } = inputs;

  const onChange = (e) => {
    setinputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const register_sucessfully = () => toast("회원가입 성공!");

  const register_fail = () => toast("이미 존재하는 회원입니다.");

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { email, password, name };

      const response = await fetch("http://localhost:3000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      // 회원가입 성공시 토큰 발급
      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);

        setAuth(true);
        register_sucessfully();
      } else {
        setAuth(false);
        register_fail();
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Container>
      <RegisterForm>
        <h1>회원가입</h1>
        <form onSubmit={onSubmitForm}>
          <Input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
          <Input
            type="name"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
          <Button>회원가입</Button>
        </form>
        <Link to="/">로그인하기</Link>
      </RegisterForm>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  width: 400px;
  padding: 8% 0 0;
  margin: auto;
`;

const RegisterForm = styled.div`
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
