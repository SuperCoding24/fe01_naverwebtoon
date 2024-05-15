import { useState } from "react";
import styled from "styled-components";

const WebtoonFiltered = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = index => {
    setSelectedOption(index);
  };

  return (
    <>
      <FilteredWrapper>
        <Option
          onClick={() => handleOptionClick(0)}
          isSelected={selectedOption === 0}
        >
          인기순
        </Option>
        <MiddleDot>&bull;</MiddleDot>
        <Option
          onClick={() => handleOptionClick(1)}
          isSelected={selectedOption === 1}
        >
          업데이트순
        </Option>
        <MiddleDot>&bull;</MiddleDot>
        <Option
          onClick={() => handleOptionClick(2)}
          isSelected={selectedOption === 2}
        >
          조회순
        </Option>
        <MiddleDot>&bull;</MiddleDot>
        <Option
          onClick={() => handleOptionClick(3)}
          isSelected={selectedOption === 3}
        >
          별점순
        </Option>
      </FilteredWrapper>
    </>
  );
};

export default WebtoonFiltered;

const FilteredWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Option = styled.div`
  margin: 0 5px;
  color: ${props => (props.isSelected ? "#00DC64" : "#666666")};
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;

const MiddleDot = styled.span`
  color: #b2b2b2;
`;
