import React from "react";
import TitleText from "../components/common/TitleText";
import styled from "styled-components";

const WearingMuse = () => {
  return (
    <div>
      <Wrapper>
        <TitleText txt={"WakeupBuddy"} />
      </Wrapper>
    </div>
  );
};

export default WearingMuse;

const Wrapper = styled.div`
  padding: 102px 38px 196px 38px;
  height: calc(100vh - 298px);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
