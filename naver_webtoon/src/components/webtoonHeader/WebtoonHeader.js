import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const WebtoonHeader = () => {
    const navigate = useNavigate();

    const webtoon = () => {
        navigate("/webtoon");
    };

    const [keyword, setKeyword] = useState('');

    const getValue = (event) => {
        console.log("검색어: " , event.target.value);
        setKeyword(event.target.value);
    };

    const onSubmitSearch = (event) => {
        if (event.key === "Enter") {
            handleSearch()
            console.log(event);
        };
    };

    const handleSearch = () => {
        const fetchWebtoons = async () => {
            try {
              const response = await fetch(
                `${process.env.REACT_APP_API}/search?keyword=${keyword}`
              );
              const data = await response.json();
              console.log("data", data);
              console.log("data.webtoons: " , data.webtoons);
              navigate("/search",  data.webtoons);
            } catch (error) {
                console.log(error);
            }
          };

          fetchWebtoons();
    };

    return (
        <Wrapper>
            <WrapperLeft>
                <NaverHeader>NAVER</NaverHeader>
                <Webtoon onClick={webtoon}>웹툰</Webtoon>
            </WrapperLeft>
            <WrapperRight>
                <SearchInput type="search" placeholder="제목/작가로 검색할 수 있습니다." value={keyword} onChange={getValue} onKeyPress={onSubmitSearch}/>
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