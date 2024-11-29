import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import TitleText from "../components/common/TitleText";
import Lottie from "lottie-react";
import Check from "../assets/animations/checkmark.json";

const WearingPage = () => {
  const [state, setState] = useState(false);
  const username = localStorage.getItem("username");

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(true);
      setTimeout(() => {
        navigate("/setting");
      }, 3000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <Wrapper>
        <TitleText txt={"WakeupBuddy"} />
        {state ? (
          <div>
            <SubText>
              <span>{username}님,</span>
              <br />
              WakeupBuddy가 올바르게 착용되었습니다 :)
            </SubText>
            <CheckBox>
              <Lottie
                animationData={Check}
                loop={false}
                autoplay={true}
                style={{ width: 65, height: 65 }}
              />
            </CheckBox>
          </div>
        ) : (
          <div>
            <SubText>
              <span>{username}님,</span>
              <br />
              WakeupBuddy를 착용해주세요.
            </SubText>
            <LoadingBox>
              <BeatLoader color="#6750A4" />
            </LoadingBox>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default WearingPage;

const Wrapper = styled.div`
  padding: 102px 38px 196px 38px;
  height: calc(100vh - 298px);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubText = styled.div`
  text-align: center;
  margin-top: 138px;
  color: #000;
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  > span {
    font-size: 18px;
    font-weight: 600;
  }
`;
const CheckBox = styled.div`
  margin-top: 55px;
  display: flex;
  justify-content: center;
`;

const LoadingBox = styled.div`
  margin-top: 53px;
  display: flex;
  justify-content: center;
`;
