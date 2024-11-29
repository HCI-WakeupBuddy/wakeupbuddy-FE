import React, { useState } from "react";
import styled from "styled-components";

const SettingVibration = () => {
  const [vibrationLevel, setVibrationLevel] = useState("약"); // 진동 세기 상태

  const handleVibration = () => {
    localStorage.setItem("vibrationLevel", vibrationLevel);
  };

  const handleCancel = () => {
    setVibrationLevel("약");
  };

  return (
    <Box>
      <Title>진동 세기를 선택해 주세요.</Title>
      <Content>
        <Level1Btn
          onClick={() => setVibrationLevel("약")}
          isSelected={vibrationLevel === "약"}
        >
          약
        </Level1Btn>
        <Level2Btn
          onClick={() => setVibrationLevel("중")}
          isSelected={vibrationLevel === "중"}
        >
          중
        </Level2Btn>
        <Level3Btn
          onClick={() => setVibrationLevel("강")}
          isSelected={vibrationLevel === "강"}
        >
          강
        </Level3Btn>
      </Content>

      <Buttons>
        <Btn onClick={handleCancel}>취소</Btn>
        <Btn onClick={handleVibration}>확인</Btn>
      </Buttons>
    </Box>
  );
};

export default SettingVibration;

// 스타일 컴포넌트
const Box = styled.div`
  display: flex;
  position: relative;
  width: 300px;
  height: 220px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex-shrink: 0;
  border-radius: 28px;
  background: #e9e9eb;
`;

const Title = styled.div`
  display: flex;
  padding: 20px 24px 0;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  color: #49454f;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.5px;
`;

const Content = styled.div`
  display: flex;
  margin: 30px auto 0;
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
    props.isSelected ? "2px solid #6750A4" : "1px solid #ccc"};
  background-color: ${(props) => (props.isSelected ? "#E8DEF8" : "#fff")};
  color: ${(props) => (props.isSelected ? "#6750A4" : "#49454f")};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  z-index: ${(props) => (props.isSelected ? "100" : "0")};
`;

// 중 버튼
const Level2Btn = styled.button`
  width: 78px;
  height: 40px;
  border: ${(props) =>
    props.isSelected ? "2px solid #6750A4" : "1px solid #ccc"};
  background-color: ${(props) => (props.isSelected ? "#E8DEF8" : "#fff")};
  color: ${(props) => (props.isSelected ? "#6750A4" : "#49454f")};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  z-index: ${(props) => (props.isSelected ? "100" : "0")};
`;

// 강 버튼
const Level3Btn = styled.button`
  width: 78px;
  height: 40px;
  margin-left: -3px;
  border-radius: 0px 100px 100px 0px;
  border: ${(props) =>
    props.isSelected ? "2px solid #6750A4" : "1px solid #ccc"};
  background-color: ${(props) => (props.isSelected ? "#E8DEF8" : "#fff")};
  color: ${(props) => (props.isSelected ? "#6750A4" : "#49454f")};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  z-index: ${(props) => (props.isSelected ? "100" : "0")};
`;

const Buttons = styled.div`
  position: absolute;
  left: 190px;
  bottom: 10px;
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  /* gap: 8px; */
`;

const Btn = styled.button`
  display: flex;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #e9e9eb;
  border: none;
  color: #6750a4;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #d3d3e1;
  }
`;
