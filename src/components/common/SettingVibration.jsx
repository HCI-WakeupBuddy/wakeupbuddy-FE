import React, { useState } from "react";
import styled from "styled-components";

const SettingVibration = () => {
  const [vibrationLevel, setVibrationLevel] = useState("level1"); // 진동 세기 상태

  const handleVibration = (e) => {
    let levelId = e ? e.target.id : "";
    setVibrationLevel(levelId);
    localStorage.setItem("vibrationLevel", levelId);
  };

  const handleCancel = (e) => {
    let levelId = "level1";
    setVibrationLevel(levelId);
    localStorage.setItem("vibrationLevel", levelId);
  };

  return (
    <Box>
      <TitleBox>
        <Title>진동 세기를 선택해 주세요.</Title>
        <ResetBtn onClick={handleCancel}>초기화</ResetBtn>
      </TitleBox>
      <Content>
        <Level1Btn
          id={"level1"}
          onClick={handleVibration}
          $isSelected={vibrationLevel === "level1"}
        >
          약
        </Level1Btn>
        <Level2Btn
          id={"level2"}
          onClick={handleVibration}
          $isSelected={vibrationLevel === "level2"}
        >
          중
        </Level2Btn>
        <Level3Btn
          id={"level3"}
          onClick={handleVibration}
          $isSelected={vibrationLevel === "level3"}
        >
          강
        </Level3Btn>
      </Content>
    </Box>
  );
};

export default SettingVibration;

// 스타일 컴포넌트
const Box = styled.div`
  width: 300px;
  height: 180px;
  flex-shrink: 0;
  border-radius: 28px;
  background: #e9e9eb;
`;

const Title = styled.div`
  color: #49454f;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.5px;
`;

const TitleBox = styled.div`
  padding: 20px 24px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  margin: 50px auto 0;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  justify-content: center;
`;

// 약 버튼
const Level1Btn = styled.button`
  width: 78px;
  height: 40px;
  margin-right: -3px;
  border-radius: 100px 0px 0px 100px;
  border: ${(props) =>
    props.$isSelected ? "2px solid #6750A4" : "1px solid #ccc"};
  background-color: ${(props) => (props.$isSelected ? "#E8DEF8" : "#fff")};
  color: ${(props) => (props.$isSelected ? "#6750A4" : "#49454f")};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  z-index: ${(props) => (props.$isSelected ? "100" : "0")};
`;

// 중 버튼
const Level2Btn = styled.button`
  width: 78px;
  height: 40px;
  border: ${(props) =>
    props.$isSelected ? "2px solid #6750A4" : "1px solid #ccc"};
  background-color: ${(props) => (props.$isSelected ? "#E8DEF8" : "#fff")};
  color: ${(props) => (props.$isSelected ? "#6750A4" : "#49454f")};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  z-index: ${(props) => (props.$isSelected ? "100" : "0")};
`;

// 강 버튼
const Level3Btn = styled.button`
  width: 78px;
  height: 40px;
  margin-left: -3px;
  border-radius: 0px 100px 100px 0px;
  border: ${(props) =>
    props.$isSelected ? "2px solid #6750A4" : "1px solid #ccc"};
  background-color: ${(props) => (props.$isSelected ? "#E8DEF8" : "#fff")};
  color: ${(props) => (props.$isSelected ? "#6750A4" : "#49454f")};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  z-index: ${(props) => (props.$isSelected ? "100" : "0")};
`;

const ResetBtn = styled.div`
  background-color: #e9e9eb;
  border: none;
  color: #6750a4;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;
