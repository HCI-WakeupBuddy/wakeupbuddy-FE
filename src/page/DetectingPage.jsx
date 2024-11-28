import React from "react";
import styled from "styled-components";
import { BeatLoader } from "react-spinners";
import TitleText from "../components/common/TitleText";

const DetectingPage = () => {
  const username = localStorage.getItem("username");
  return (
    <div>
      <Wrapper>
        <TitleText txt={"측정 중"} />
        <SubText>
          <span>{username}님</span>의 뇌파를 측정 중입니다.
        </SubText>
        <LoadingBox>
          <BeatLoader color="#6750A4" />
        </LoadingBox>
      </Wrapper>
    </div>
  );
};

export default DetectingPage;

const Wrapper = styled.div`
  padding: 102px 38px 196px 38px;
  /* background-color: #ebebeb; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubText = styled.div`
  margin-top: 138px;
  color: #000;
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  > span {
    font-weight: 700;
  }
`;

const LoadingBox = styled.div``;
