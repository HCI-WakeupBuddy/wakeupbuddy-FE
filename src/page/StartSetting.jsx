import React from "react";
import styled from "styled-components";
import TitleText from "../components/common/TitleText";

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
  height: calc(100vh - 298px);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
