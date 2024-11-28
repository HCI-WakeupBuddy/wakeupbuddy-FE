import React from "react";
import styled from "styled-components";
import TitleText from "../components/TitleText";

const DetectingPage = () => {
  return (
    <div>
      <Wrapper>
        <TitleText txt={"측정 중"} />
      </Wrapper>
    </div>
  );
};

export default DetectingPage;

const Wrapper = styled.div`
  padding: 102px 38px 196px 38px;
  /* background-color: #ebebeb; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
