import React, { useState } from "react";
import styled from "styled-components";

const SettingTime = () => {
  const [studyTime, setStudyTime] = useState(30); // 학습 시간 상태
  const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지 상태
  const [isValid, setIsValid] = useState(true); // 유효성 상태
  const [isChange, setIsChange] = useState(false); // 배경색 변경 여부 상태

  const handleCancel = () => {
    setStudyTime(30);
    setErrorMessage(""); // 취소 시 에러 메시지 초기화
    setIsValid(true); // 유효성 초기화
    setIsChange(false); // 변경 상태 초기화
  };

  const handleTime = () => {
    setIsChange(false);
    localStorage.setItem("sutdyTime", studyTime);
    setErrorMessage(""); // 성공 시 에러 메시지 제거
  };

  const handleTimeChange = (e) => {
    setIsChange(true); // 값 변경 시 isChange를 true로 설정
    const value = parseInt(e.target.value, 10);

    // 숫자인지 확인 및 1~60 범위 제한
    if (isNaN(value) || value < 1 || value > 60) {
      setErrorMessage("* 학습 시간은 1~60분 사이로 입력해 주세요."); // 유효하지 않은 입력 처리
      setIsValid(false); // 버튼 비활성화
    } else {
      setErrorMessage(""); // 에러 메시지 제거
      setIsValid(true); // 버튼 활성화
      setStudyTime(value); // 상태 업데이트
    }
  };

  return (
    <Box>
      <Title>학습 시간을 입력해 주세요.</Title>
      <Content>
        <InputTime
          type="number"
          value={studyTime}
          onChange={handleTimeChange}
          min="1" // 최소값 설정
          max="60" // 최대값 설정
          step="1" // 스크롤 조작 시 1씩 증가
          isChange={isChange} // Styled Components로 상태 전달
        />
        <MinText>min</MinText>
      </Content>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Buttons>
        <Btn onClick={handleCancel}>취소</Btn>
        <Btn onClick={handleTime} disabled={!isValid}>
          확인
        </Btn>
      </Buttons>
    </Box>
  );
};

export default SettingTime;

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
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.5px;
`;

const Content = styled.div`
  display: flex;
  margin: 10px auto 0;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
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
    props.isChange ? "#E8DEF8" : "#E9E9EB"}; /* isChange에 따라 배경색 변경 */
  text-align: center;
  text-align: center;
  color: #6750a4;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 52px;
  outline: none;

  /* 비활성화 상태일 때 스타일 추가 */
  &:invalid {
    border-color: red;
  }
`;

const MinText = styled.span`
  margin-left: 13px;
  color: #6750a4;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
`;

const ErrorMessage = styled.div`
  text-align: center;
  margin: 0;
  align-self: center;
  margin-top: -7px;
  color: #e15cd8;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
`;

const Buttons = styled.div`
  position: absolute;
  left: 190px;
  bottom: 10px;
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 8px;
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
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;

  /* 비활성화 상태일 때 스타일 추가 */
  &:disabled {
    color: gray;
    cursor: not-allowed;
  }
`;
