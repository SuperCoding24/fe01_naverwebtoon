import React from "react";
import styled from "styled-components";

const WebtoonListContainer = styled.div`
  display: flex;
  overflow-x: auto;
`;

const BoxContainer = styled.div`
  width: 272px;
  border: none;
  margin-bottom: 20px;
  margin-right: 12px;
`;

const TitleLink = styled.div`
  text-decoration: none;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  color: #1f1810;
  word-break: break-word;
`;

const AuthorLink = styled.div`
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  color: #1a1a1a;
  text-decoration: none;
  padding: 0;
  color: inherit;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const DescriptionText = styled.div`
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: #929292;
`;

const WebtoonImage = styled.img`
  width: 272px;
  height: 165px;
  object-fit: cover;
`;

const TruncateText = ({ text, maxLength }) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
};

const WebtoonListFilter = () => {
  const webtoons = [
    {
      id: 1,
      title: "웹툰 제목입니다아아아아아아아아아",
      author: "작가 이름입니다ㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
      description: "웹툰에 대한 간략한 설명이 여기에 들어갑니다.",
      imageSrc: "이미지 URL 주소를 여기에 입력",
    },
    {
      id: 2,
      title: "웹툰 제목입니다아아아아아아아아아",
      author: "작가 이름입니다ㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
      description: "웹툰에 대한 간략한 설명이 여기에 들어갑니다.",
      imageSrc: "이미지 URL 주소를 여기에 입력",
    },
    {
      id: 3,
      title: "웹툰 제목입니다아아아아아아아아아",
      author: "작가 이름입니다ㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
      description: "웹툰에 대한 간략한 설명이 여기에 들어갑니다.",
      imageSrc: "이미지 URL 주소를 여기에 입력",
    },
    // 추가 웹툰 데이터...
  ];

  const handleButtonClick = (webtoonId) => {
    console.log(`클릭된 웹툰 ID: ${webtoonId}`);
  };

  return (
    <WebtoonListContainer>
      {webtoons.map((webtoon) => (
        <BoxContainer key={webtoon.id}>
          <div>
            <WebtoonImage src={webtoon.imageSrc} alt="이미지" />
          </div>
          <div>
            <TitleLink onClick={() => handleButtonClick(webtoon.id)}>
              <TruncateText text={webtoon.title} maxLength={19} />
            </TitleLink>
          </div>
          <div>
            <AuthorLink onClick={() => handleButtonClick(webtoon.id)}>
              <TruncateText text={webtoon.author} maxLength={15} />
            </AuthorLink>
          </div>
          <DescriptionText>
            <TruncateText text={webtoon.description} maxLength={39} />
          </DescriptionText>
        </BoxContainer>
      ))}
    </WebtoonListContainer>
  );
};

export default WebtoonListFilter;
