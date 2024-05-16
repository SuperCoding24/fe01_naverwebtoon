import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const WebtoonCategoryHeader = () => {
  const [selectedOption, setSelectedOption] = useState(1);
  const navigate = useNavigate();

  const handleOptionClick = index => {
    setSelectedOption(index);
  };

  const webtoonMenuActive = () => {
    navigate("/");
    handleOptionClick(1);
  };

  return (
    <Wrapper>
      <WebtoonCategoryHeaderWrapperLeft>
        <Menu
          onClick={() => handleOptionClick(0)}
          isSelected={selectedOption === 0}
        >
          홈
        </Menu>
        <Menu onClick={webtoonMenuActive} isSelected={selectedOption === 1}>
          웹툰
        </Menu>
        <Menu
          onClick={() => handleOptionClick(2)}
          isSelected={selectedOption === 2}
        >
          베스트도전
        </Menu>
        <Menu
          onClick={() => handleOptionClick(3)}
          isSelected={selectedOption === 3}
        >
          도전만화
        </Menu>
        <Menu
          onClick={() => handleOptionClick(4)}
          isSelected={selectedOption === 4}
        >
          마이페이지
        </Menu>
      </WebtoonCategoryHeaderWrapperLeft>
      <WebtoonCategoryHeaderWrapperRight>
        <WebtoonCategoryHeaderCreatorsButton>
          CREATOR'S
        </WebtoonCategoryHeaderCreatorsButton>
      </WebtoonCategoryHeaderWrapperRight>
    </Wrapper>
  );
};

export default WebtoonCategoryHeader;

const Wrapper = styled.div`
  display: flex;
  width: 1180px;
  height: 55px;
  justify-content: space-between;
  border-bottom: ${props => props.theme.borderColor};
`;

const WebtoonCategoryHeaderWrapperLeft = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 17px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 100%;
  padding: 0 18px;
  cursor: pointer;

  background-color: ${props => (props.isSelected ? "#00dc64" : "")};
  color: ${props => (props.isSelected ? "white" : "")};

  /* &.webtoon {
    color: white;
    background-color: #00dc64; */
  /* } */
`;

const WebtoonCategoryHeaderWrapperRight = styled.div`
  display: flex;
  align-items: center;
`;

const WebtoonCategoryHeaderCreatorsButton = styled.button`
  width: 11vw;
  height: 40px;
  background-color: #00dc64;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
