import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const WebtoonCategoryHeader = () => {
    const navigate = useNavigate();

    const webtoonMenuActive = () => {
      navigate("/webtoon");
    };

    return (
        <Wrapper>
            <WebtoonCategoryHeaderWrapperLeft>
                <WebtoonCategoryHeaderUl>
                    <HomeMenu>홈</HomeMenu>
                    <WebtoonMenu className="WebtoonMenu" onClick={webtoonMenuActive}>웹툰</WebtoonMenu>
                    <WebtoonCategoryHeaderLi>베스트도전</WebtoonCategoryHeaderLi>
                    <WebtoonCategoryHeaderLi>도전만화</WebtoonCategoryHeaderLi>
                    <WebtoonCategoryHeaderLi>마이페이지</WebtoonCategoryHeaderLi>
                </WebtoonCategoryHeaderUl>
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

const WebtoonCategoryHeaderUl = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    gap: 2px; 
       
`;

const WebtoonCategoryHeaderLi = styled.li`
    width: 7vw;
    height: 11vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const HomeMenu = styled.li`
    margin-left: -64px;
    width: 6vw;
    height: 11vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const WebtoonMenu = styled.li`
    margin-right: 30px;
    width: 6vw;
    height: 11vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #00DC64; 
    color: white;
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
    border: none;
    border-radius: 4px;
    color: white;
    margin-left: 15px;
    cursor: pointer;
`;