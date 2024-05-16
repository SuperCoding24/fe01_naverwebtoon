import React from "react";
import styled from "styled-components";

import WebtoonHeader from "../webtoonHeader/WebtoonHeader";
import WebtoonCategoryHeader from "../webtoonHeader/WebtoonCategoryHeader";
import WebtoonDayHeader from "../webtoonHeader/WebtoonDayHeader";

const WeekWebtoon = () => {
  return (
    <Container>
      <WebtoonHeader />
      <WebtoonCategoryHeader />
      <WebtoonDayHeader />
    </Container>
  );
};

export default WeekWebtoon;

const Container = styled.div`
  width: 100vw;
  /* height: 100vh; */
  /* display: flex; */
  justify-content: center;
`;
