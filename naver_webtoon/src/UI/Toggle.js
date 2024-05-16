import React from "react";
import styled from "styled-components";

const Toggle = ({ toggle, mode }) => {
  return (
    <ToggleWrapper onClick={toggle} mode={mode}>
      {mode === "dark" ? "🌚" : "🌝"}
    </ToggleWrapper>
  );
};

export default Toggle;

const ToggleWrapper = styled.button`
  position: fixed;
  z-index: 999999;
  bottom: 4%;
  right: 2%;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 38px;

  background-color: ${props => props.theme.bgColor};
  border: ${props => props.theme.borderColor};
  font-size: 20px;

  border-radius: 30px;
  box-shadow: ${props =>
    props.mode === "dark"
      ? "0px 5px 10px rgba(40, 40, 40, 1), 0px 2px 4px rgba(40, 40, 40, 1)"
      : "0 5px 10px rgba(100, 100, 100, 0.15), 0 2px 4px rgba(100, 100, 100, 0.15)"};

  cursor: pointer;
`;
