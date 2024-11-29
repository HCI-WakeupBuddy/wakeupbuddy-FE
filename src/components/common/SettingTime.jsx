import React, { useState } from "react";
import styled from "styled-components";

const SettingTime = () => {
  const [duration, setDuration] = useState(30); // 학습 시간 상태
  const [isChange, setIsChange] = useState(false); // 배경색 변경 여부 상태

  const handleCancel = () => {
    let baseTime = 30;
    setDuration(baseTime);
    localStorage.setItem("duration", baseTime);
    setIsChange(false); // 변경 상태 초기화
  };

  const handleTimeChange = (e) => {
    const inputValue = e.target.value;
    if (isNaN(inputValue)) {
      return;
    }
    const value = parseInt(inputValue, 10);
    setDuration(value);
    setIsChange(true);
    localStorage.setItem("duration", value);
  };

  return (
    <Box>
      <TitleBox>
        <Title>학습 시간을 입력해 주세요.</Title>
        <ResetBtn onClick={handleCancel}>초기화</ResetBtn>
      </TitleBox>
      <Content>
        <InputTime
          type="number"
          value={duration}
          onChange={handleTimeChange}
          min="1" // 최소값 설정
          // max="999" 최대값 설정
          step="1" // 스크롤 조작 시 1씩 증가
          $isChange={isChange} // Styled Components로 상태 전달
        />
        <MinText>min</MinText>
      </Content>
      <ErrorMessage>* 숫자만 입력해주세요.</ErrorMessage>
    </Box>
  );
};

export default SettingTime;

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
  font-style: normal;
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
  margin: 30px auto 0;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  justify-content: center;
`;

const InputTime = styled.input`
  display: flex;
  width: 112px;
  height: 68px;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 2px solid #6750a4;
  background-color: ${(props) =>
    props.$isChange ? "#E8DEF8" : "#E9E9EB"}; /* isChange에 따라 배경색 변경 */
  text-align: center;
  text-align: center;
  color: #6750a4;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 52px;
  outline: none;
`;

const MinText = styled.span`
  margin-left: 13px;
  color: #6750a4;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
`;

const ResetBtn = styled.div`
  background-color: #e9e9eb;
  border: none;
  color: #6750a4;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  text-align: left;
  margin: 0;
  margin-top: 7px;
  margin-left: 65px;
  color: #e15cd8;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
`;
