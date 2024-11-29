import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import TitleText from "../components/common/TitleText";
import Lottie from "lottie-react";
import Check from "../assets/animations/checkmark.json";
import apiCall from "../api/Api";

const WearingPage = () => {
  const [museStatus, setMuseStatus] = useState(false);
  const [wearingMessage, setWearingMessage] = useState(
    "WakeupBuddy를 착용해주세요."
  );
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const isNavigating = useRef(false); // 중복 navigate 방지

  let time = 1;

  useEffect(() => {
    const intervalId = setInterval(async () => {
      if (isNavigating.current) {
        clearInterval(intervalId); // navigate 중이면 interval 중지
        return;
      }

      try {
        const requestBody = { username };
        const response = await apiCall(
          "/api/muse/muse-status",
          "POST",
          requestBody
        );
        console.log(response.data.status);
        setMuseStatus(response.data.status);

        if (response.data.status === true) {
          clearInterval(intervalId); // interval 중지
          isNavigating.current = true; // navigate 상태 설정
          setTimeout(() => {
            navigate("/setting");
          }, 3000); // 3초 대기 후 페이지 이동
        } else {
          time += 1;
          if (time > 5) {
            setWearingMessage(
              "WakeupBuddy를 올바르게 착용했는지 확인해주세요."
            );
          }
        }
      } catch (error) {
        console.error("error", error);
      }
    }, 2000); // 2초마다 요청

    return () => {
      clearInterval(intervalId); // 컴포넌트 언마운트 시 interval 정리
    };
  }, [username, navigate]);

  return (
    <div>
      <Wrapper>
        <TitleText txt={"WakeupBuddy"} />
        {museStatus ? (
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
              {wearingMessage}
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
