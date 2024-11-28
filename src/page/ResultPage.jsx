import React from "react";
import styled from "styled-components";
import TitleText from "../components/TitleText";

const ResultPage = () => {
  return (
    <div>
      <Wrapper>
        <TitleText txt={"통계 결과"} />
      </Wrapper>
    </div>
  );
};

export default ResultPage;

const Wrapper = styled.div`
  padding: 102px 38px 196px 38px;
  /* background-color: #ebebeb; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
