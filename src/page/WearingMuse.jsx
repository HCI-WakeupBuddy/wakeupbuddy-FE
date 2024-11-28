import React from "react";
import TitleText from "../components/TitleText";
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
  /* background-color: #ebebeb; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
