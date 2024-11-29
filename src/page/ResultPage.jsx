import React, { useState } from "react";
import styled from "styled-components";
import TitleText from "../components/common/TitleText";
import ResultBox from "../components/result/ResultBox";
import SampleImg from "../assets/img/sample-graph.png";

const MOCKRESULT = [
  { id: 1, graph: SampleImg, total: 3, drowsiness: 10, vibe: 5, study: 4 },
];

const ResultPage = () => {
  const username = localStorage.getItem("username");
  const [resultInfo, setResultInfo] = useState(MOCKRESULT);
  return (
    <div>
      {resultInfo.map((result) => (
        <Wrapper key={result.id}>
          <TitleText txt={"통계 결과"} />
          <SubText>{username}님의 학습 리포트입니다.</SubText>
          <GraphBox>
            <Graph src={result.graph} />
          </GraphBox>
          <ResultBox
            total={result.total}
            drowsiness={result.drowsiness}
            vibe={result.vibe}
            study={result.study}
          />
        </Wrapper>
      ))}
    </div>
  );
};

export default ResultPage;

const Wrapper = styled.div`
  padding: 102px 38px 196px 38px;
  height: calc(100vh - 298px);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SubText = styled.div`
  margin-top: 110px;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
`;

const GraphBox = styled.div`
  margin: 38px 0;
`;
const Graph = styled.img`
  width: 230px;
  height: 167px;
  flex-shrink: 0;
`;
