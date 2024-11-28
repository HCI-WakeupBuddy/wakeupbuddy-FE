import React from "react";
import styled from "styled-components";
import TitleText from "../components/TitleText";

const StartSetting = () => {
  return (
    <div>
      <Wrapper>
        <TitleText txt={"ooo님,"} />
      </Wrapper>
    </div>
  );
};

export default StartSetting;

const Wrapper = styled.div`
  padding: 102px 38px 196px 38px;
  /* background-color: #ebebeb; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
