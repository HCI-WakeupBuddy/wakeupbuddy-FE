import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/img/logo.svg";
import TitleText from "../components/common/TitleText";
import Button from "../components/common/Button";

const MainPage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setUsername(e.target.value);
  };
  const handleUsername = () => {
    localStorage.clear();
    localStorage.setItem("username", username);
    navigate("/wearing");
  };
  return (
    <div>
      <MainWrapper>
        <TitleText txt={"WakeupBuddy"} />
        <LogoImg src={Logo} alt="로고 이미지" />
        <TextBox>
          <Welcome>환영합니다!</Welcome>
          <SubText>
            뇌파 측정을 원하시면 이름을 입력하고
            <br />
            <span>시작 버튼</span>을 눌러주세요.
          </SubText>
        </TextBox>
        <Input
          onChange={onChange}
          value={username}
          name={"username"}
          placeholder="이름을 입력해주세요"
        />
        <Button txt={"시작"} onBtnClick={handleUsername} />
      </MainWrapper>
    </div>
  );
};

export default MainPage;

const MainWrapper = styled.div`
  padding: 102px 38px 196px 38px;
  height: calc(100vh - 298px);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 183px;
  height: 175px;
  margin-top: 41px;
  margin-bottom: 32px;
`;

const TextBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const Welcome = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
`;

const SubText = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  > span {
    color: #6750a4;
    font-weight: 700;
  }
`;

const Input = styled.input`
  margin-top: 39px;
  margin-bottom: 20px;
  display: flex;
  width: 268px;
  height: 50px;
  padding: 0px 16px;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #e0e0e0;
  background: #fff;
  outline: none;
`;
