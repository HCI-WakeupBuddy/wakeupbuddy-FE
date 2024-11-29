import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TitleText from "../components/common/TitleText";
import styled from "styled-components";
import Lottie from "lottie-react";
import Graph from "../assets/animations/graph.json";
import Button from "../components/common/Button";

const DetectingPage = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const initialMinutes = parseInt(localStorage.getItem("studyTime"), 10) || 0;
  // localStorage.setItem("initialMinutes", 70);
  // const initialMinutes = localStorage.getItem("initialMinutes");

  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          if (minutes > 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            return 59;
          } else {
            clearInterval(timer);
            navigate("/writing");
            return 0;
          }
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes]);

  return (
    <div>
      <Wrapper>
        <TitleText txt={"학습 중"} />
        <SubText>
          <span>{username}님</span>의 뇌파를 측정 중입니다.
        </SubText>
        <GraphBox>
          <Lottie
            animationData={Graph}
            loop={true}
            autoplay={true}
            style={{ width: 100, height: 100 }}
          />
        </GraphBox>
        <TimerBox>
          <TimeDisplay>
            <TimeText>{String(minutes).padStart(2, "0")}</TimeText>{" "}
            <TimeColon> : </TimeColon>
            <TimeText>{String(seconds).padStart(2, "0")}</TimeText>
          </TimeDisplay>
          <TimeLabel>
            <span>min</span> <span>sec</span>
          </TimeLabel>
        </TimerBox>
        <Button $backgroundColor={"#E9E9EB"} txt={"학습 종료"} />
      </Wrapper>
    </div>
  );
};

export default DetectingPage;

const Wrapper = styled.div`
  padding: 102px 38px 196px 38px;
  height: calc(100vh - 298px);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubText = styled.div`
  margin-top: 120px;
  color: #000;
  text-align: center;
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  > span {
    font-weight: 700;
  }
`;

const GraphBox = styled.div`
  margin-top: 20px;
`;

const TimerBox = styled.div`
  margin-top: 30px;
  text-align: center;
  margin-bottom: 110px;
`;

const TimeDisplay = styled.div`
  position: relative;
  display: flex;
  font-family: "Pretendard";
  font-style: normal;
  flex-shrink: 0;
  color: #1d1b20;
  text-align: center;
  font-size: 40px;
  font-style: normal;
`;

const TimeColon = styled.span`
  position: absolute;
  top: -5px;
  left: 87px;
  height: 72px;
  font-size: 57px;
  font-weight: 300;
  line-height: 64px;
`;

const TimeText = styled.span`
  margin: 0 12px;
  display: inline-block;
  width: 70px;
  height: 60px;
  line-height: 60px; // 텍스트를 세로 중앙 정렬
  padding: 0;
  color: #4f378b;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  background-color: #e6e0e9;
  border-radius: 8px;
  text-align: center; // 텍스트 중앙 정렬
  overflow: hidden; // 텍스트 넘침 방지
  text-overflow: ellipsis; // 텍스트가 넘칠 경우 줄임표 처리
  white-space: nowrap; // 텍스트를 한 줄로 유지
`;

const TimeLabel = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #49454f;
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 15px;
`;
