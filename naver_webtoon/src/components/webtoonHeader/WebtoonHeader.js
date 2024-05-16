import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegCommentDots } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const WebtoonHeader = () => {
  const navigate = useNavigate();

  const webtoon = () => {
    navigate("/webtoon");
  };

  const [keyword, setKeyword] = useState("");

    const getValue = (event) => {
        console.log("검색어: " , event.target.value);
        setKeyword(event.target.value);
    };

    const submit = (event) => {
        event.preventDefault();
        handleSearch();
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

              navigate(`/search?keyword=${keyword}`);
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
        <FormWrapper onSubmit={submit}>
          <SearchInput
            type="search"
            placeholder="제목/작가로 검색할 수 있습니다."
            value={keyword}
            onChange={getValue}
            onKeyPress={onSubmitSearch}
          />
          <button>
            <FaSearch className="customSearchIcon" size={14} />
          </button>
        </FormWrapper>
        <IconWrapper>
            <FaRegCircleUser size={24} />
            <FaRegCommentDots size={24} />
            <FaEnvelope size={24}/>
            <FaBars size={24}/>                    
        </IconWrapper>
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
    position: relative;
    display: flex;
    width: 24vw;
    hegith: 10vh;
    justify-content: space-between;
    align-items: center;
    margin-left: 9vw;
    margin-bottom: 2px;
`;

const SearchInput = styled.input`
    width: 400px;
    font-size: 6px;
    height: 28px;
    margin-top: 26px;
    margin-left: 58px;
    border: 1px solid black;   
`;

const IconWrapper = styled.div`
    margin-top: 42px;
    display: flex;
    gap: 14px;
    width: 10vw;
    height: 6vh;
`;

const FormWrapper = styled.form`
    position: relative;
    
    display: flex;
    width: 12vw;
    hegith: 4vh;

    SearchInput {
        border: none;
        padding: 0 15px;
        height: 40px;
    }

    button {
        position: absolute;
        margin-top: 32px;
        margin-left: 154px;
        background: none;
        border: none;
    }
`;
