import React from "react";
import styled from "styled-components";

const WebtoonDayHeader = () => {
  return (
    <Wrapper>
      <DayCategoryItem className="all">요일전체</DayCategoryItem>
      <DayCategoryItem>월</DayCategoryItem>
      <DayCategoryItem>화</DayCategoryItem>
      <DayCategoryItem>수</DayCategoryItem>
      <DayCategoryItem>목</DayCategoryItem>
      <DayCategoryItem>금</DayCategoryItem>
      <DayCategoryItem>토</DayCategoryItem>
      <DayCategoryItem>일</DayCategoryItem>
      <DayCategoryItem>매일+</DayCategoryItem>
      <DayCategoryItem>신작</DayCategoryItem>
      <DayCategoryItem className="end">완결</DayCategoryItem>
      <DayCategoryItem>장르&</DayCategoryItem>
    </Wrapper>
  );
};

export default WebtoonDayHeader;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1180px;
  height: 6vh;
  border-bottom: ${props => props.theme.borderColor};
`;

const DayCategoryItem = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 100%;
  padding: 0 15px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;

  &.all {
    width: fit-content;
    border-bottom: 2px solid #00dc64;
    font-weight: bold;
    color: #00dc64;
  }

  &.end {
    height: fit-content;
    border-right: ${props => props.theme.borderColor};
  }
`;
