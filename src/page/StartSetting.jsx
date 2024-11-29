import React, { useEffect } from "react";
import styled from "styled-components";
import TitleText from "../components/common/TitleText";
import Button from "../components/common/Button";
import SettingTime from "../components/common/SettingTime";
import SettingVibration from "../components/common/SettingVibration";
import { useNavigate } from "react-router-dom";

const StartSetting = () => {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  const handleStudyStart = () => {
    alert(`${username}님의 학습과 함께 졸음 감지 뇌파 측정이 시작됩니다 🔥 `);
    navigate("/detecting");
  };

  useEffect(() => {
    localStorage.setItem("studyTime", 30);
    localStorage.setItem("vibrationLevel", "level1");
  }, []);

  return (
    <div>
      <Wrapper>
        <TextContianer>
          <TitleText txt={`${username}님,`} />
          <SubText>학습 시간과 진동세기를 설정해 주세요.</SubText>
        </TextContianer>
        <TimeBox>
          <SettingTime />
        </TimeBox>
        <VibrationBox>
          <SettingVibration />
        </VibrationBox>
        <ButtonContainer>
          <Button
            txt={"학습 시작"}
            onBtnClick={handleStudyStart}
            $backgroundColor={"#E9E9EB"}
          />
        </ButtonContainer>
      </Wrapper>
    </div>
  );
};

export default StartSetting;

const Wrapper = styled.div`
  padding: 102px 38px 196px 38px;
  background-color: #fff;
  height: calc(100vh - 298px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextContianer = styled.div`
  /* margin-top: -60px; */
`;
const SubText = styled.div`
  margin-top: 14px;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

const TimeBox = styled.div`
  margin: 36px;
`;
const VibrationBox = styled.div``;

const ButtonContainer = styled.div`
  margin-top: 35px;
  /* padding-bottom: 30px; */
`;
