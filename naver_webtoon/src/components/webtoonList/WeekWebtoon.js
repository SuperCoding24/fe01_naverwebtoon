import React from "react";
import styled from "styled-components";

import WebtoonHeader from "../webtoonHeader/WebtoonHeader";
import WebtoonCategoryHeader from "../webtoonHeader/WebtoonCategoryHeader";
import WebtoonDayHeader from "../webtoonHeader/WebtoonDayHeader";

const WeekWebtoon = () => {
  return (
    <div>
        <WebtoonHeader />
        <FirstBorder></FirstBorder>
        <WebtoonCategoryHeader />
        <FirstBorder></FirstBorder>
        <WebtoonDayHeader />
        <LastBorder></LastBorder>
    </div>
  );
};

export default WeekWebtoon;

const FirstBorder = styled.div`
    border-top: solid 1px #ebebeb;
    margin-top: 17px;
`;

const LastBorder = styled.div`
    border-top: solid 1px #ebebeb;
    margin-top: 1px;
`;