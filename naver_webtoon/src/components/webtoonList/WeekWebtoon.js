import React from "react";
import styled from "styled-components";
import WebtoonCategoryHeader from "../webtoonHeader/WebtoonCategoryHeader";
import WebtoonDayHeader from "../webtoonHeader/WebtoonDayHeader";
import WebtoonHeader from "../webtoonHeader/WebtoonHeader";

const WeekWebtoon = () => {
  return (
    <Container>
      <WebtoonHeader/>
      <WebtoonCategoryHeader/>
      <WebtoonDayHeader/>
  </Container>
  );
};

export default WeekWebtoon;

const Container = styled.div`
  width: 1150px;
  height: 20vh;
  display: flex;
  flex-direction: column;
`;

