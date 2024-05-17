import React, { useState } from "react";
import styled from "styled-components";

const WebtoonAside = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <>
      <Aside>
        <AsideTitleArea>
          <AsideTitle>실시간 인기 웹툰</AsideTitle>
          <AsideTabControl>
            <Tab
              onClick={() => handleOptionClick(0)}
              isSelected={selectedOption === 0}
            >
              전체
            </Tab>
            <MiddleDot>&bull;</MiddleDot>
            <Tab
              onClick={() => handleOptionClick(1)}
              isSelected={selectedOption === 1}
            >
              여성
            </Tab>
            <MiddleDot>&bull;</MiddleDot>
            <Tab
              onClick={() => handleOptionClick(2)}
              isSelected={selectedOption === 2}
            >
              남성
            </Tab>
          </AsideTabControl>
        </AsideTitleArea>
        <AsideListContent>
          <AsideListItem>
            <PosterLink src="" alt="박만사"></PosterLink>
            <AsideRankingArea>
              <AsideRanking>1</AsideRanking>
            </AsideRankingArea>
            <AsideInfoArea>
              <AsideRankingTitle>김부장</AsideRankingTitle>
              <AsideRankingInfo>
                박만사, 남자의 이야기 / 정종택
              </AsideRankingInfo>
            </AsideInfoArea>
          </AsideListItem>
        </AsideListContent>
      </Aside>
    </>
  );
};

export default WebtoonAside;

const Aside = styled.div`
  display: block;
  width: 300px;
`;

const AsideTitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(235, 235, 235);
  height: 50px;
  margin-bottom: 5px;
`;

const AsideTitle = styled.div`
  font-size: 20px;
`;

const AsideTabControl = styled.div`
  margin-top: 4px;
  display: flex;
`;

const Tab = styled.div`
  display: flex;
  color: ${(props) => (props.isSelected ? "#00DC64" : "#666666")};
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  border: 0px none rgb(0, 220, 100);
  cursor: pointer;
  font-size: 15px;
  font-weight: 700px;
  height: 50px;
  line-height: 20px;
`;

const AsideListContent = styled.ul`
  display: flex;
  flex-direction: column;
  margin-block-start: 18px;
  padding-left: 0px;
`;

const AsideListItem = styled.li`
  display: flex;
  column-gap: 12px;
  text-align: left;
`;

const PosterLink = styled.img`
  display: block;
  text-align: left;
  text-decoration: none, solid, rgb(0, 0, 0);
`;

const AsideRankingArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 25px;
`;

const AsideRanking = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 20px;
`;

const AsideInfoArea = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  row-gap: 2px;
  height: 80px;
`;

const AsideRankingTitle = styled.div`
  font-weight: 600;
`;

const AsideRankingInfo = styled.div`
  font-size: 14px;
`;

const MiddleDot = styled.span`
  padding: 16px 3px 0px 3px;

  font-size: 80%;

  color: #b2b2b2;
`;
