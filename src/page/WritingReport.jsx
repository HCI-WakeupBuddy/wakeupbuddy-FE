import React from "react";
import styled from "styled-components";
import TitleText from "../components/common/TitleText";

const WritingReport = () => {
  const username = localStorage.getItem("username");
  return (
    <div>
      <Wrapper>
        <TitleText txt={"WakeupBuddy"} />
        <SubText>
          <span>{username}님</span>의 뇌파 데이터를 기반으로
          <br />
          <span style={{ color: "#6750A4" }}>학습 리포트</span>를 작성 중입니다
        </SubText>
      </Wrapper>
    </div>
  );
};

export default WritingReport;

const Wrapper = styled.div`
  padding: 102px 38px 196px 38px;
  /* background-color: #ebebeb; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubText = styled.div`
  margin-top: 180px;
  text-align: center;
  color: #000;
  font-family: "pretendard";
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  > span {
    font-weight: 700;
  }
`;
