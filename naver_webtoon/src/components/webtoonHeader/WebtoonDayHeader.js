import React from 'react';
import styled from "styled-components";

const WebtoonDayHeader = () => {
    return (
        <Wrapper>
            <DivWrapper>
                <WebtoonDayCategoryList>
                    <DayCategoryItemAll>요일전체</DayCategoryItemAll>
                    <DayCategoryItem>월</DayCategoryItem>
                    <DayCategoryItem>화</DayCategoryItem>
                    <DayCategoryItem>수</DayCategoryItem>
                    <DayCategoryItem>목</DayCategoryItem>
                    <DayCategoryItem>금</DayCategoryItem>
                    <DayCategoryItem>토</DayCategoryItem>
                    <DayCategoryItem>일</DayCategoryItem>
                    <DayCategoryItem>매일+</DayCategoryItem>
                    <DayCategoryItem>신작</DayCategoryItem>
                    <DayCategoryItem>완결</DayCategoryItem>
                    <DayCategoryItem>장르&</DayCategoryItem>
                </WebtoonDayCategoryList>
            </DivWrapper>
        </Wrapper>
    );
};

export default WebtoonDayHeader;

const Wrapper = styled.div`
    width: 1150px;
    height: 6vh;
    margin-top: 20px;
`;

const DivWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    margin-top: -10px;
`;

const WebtoonDayCategoryList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    gap: 16px; 
    font-weight: bold;
`;

const DayCategoryItemAll = styled.li`
    border-bottom: 1px solid green;
    width: 5vw;
    height: 4vh;
    margin-left: -38px;
    margin-right: 30px;
`;

const DayCategoryItem = styled.li`
    display: inline-block;
    margin-left: -64px;
    width: 8vw;
    height: 4vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: -5px;
`;