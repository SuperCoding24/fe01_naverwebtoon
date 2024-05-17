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
                  webtoon.additional && webtoon.additional.rest === true
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

        console.log("Sorted webtoons:", sortedWebtoons);
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
          인기순 <MiddleDot>&bull;</MiddleDot>
        </Option>
        <Option
          onClick={() => handleOptionClick("update")}
          selected={selectedFilter === "update"}
        >
          최신업로드 <MiddleDot>&bull;</MiddleDot>
        </Option>
        <Option
          onClick={() => handleOptionClick("rest")}
          selected={selectedFilter === "rest"}
        >
          휴재
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

const MiddleDot = styled.span`
  color: #b2b2b2;
  margin-left: 8px;
`;
