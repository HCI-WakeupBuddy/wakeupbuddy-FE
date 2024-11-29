import styled from "styled-components";

const Button = ({ txt, onBtnClick, type, $backgroundColor }) => {
  return (
    <div>
      <ButtonBox
        onClick={onBtnClick}
        type={type}
        $backgroundColor={$backgroundColor}
      >
        {txt || "버튼"}
      </ButtonBox>
    </div>
  );
};

export default Button;

const ButtonBox = styled.button`
  background-color: ${(props) => props.$backgroundColor || "#EADDFF"};
  width: 300px;
  height: 50px;
  border-radius: 15px;
  border: none;
  color: black;
  font-weight: medium;
  cursor: pointer;
  font-size: 14px;
  /* box-shadow: 0px 0px 12px 2px #0000001f; */
`;
