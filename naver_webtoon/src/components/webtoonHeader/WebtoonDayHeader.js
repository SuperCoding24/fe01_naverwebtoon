import React, { useState } from 'react';
import styled from "styled-components";

const WebtoonDayHeader = () => {
   
    const arrays =  [
        {name: "요일전체", selected: true},
        {name: "월", selected: false},
        {name: "화", selected: false},
        {name: "수", selected: false},
        {name: "목", selected: false},
        {name: "금", selected: false},
        {name: "토", selected: false},
        {name: "일", selected: false},
        {name: "매일+", selected: false},
        {name: "신작", selected: false},
        {name: "완결", selected: false},
        {name: "장르&", selected: false},
    ];

    const [clickSate, setClickState] = useState(arrays);
    const [selectedColor, setSelectedColor] = useState("green");

    function handleClick(itemClicked, event) {
        const updateSelectedState = arrays.map(array => {
            return {
                ...array, selected: array.name === itemClicked.name
            }
        });
        setClickState(updateSelectedState);
        console.log(clickSate);
        const clickedSingleItem = event.currentTarget;
        const clickItemName = clickedSingleItem.querySelector('.DivItem');
        setSelectedColor("green");
        console.log(clickItemName);
    };

    console.log(clickSate);
    console.log(selectedColor);

    return (
        <Wrapper>
            <DivWrapper>
                {arrays.map((item, index) => (
                    <DivItem onClick={(event) => {handleClick(item, event)}} key={index} 
                                                                              style={{color: item.selected ? selectedColor : ""}}
                                                                              className={`DivItem ${item.selected ? selectedColor : ''}`}>
                        {item.name}    
                    </DivItem>
                ))}
            </DivWrapper>
        </Wrapper>
    );
};

export default WebtoonDayHeader;

const Wrapper = styled.div`
    width: 1150px;
    height: 6vh;
    margin-top: 20px;
`;

const DivWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 20px;
`;

const DivItem = styled.div`
    font-size: 18px;
    justify-content: center;
    align-items: center;
`;