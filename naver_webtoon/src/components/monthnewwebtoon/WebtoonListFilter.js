import React, { useState, useEffect } from "react";
import styled from "styled-components";

const WebtoonListContainer = styled.div`
  display: flex;
  overflow-x: auto;
`;

const BoxContainer = styled.div`
  width: 275px;
  border: none;
  margin-bottom: 20px;
  margin-right: 17px;
`;

const TitleLink = styled.a`
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

const AuthorLink = styled.a`
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  color: #1a1a1a;
  text-decoration: none;
  padding: 0;
  cursor: pointer;
`;

const WebtoonImage = styled.img`
  width: 275px;
  height: 350px;
  object-fit: cover;
  cursor: pointer;
`;

const TruncateText = ({ text, maxLength }) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
};

const WebtoonListFilter = () => {
  const [webtoons, setWebtoons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWebtoons = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API}?service=naver&perPage=3000`
        );
        if (!response.ok) {
          throw new Error("네트워크 응답이 실패했습니다");
        }
        const data = await response.json();

        // 받아온 웹툰 데이터 중에서 신규 작품만 필터링하여 선택
        const newWebtoons = data.webtoons.filter(
          (webtoon) => webtoon.additional && webtoon.additional.new === true
        );

        // 무작위로 섞은 후 최신 신규 웹툰 중에서 처음 4개 선택
        const shuffledNewWebtoons = shuffleArray(newWebtoons);
        const latestNewWebtoons = shuffledNewWebtoons.slice(0, 4);

        setWebtoons(latestNewWebtoons);
        setLoading(false); // 로딩 상태 변경
        console.log("로드된 신규 웹툰 목록:", latestNewWebtoons);
      } catch (error) {
        console.error("웹툰 데이터를 불러오는 중 오류 발생:", error);
        setLoading(false); // 에러 발생 시 로딩 상태 변경
      }
    };

    fetchWebtoons();
  }, []); // 컴포넌트가 처음 마운트될 때 한 번만 실행합니다.

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  return (
    <WebtoonListContainer>
      {loading ? (
        <div>Loading...</div>
      ) : (
        webtoons.map((webtoon) => (
          <BoxContainer key={webtoon._id}>
            <div>
              <TitleLink>
                <WebtoonImage
                  src={webtoon.img}
                  alt="웹툰 이미지"
                  onClick={() => window.open(webtoon.url, "_blank")}
                />
              </TitleLink>
            </div>
            <div>
              <TitleLink
                href={webtoon.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TruncateText text={webtoon.title} maxLength={25} />
              </TitleLink>
            </div>
            <div>
              <AuthorLink
                href={webtoon.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TruncateText text={webtoon.author} maxLength={15} />
              </AuthorLink>
            </div>
          </BoxContainer>
        ))
      )}
    </WebtoonListContainer>
  );
};

export default WebtoonListFilter;
