import React, { useEffect, useState } from "react";
import styled from "styled-components";

//components
import WebtoonAside from "./WebtoonAside";

const WebtoonSearchList = ({ searchWebtoons }) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [filteredWebtoons, setFilteredWebtoons] = useState([]);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        //연재여부 필터
        const filteredWebtoons = searchWebtoons.filter(
          (webtoon) => !webtoon.updateDays.includes("finished")
        );

        setFilteredWebtoons(filteredWebtoons);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [searchWebtoons]);

  return (
    <Container>
      <SearchKeywordArea>
        <SearchKeyword>갓오브하이스쿨</SearchKeyword> 에 대한 검색결과입니다.
      </SearchKeywordArea>
      <TabControl>
        <Tab
          onClick={() => handleOptionClick(0)}
          isSelected={selectedOption === 0}
        >
          전체({searchWebtoons.length})
        </Tab>
        <Tab
          onClick={() => handleOptionClick(1)}
          isSelected={selectedOption === 1}
        >
          웹툰({searchWebtoons.length})
        </Tab>
        <Tab
          onClick={() => handleOptionClick(2)}
          isSelected={selectedOption === 2}
        >
          베스트도전(0)
        </Tab>
        <Tab
          onClick={() => handleOptionClick(3)}
          isSelected={selectedOption === 3}
        >
          도전만화(0)
        </Tab>
        <Tab
          onClick={() => handleOptionClick(4)}
          isSelected={selectedOption === 4}
        >
          단행본(0)
        </Tab>
        <Tab
          onClick={() => handleOptionClick(5)}
          isSelected={selectedOption === 5}
        >
          만화(0)
        </Tab>
        <Tab
          onClick={() => handleOptionClick(6)}
          isSelected={selectedOption === 6}
        >
          장르소설(0)
        </Tab>
      </TabControl>

      <ContentWrap>
        <Content>
          <ContentHeader>
            <TabName>웹툰</TabName>
            <ResultCount>총 {searchWebtoons.length}</ResultCount>
            {/* 
            <ContentMore>웹툰 더보기 &#62;</ContentMore> */}
          </ContentHeader>
          <Result>
            <ResultList>
              {searchWebtoons.map((webtoon) => (
                <ResultItemBox key={webtoon._id}>
                  <>
                    <Image src={webtoon.img} alt={webtoon.title}></Image>
                    <ResultItemInfo>
                      <Title>{webtoon.title}</Title>
                      <WebtoonInfo>
                        <Author>
                          {webtoon.author} <MiddleDot>&bull;</MiddleDot> 글
                          <Sol> &#47; </Sol>
                        </Author>
                        <Illustrator>
                          {webtoon.author} <MiddleDot>&bull;</MiddleDot> 그림
                        </Illustrator>
                        <Separator>&#10072;</Separator>
                        <LastUpdate>
                          {filteredWebtoons ? (
                            <span> 연재중</span>
                          ) : (
                            <span> 완결</span>
                          )}
                        </LastUpdate>
                      </WebtoonInfo>
                      <Summary>{webtoon.searchKeyword}</Summary>
                      <TagArea>
                        <TagGroup>
                          <Tag>#판타지</Tag>
                          <Tag>#헌터물</Tag>
                          <Tag>#다크판타지</Tag>
                          <Tag>#소설원작</Tag>
                        </TagGroup>
                      </TagArea>
                    </ResultItemInfo>
                  </>
                </ResultItemBox>
              ))}
            </ResultList>
          </Result>
        </Content>
        <WebtoonAside />
      </ContentWrap>
    </Container>
  );
};

export default WebtoonSearchList;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 25px 0 25px;
  position: relative;
  width: 100%;
  max-width: 1230px;
`;

const SearchKeywordArea = styled.h2`
  display: block;
  align-items: center;
  font-size: 20px;
  width: 840px;
  height: 51px;
`;

const SearchKeyword = styled.strong`
  color: rgb(0, 220, 100);
  margin-right: 5px;
`;

const TabControl = styled.div`
  display: flex;
  padding-bottom: 16px;
  border-bottom: 1px solid rgb(235, 235, 235);
  width: 840px;
  height: 51px;
`;

const Tab = styled.div`
  display: flex;
  color: ${(props) => (props.isSelected ? "#00DC64" : "#000000")};
  margin-right: 20px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  border: 0px none rgb(0, 220, 100);
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
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

// const ContentHeadArea = styled.div`
//   display:flex;
//   align-items:center;
// `

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(235, 235, 235);
`;

const Result = styled.div``;

const ResultList = styled.ul`
  padding-left: 0px;
`;

const ResultItemBox = styled.li`
  display: flex;
  align-items: start;
  column-gap: 16px;
  margin-top: 20px;
  width: 840px;
  height: 156px;
`;

const Image = styled.img`
  background-size: contain;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 100%;
  width: 118px;
`;

const ResultItemInfo = styled.div``;

const TabName = styled.h2`
  font-size: 20px;
`;

const ResultCount = styled.span`
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

const LastUpdate = styled.span``;

const Summary = styled.p`
  font-size: 15px;
  font-weight: 500;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-top:3px;
  height:20px
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
  color: rgb(102, 102, 102);
  margin: 0 5px 0 5px;
  padding: 0 10px 10px 0;
`;

const MiddleDot = styled.span`
  color: #666666;
`;

const Separator = styled.span`
  margin: 0 3px 0 3px;
  color: #666666;
`;

const Sol = styled.span`
  color: #666666;
`;
