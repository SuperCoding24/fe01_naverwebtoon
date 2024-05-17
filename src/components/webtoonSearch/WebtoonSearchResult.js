import React, { useState } from "react";
import styled from "styled-components";

const WebtoonSearchResult = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <>
      <SearchResultTitleArea>
        <SearchResultSearchText>'금의행'</SearchResultSearchText> 에 대한
        검색결과입니다.
      </SearchResultTitleArea>
      <TabWrapper>
        <Tab
          onClick={() => handleOptionClick(0)}
          isSelected={selectedOption === 0}
        >
          전체
        </Tab>
        <Tab
          onClick={() => handleOptionClick(1)}
          isSelected={selectedOption === 1}
        >
          웹툰
        </Tab>
        <Tab
          onClick={() => handleOptionClick(2)}
          isSelected={selectedOption === 2}
        >
          도전만화
        </Tab>
        <Tab
          onClick={() => handleOptionClick(3)}
          isSelected={selectedOption === 3}
        >
          단행본
        </Tab>
        <Tab
          onClick={() => handleOptionClick(4)}
          isSelected={selectedOption === 4}
        >
          만화
        </Tab>
        <Tab
          onClick={() => handleOptionClick(5)}
          isSelected={selectedOption === 5}
        >
          장르소설
        </Tab>
      </TabWrapper>
    </>
  );
};

export default WebtoonSearchResult;

const SearchResultTitleArea = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 50px;
`;

const SearchResultSearchText = styled.strong`
  color: rgb(0, 220, 100);
  margin-right: 5px;
`;

const TabWrapper = styled.div`
  display: flex;
  padding-bottom: 16px;
  border-bottom: 1px solid rgb(235, 235, 235);
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
  margin-right: 20px;
`;
