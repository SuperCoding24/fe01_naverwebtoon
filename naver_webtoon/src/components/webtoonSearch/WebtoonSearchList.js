import React, { useState } from "react";
import styled from "styled-components";

//components
import WebtoonAside from "./WebtoonAside";

const WebtoonSearchList = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <Container>
      <SearchResultTitleArea>
        <SearchResultSearchText>'금의행'</SearchResultSearchText> 에 대한
        검색결과입니다.
      </SearchResultTitleArea>
      <SearchResultTabControl>
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
          베스트도전
        </Tab>
        <Tab
          onClick={() => handleOptionClick(3)}
          isSelected={selectedOption === 3}
        >
          도전만화
        </Tab>
        <Tab
          onClick={() => handleOptionClick(4)}
          isSelected={selectedOption === 4}
        >
          단행본
        </Tab>
        <Tab
          onClick={() => handleOptionClick(5)}
          isSelected={selectedOption === 5}
        >
          만화
        </Tab>
        <Tab
          onClick={() => handleOptionClick(6)}
          isSelected={selectedOption === 6}
        >
          장르소설
        </Tab>
      </SearchResultTabControl>

      <ContentWrap>
        <Content>
          <ComponentHeadArea>
            <ComponentHeadTitle>웹툰</ComponentHeadTitle>
            <ComponentHeadCount>총 2</ComponentHeadCount>
          </ComponentHeadArea>
          <SearchResult>
            <SearchResultList>
              <SearchResultListItem>
                <Image src="" alt="시한부 기사가 되었다" />
                <SearchResultListInfoArea>
                  <Title>시한부 기사가 되었다.</Title>
                  <WebtoonInfo>
                    <Author>
                      김두루미 <MiddleDot>&bull;</MiddleDot> 글 /
                    </Author>
                    <Illustrator>
                      김문경 <MiddleDot>&bull;</MiddleDot> 그림 |
                    </Illustrator>
                    <Episode> 73화 완결</Episode> |
                    <LastUpdate> 최종 업데이트</LastUpdate>
                  </WebtoonInfo>
                  <Summary>
                    시한부의 삶을 살아가는 루이스 크로이드. 살기 위해서는 다른
                    생명을 죽여야 한다. 똥 밭에서 굴러도 이승이 낫다고 했던가.
                    또 한 번의 기회. 살아남기 위해서라면 무슨 짓이라도 할
                    것이다.
                  </Summary>
                  <TagArea>
                    <TagGroup>
                      <Tag>#판타지</Tag>
                      <Tag>#헌터물</Tag>
                      <Tag>#다크판타지</Tag>
                      <Tag>#소설원작</Tag>
                    </TagGroup>
                  </TagArea>
                </SearchResultListInfoArea>
              </SearchResultListItem>
            </SearchResultList>
          </SearchResult>
        </Content>
        <WebtoonAside />
      </ContentWrap>
    </Container>
  );
};

export default WebtoonSearchList;

const Container = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

const SearchResultTitleArea = styled.h2`
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 50px;
`;

const SearchResultSearchText = styled.strong`
  color: rgb(0, 220, 100);
  margin-right: 5px;
`;

const SearchResultTabControl = styled.div`
  display: flex;
  padding-bottom: 16px;
  border-bottom: 1px solid rgb(235, 235, 235);
`;

const Tab = styled.div`
  display: flex;
  color: ${(props) => (props.isSelected ? "#00DC64" : "#666666")};
  margin-right: 20px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  border: 0px none rgb(0, 220, 100);
  cursor: pointer;
  font-size: 15px;
  font-weight: 800;
  height: 50px;
  line-height: 20px;
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 1190px;
`;

const Content = styled.div`
  display: block;
  width: 840px;
`;

const ComponentHeadArea = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(235, 235, 235);
`;

const SearchResult = styled.div``;

const SearchResultList = styled.ul`
  padding-left: 0px;
`;

const SearchResultListItem = styled.li`
  display: flex;
  align-items: start;
  column-gap: 16px;
`;

const Image = styled.img``;

const SearchResultListInfoArea = styled.div``;

const ComponentHeadTitle = styled.h2`
  font-size: 20px;
`;

const ComponentHeadCount = styled.span`
  align-items: center;
  color: rgb(102, 102, 102);
  display: flex;
  font-size: 15px;
  margin-left: 5px;
`;

const Title = styled.div`
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  text-align: left;
`;

const WebtoonInfo = styled.div`
  font-size: 15px;
  color: rgb(102, 102, 102);
`;

const Author = styled.span``;

const Illustrator = styled.span``;

const Episode = styled.span``;

const LastUpdate = styled.span``;

const Summary = styled.p`
  font-size: 15px;
  font-weight: 500;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow-x: hidden;
  overflow-y: hidden;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const TagArea = styled.div`
  display: block;
  margin-top: 12px;
  height: 30px;
`;

const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  border-radius: 4px;
  background-color: rgb(246, 246, 246);
  margin-right: 20px;
  font-size: 14px;
  font-weight: 500;
  margin: 0 5px 0 5px;
  padding: 0 10px 10px 0;
`;

const MiddleDot = styled.span`
  color: #b2b2b2;
`;
