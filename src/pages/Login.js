//Login.js
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;
const BlockButtonContain = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  background-color: #cde8e5;
  color: gray;
  border: none;
  width: 150px;
  height: 50px;
  border-radius: 15px;
  font-size: 18px;
  font-weight: 600;
  margin: 10px;

  @media all and (min-width: 1024px) and (max-width: 1279px) {
    background-color: #eef7ff;
  }

  @media all and (min-width: 769px) and (max-width: 1023px) {
    background-color: #7ab2b2;
    color: white;
  }

  @media all and (min-width: 481px) and (max-width: 768px) {
    background-color: #4d869c;
    color: white;
  }
`;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // useNavigate 훅 사용
  return (
    <Container>
      <h2>로그인 페이지</h2>
      <Input
        type="text"
        placeholder="사용자 이름"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <BlockButtonContain>
        <Button onClick={() => navigate("/")}>로그인</Button>
        <Button onClick={() => navigate("/register")}>회원가입</Button>
      </BlockButtonContain>
    </Container>
  );
}

export default Login;
