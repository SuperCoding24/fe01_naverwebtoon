import React, { useState, useEffect } from "react";

const WebtoonApi = () => {
  const [webtoonData, setWebtoonData] = useState({
    SUNDAY: [],
    MONDAY: [],
    TUESDAY: [],
    WEDNESDAY: [],
    THURSDAY: [],
    FRIDAY: [],
    SATURDAY: [],
  });

  useEffect(() => {
    const fetchWebtoons = async () => {
      try {
        const response = await fetch(
          "/api/api/webtoon/titlelist/weekday?order=user"
        );
        const data = await response.json();

        if (data && data.titleListMap) {
          const { titleListMap } = data;
          setWebtoonData(titleListMap);
        }
      } catch (error) {
        console.error("Error fetching webtoons:", error);
      }
    };

    fetchWebtoons();
  }, []);

  return (
    <div>
      <h1>네이버 웹툰 목록</h1>
      {Object.entries(webtoonData).map(([dayOfWeek, webtoons]) => (
        <div key={dayOfWeek}>
          <h2>{dayOfWeek}요일</h2>
          <ul>
            {webtoons.map((webtoon) => (
              <li key={webtoon.titleId}>
                <img src={webtoon.thumbnailUrl} alt={webtoon.titleName} />
                <div>
                  <h3>{webtoon.titleName}</h3>
                  <p>작가: {webtoon.author}</p>
                  <p>별점: {webtoon.starScore}</p>
                  <p>업데이트 여부: {webtoon.up ? "업데이트" : "휴재"}</p>
                  <p>성인 여부: {webtoon.adult ? "성인" : "일반"}</p>
                  <p>요일: {dayOfWeek} </p>
                  <p>신작 여부: {webtoon.new ? "신작" : "기존"}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WebtoonApi;
