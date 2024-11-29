import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BeatLoader } from "react-spinners";
import TitleText from "../components/common/TitleText";
import apiCall from "../api/Api";
import { useNavigate } from "react-router-dom";

const WritingReport = () => {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await apiCall("/api/eeg/session-result", "GET");

        if (response.status === 202) {
          // 세션이 아직 진행 중인 경우
          console.log("Session is still running. Retrying in 3 seconds...");
          setTimeout(fetchResult, 3000); // 3초 후 재요청
        } else if (response.status === 200 && response.data) {
          // 결과가 준비된 경우
          console.log("Session result is ready:", response.data);
          navigate("/result", { state: { resultInfo: response.data } }); // 결과와 함께 이동
        } else {
          console.error("Unexpected response:", response);
          alert("결과를 가져오는 중 문제가 발생했습니다.");
        }
      } catch (error) {
        console.error("API 요청 실패:", error);
        alert("결과를 가져오는 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    };

    // 최초 호출을 3초 뒤에 실행
    const timeoutId = setTimeout(fetchResult, 15000);

    // 컴포넌트 언마운트 시 타임아웃 클리어
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div>
      <Wrapper>
        <TitleText txt={"WakeupBuddy"} />
        <SubText>
          <span>{username}님</span>의 뇌파 데이터를 기반으로
          <br />
          <span style={{ color: "#6750A4" }}>학습 리포트</span>를 작성 중입니다
        </SubText>

        <LoadingBox>
          <BeatLoader color="#6750A4" />
        </LoadingBox>
      </Wrapper>
    </div>
  );
};

export default WritingReport;

const Wrapper = styled.div`
  padding: 102px 38px 196px 38px;
  height: calc(100vh - 298px);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubText = styled.div`
  margin-top: 180px;
  text-align: center;
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  > span {
    font-weight: 700;
  }
`;
const LoadingBox = styled.div`
  margin-top: 42px;
`;
