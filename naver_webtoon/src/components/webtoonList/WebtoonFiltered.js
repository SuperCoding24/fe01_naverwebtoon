import React, { useState, useEffect } from "react";
import styled from "styled-components";

const WebtoonFiltered = ({ setWebtoons }) => {
  const [selectedFilter, setSelectedFilter] = useState("popular");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    const fetchData = async () => {
      const perPage = 700;
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API}?service=naver&perPage=${perPage}`
        );
        const data = await res.json();
        let sortedWebtoons = [];
        switch (selectedFilter) {
          case "popular":
            sortedWebtoons = data.webtoons
              .slice()
              .sort((a, b) =>
                sortOrder === "desc"
                  ? b.fanCount - a.fanCount
                  : a.fanCount - b.fanCount
              );
            break;
          case "update":
            sortedWebtoons = data.webtoons
              .filter(
                (webtoon) =>
                  webtoon.additional && webtoon.additional.up !== undefined
              )
              .sort((a, b) =>
                sortOrder === "desc"
                  ? (b.additional.up || 0) - (a.additional.up || 0)
                  : (a.additional.up || 0) - (b.additional.up || 0)
              );
            break;
          case "rest":
            sortedWebtoons = data.webtoons
              .filter(
                (webtoon) =>
                  webtoon.additional && webtoon.additional.rest !== undefined
              )
              .sort((a, b) =>
                sortOrder === "desc"
                  ? (b.additional.rest || 0) - (a.additional.rest || 0)
                  : (a.additional.rest || 0) - (b.additional.rest || 0)
              );
            break;
          default:
            sortedWebtoons = data.webtoons;
        }
        console.log("Sorted webtoons:", sortedWebtoons); // 콘솔로그로 sortedWebtoons 출력
        setWebtoons(sortedWebtoons);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [selectedFilter, setWebtoons, sortOrder]);

  const handleOptionClick = (filter) => {
    if (filter === selectedFilter) {
      if (filter === "popular") {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      }
    } else {
      setSelectedFilter(filter);
      setSortOrder("desc");
    }
  };

  return (
    <FilteredWrapper>
      <OptionWrapper>
        <Option
          onClick={() => handleOptionClick("popular")}
          selected={selectedFilter === "popular"}
        >
          인기순{" "}
          {selectedFilter === "popular" && (
            <Arrow selected={selectedFilter === "popular"} order={sortOrder} />
          )}
        </Option>
        <Option
          onClick={() => handleOptionClick("update")}
          selected={selectedFilter === "update"}
        >
          최신업로드{" "}
          {selectedFilter === "update" && (
            <Arrow selected={selectedFilter === "update"} />
          )}
        </Option>
        <Option
          onClick={() => handleOptionClick("rest")}
          selected={selectedFilter === "rest"}
        >
          휴재{" "}
          {selectedFilter === "rest" && (
            <Arrow selected={selectedFilter === "rest"} />
          )}
        </Option>
      </OptionWrapper>
    </FilteredWrapper>
  );
};

export default WebtoonFiltered;

const FilteredWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Option = styled.div`
  margin: 0 5px;
  color: ${(props) => (props.selected ? "#00dc64" : "#666666")};
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: #00dc64;
  }
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 8px solid ${(props) => (props.selected ? "#00dc64" : "#666")}; /* 화살표 색상 */
  margin-left: 3px; /* 화살표 여백 */
  transform: ${(props) =>
    props.selected && props.order === "desc"
      ? "rotate(180deg)"
      : "none"}; /* 내림차순일 때 화살표 뒤집기 */
`;
