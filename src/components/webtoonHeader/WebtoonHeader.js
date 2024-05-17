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
    navigate("/");
  };

  const [keyword, setKeyword] = useState("");

  const getValue = event => {
    setKeyword(event.target.value);
  };

  const submit = event => {
    event.preventDefault();
    handleSearch();
  };

  const onSubmitSearch = event => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const fetchWebtoons = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API}/search?keyword=${keyword}`
        );
        await response.json();

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
        <HeaderText className="webtoon" onClick={webtoon}>
          웹툰
        </HeaderText>
        <HeaderText>웹소설</HeaderText>
        <HeaderText>시리즈</HeaderText>
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
          {/* <button>
            <FaSearch
              className="customSearchIcon"
              size={18}
              color={"#666666"}
            />
          </button> */}
        </FormWrapper>
        <IconWrapper>
          <Icon className="user-icon">
            <FaRegCircleUser size={24} color={"#666666"} />
          </Icon>
          <Icon>
            <UserName>FE01</UserName>
          </Icon>
          <Icon>
            <FaRegCommentDots size={20} color={"#666666"} />
          </Icon>
          <Icon>
            <FaEnvelope size={20} color={"#666666"} />
          </Icon>
          <Icon>
            <FaBars size={20} color={"#666666"} />
          </Icon>
        </IconWrapper>
      </WrapperRight>
    </Wrapper>
  );
};

export default WebtoonHeader;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1180px;
  height: 8vh;
  border-bottom: ${props => props.theme.borderColor};
`;

const WrapperLeft = styled.div`
  display: flex;
  align-items: center;
`;

const NaverHeader = styled.h1`
  margin-right: 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

const HeaderText = styled.div`
  padding: 0 10px;
  border-left: ${props => props.theme.borderColor};
  color: #bbbbbb;
  font-size: 18px;
  cursor: pointer;

  &.webtoon {
    padding-left: 0;
    border: none;
    color: ${props => props.theme.fontColor};
    font-size: 24px;
    font-weight: bold;
  }
`;

const WrapperRight = styled.div`
  display: flex;
`;

const FormWrapper = styled.form`
  position: relative;
  display: flex;

  button {
    position: absolute;
    margin-top: 10px;
    margin-left: 218px;
    background: none;
    border: none;
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 250px;
  border: ${props => props.theme.borderColor};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  margin: 0 7px;
  cursor: pointer;

  &.user-icon {
    margin-left: 25px;
  }
`;

const UserName = styled.div`
  font-size: 14px;
`;
