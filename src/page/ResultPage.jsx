import React from "react";
import styled from "styled-components";
import TitleText from "../components/common/TitleText";
import ResultBox from "../components/result/ResultBox";
import { useLocation } from "react-router-dom";
import Sample from "../assets/img/sample-graph.png";

const ResultPage = () => {
  const location = useLocation();
  const { resultInfo } = location.state || {}; // 전달받은 데이터를 가져옴
  const username = localStorage.getItem("username");

  const profileImageURL =
    resultInfo.graphImageUrl && resultInfo.graphImageUrl.startsWith("/")
      ? `${import.meta.env.VITE_SERVER_API}${resultInfo.graphImageUrl}`
      : Sample;

  // 초 단위를 분 단위로 변환 (0분 또는 0초는 표시하지 않음)
  const convertToMinutes = (seconds) => {
    const minutes = Math.floor(seconds / 60); // 정수로 분 계산
    const remainingSeconds = seconds % 60; // 남은 초 계산

    if (minutes > 0 && remainingSeconds > 0) {
      return `${minutes}분 ${remainingSeconds}초`; // 분 + 초 모두 표시
    } else if (minutes > 0) {
      return `${minutes}분`; // 분만 표시
    } else if (remainingSeconds > 0) {
      return `${remainingSeconds}초`; // 초만 표시
    } else {
      return ""; // 둘 다 0이면 빈 문자열 반환
    }
  };

  return (
    <div>
      {resultInfo && Object.keys(resultInfo).length > 0 ? (
        <Wrapper>
          <TitleText txt={"통계 결과"} />
          <SubText>{username}님의 학습 리포트입니다.</SubText>
          <GraphBox>
            <Graph src={profileImageURL} alt="Graph" />
          </GraphBox>
          <ResultBox
            total={convertToMinutes(resultInfo.totalTime)} // 총 시간
            drowsiness={convertToMinutes(resultInfo.totalDrowsyTime)} // 졸음 시간
            vibe={resultInfo.totalVibrationCount} // 진동 횟수
            study={convertToMinutes(resultInfo.totalAwakeTime)} // 학습 시간
          />
        </Wrapper>
      ) : (
        <Wrapper>
          <TitleText txt={"결과를 불러올 수 없습니다."} />
        </Wrapper>
      )}
    </div>
  );
};

export default ResultPage;

const Wrapper = styled.div`
  padding: 102px 38px 196px 38px;
  height: calc(100vh - 298px);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubText = styled.div`
  margin-top: 110px;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
`;

const GraphBox = styled.div`
  margin: 38px 0;
`;

const Graph = styled.img`
  width: 230px;
  height: 167px;
  flex-shrink: 0;
`;
