import React, { useState, useEffect } from "react";
import TitleText from "../components/common/TitleText";
import styled from "styled-components";
import Lottie from "lottie-react";
import Graph from "../animations/graph.json";
import Button from "../components/common/Button";

const DetectingPage = () => {
  const username = localStorage.getItem("username");
  localStorage.setItem("studyTime", 1);

  const initialMinutes = parseInt(localStorage.getItem("studyTime"), 10) || 0;

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
        <TitleText txt={"측정 중"} />
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
            <span>{String(minutes).padStart(2, "0")}</span> :{" "}
            <span>{String(seconds).padStart(2, "0")}</span>
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
  font-family: Pretendard;
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
  font-family: "Pretendard";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  > span {
    padding: 9px 18px;
    color: #4f378b;
    background-color: #e6e0e9;
    border-radius: 8px;
  }
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
