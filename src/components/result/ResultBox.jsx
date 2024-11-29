import React from "react";
import styled from "styled-components";

const ResultBox = ({ total, drowsiness, vibe, study }) => {
  return (
    <div>
      <Wrapper>
        <Total>📚 총 학습 시간 : {total} 분</Total>
        <Drowsiness>😴 졸음 시간 : {drowsiness} 분</Drowsiness>
        <Vibe>📳 일어나친구야! : {vibe} 회</Vibe>
        <Study>= 🔥 졸지 않고 공부한 시간 : {study} 분</Study>
      </Wrapper>
    </div>
  );
};

export default ResultBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 37px;
  gap: 14px;
  flex-shrink: 0;
  border-radius: 28px;
  background: #f0e6ff;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 1.6;
`;

const Total = styled.div``;
const Drowsiness = styled.div``;
const Vibe = styled.div``;
const Study = styled.div``;
