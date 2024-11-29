import React from "react";
import styled from "styled-components";

const ResultBox = ({ total, drowsiness, vibe, study }) => {
  return (
    <div>
      <Wrapper>
        <TextBox>
          <Total>📚 총 학습 시간 : {total}</Total>
          <Drowsiness>😴 졸음 시간 : {drowsiness}</Drowsiness>
          <Vibe>📳 일어나친구야! : {vibe}회</Vibe>
          <Study>🔥 집중 시간 : {study}</Study>
        </TextBox>
      </Wrapper>
    </div>
  );
};

export default ResultBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 202px;
  /* text-align: left; */
  align-items: center;
  justify-content: center;
  /* padding: 40px 37px; */
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

const TextBox = styled.div`
  text-align: left;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  line-height: 200%; /* 24px */
  letter-spacing: -0.176px;
`;

const Total = styled.div``;
const Drowsiness = styled.div``;
const Vibe = styled.div``;
const Study = styled.div``;
