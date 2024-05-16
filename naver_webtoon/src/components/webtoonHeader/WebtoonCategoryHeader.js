import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const WebtoonCategoryHeader = () => {
  const navigate = useNavigate();

  const webtoonMenuActive = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <WebtoonCategoryHeaderWrapperLeft>
        <Menu>홈</Menu>
        <Menu className="webtoon" onClick={webtoonMenuActive}>
          웹툰
        </Menu>
        <Menu>베스트도전</Menu>
        <Menu>도전만화</Menu>
        <Menu>마이페이지</Menu>
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

  &.webtoon {
    color: white;
    background-color: #00dc64;
  }
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
