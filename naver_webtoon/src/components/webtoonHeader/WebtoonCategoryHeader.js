import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const WebtoonCategoryHeader = () => {
    const navigate = useNavigate();

    const webtoonMenuActive = (e) => {
      navigate("/webtoon");
    }

    return (
        <Wrapper>
            <WebtoonCategoryHeaderWrapperLeft>
                <HomeMenu >홈</HomeMenu>
                <WebtoonMenu onClick={webtoonMenuActive}>웹툰</WebtoonMenu>
                <BestMenu >베스트도전</BestMenu>
                <ComicsMenu >도전만화</ComicsMenu>
                <MyPageMenu >마이페이지</MyPageMenu>
            </WebtoonCategoryHeaderWrapperLeft>
            <WebtoonCategoryHeaderWrapperRight>
                <WebtoonCategoryHeaderCreatorsButton>CREATOR'S</WebtoonCategoryHeaderCreatorsButton>
            </WebtoonCategoryHeaderWrapperRight>    
        </Wrapper>
    );
};

export default WebtoonCategoryHeader;

const Wrapper = styled.div`
    display: flex;
    width: 1150px;
    height: 6vh;
    margin-top: 20px;
    justify-content: space-between;
`;

const WebtoonCategoryHeaderWrapperLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30vw;
    height: 6vh;
    margin-top: px;
    justify-content: space-between;
    font-weight: bold;
    font-size: 17px;
`;

const HomeMenu = styled.div`
    cursor: pointer;
`;
const WebtoonMenu = styled.div`
    cursor: pointer;
    background-color: #00DC64; 
    color: white;
    heigth: 4vh;
`;
const BestMenu = styled.div`
    cursor: pointer;
`;
const ComicsMenu = styled.div`
    cursor: pointer;
`;
const MyPageMenu = styled.div`
    cursor: pointer;
`;

const WebtoonCategoryHeaderWrapperRight = styled.div`
    margin-right: -1vw;
    width: 14vw;
    height: 8vh;
    display: flex;
    justify-content: center;
`;

const WebtoonCategoryHeaderCreatorsButton = styled.button`
    width: 11vw;
    height: 4vh;
    margin-top: 4px;
    background-color: #00DC64;
    border: 1px solid #dbdbd5;
    margin-left: 11px;
`;