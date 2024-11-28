import React from "react";
import styled from "styled-components";

const TitleText = ({ txt }) => {
  return (
    <div>
      <Title>{txt || "제목"}</Title>
    </div>
  );
};

export default TitleText;

const Title = styled.div`
  color: #000;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  /* line-height: 150%; 
  letter-spacing: -0.24px; */
`;
