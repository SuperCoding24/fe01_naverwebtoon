import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const WebtoonHeader = () => {
    const navigate = useNavigate();
    const login = () => {
        navigate("/");
    };

    const webtoon = () => {
        navigate("/webtoon");
    };

    return (
        <Wrapper>
            <WrapperLeft>
                <Naver>NAVER</Naver>
                <Webtoon onClick={webtoon}>웹툰</Webtoon>
            </WrapperLeft>
            <WrapperRight>
                <SearchInput type="text" placeholder="제목/작가로 검색할 수 있습니다."/>
                <LoginButton onClick={login}>로그인</LoginButton>
            </WrapperRight>
        </Wrapper>
    );
};

export default WebtoonHeader;

const Wrapper = styled.div`
    display: flex;
    width: 80vw;
    height: 6vh;
    justify-content: space-between;
`;

const WrapperLeft = styled.div`
    display: flex;
    width: 8vw;
    justify-content: space-around;
`;

const Naver = styled.h1`
    font-color: black;
    font-size: 18px;
    margin-top: 20px;
    cursor: pointer;
    margin-left: -20px;
`;

const Webtoon = styled.div`
    font-color: black;
    font-size: 26px;
    font-weight: bold;
    margin-top: 14px;
    margin-left: -20px;
    cursor: pointer;

`;


const WrapperRight = styled.div`
    display: flex;
    width: 18vw;
    hegith: 10vh;
    justify-content: space-around;
    margin-right: 18vw;
`;

const SearchInput = styled.input`
    display: inline-block;
    font-size: 10px;
    width: 200px;
    height: 28px;
    margin-top: 20px;
`;

const LoginButton = styled.button`
    border: 1px solid gray;
    background-color: white;
    cursor: pointer;
    height: 22px;
    margin-top: 24px;
`;
