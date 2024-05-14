import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 1150px;
  height: 100%;
`;
