import React from "react";
import styled from "styled-components";
import WebtoonListFilter from "./WebtoonListFilter";
import arrowSvg from "../../assets/arrow.svg";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-bottom: 5px;
  font-family: Pretendard, Helvetica, -apple-system, BlinkMacSystemFont,
    "Apple SD Gothic Neo", "맑은 고딕", "Malgun Gothic", "돋움", Dotum,
    sans-serif;
  font-size: 12px;
`;

const Webtoonbox = styled.div`
  width: 1180px;
  height: 331px;
  padding-top: 15px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bolder;
`;

const MoreWatch = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  line-height: 21px;
  font-weight: bold;
  color: ${props => props.theme.boldGrayFontColor};
  cursor: pointer;
`;

const MoreWatchImage = styled.img`
  padding-bottom: 2px;
  width: 18px;
  height: 18px;
  margin-right: 12px;
`;

const MonthNewWebtoonUI = () => {
  const moreWatchButton = () => {
    console.log("신작웹툰 더보기 버튼 클릭");
  };

  return (
    <Webtoonbox>
      <Header>
        <Title>이달의 신규 웹툰</Title>
        <MoreWatch onClick={moreWatchButton}>
          신작웹툰 더보기
          <MoreWatchImage src={arrowSvg} alt="화살표 이미지" />
        </MoreWatch>
      </Header>

      <WebtoonListFilter />
    </Webtoonbox>
  );
};

export default MonthNewWebtoonUI;
