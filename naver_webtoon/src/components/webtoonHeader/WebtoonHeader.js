import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const WebtoonHeader = () => {
    const navigate = useNavigate();

    const webtoon = () => {
        navigate("/webtoon");
    };

    return (
        <Wrapper>
            <WrapperLeft>
                <NaverHeader>NAVER</NaverHeader>
                <Webtoon onClick={webtoon}>웹툰</Webtoon>
            </WrapperLeft>
            <WrapperRight>
                <SearchInput type="text" placeholder="제목/작가로 검색할 수 있습니다."/>
                <button><FaSearch className="customSearchIcon" size={24} /></button>
            </WrapperRight>
        </Wrapper>
    );
};

export default WebtoonHeader;

const Wrapper = styled.div`
    display: flex;
    width: 1150px;
    height: 6vh;
    justify-content: space-between;
`;

const WrapperLeft = styled.div`
    display: flex;
    width: 40vw;
    justify-content: space-around;
`;

const NaverHeader = styled.h1`
    font-color: black;
    font-size: 18px;
    margin-top: 20px;
    cursor: pointer;
`;

const Webtoon = styled.div`
    width: 1000px;
    font-size: 26px;
    font-weight: bold;
    margin-top: 14px;
    margin-left: 20px;
    cursor: pointer;
`;

const WrapperRight = styled.div`
    display: flex;
    width: 18vw;
    hegith: 10vh;
    justify-content: flex-end;
    align-items: center;
    margin-left: 18vw;
    margin-bottom: 2px;
    position: relative;
`;

const SearchInput = styled.input`
    display: inline-block;
    font-size: 10px;
    width: 400px;
    height: 28px;
    margin-top: 2px;
    margin-left: 50px;
    padding-left: 25px; 
`;

const searchButton = styled.button`
    margin-top: 4px;
`;