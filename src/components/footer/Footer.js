import styled from "styled-components";
// components
import FooterHeader from "./FooterHeader";
import FooterMiddle from "./FooterMiddle";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <FootContainer>
      <FooterHeader />
      <FooterMiddle />
      <FooterBottom />
    </FootContainer>
  );
};

export default Footer;

const FootContainer = styled.div`
  padding: 60px 0;
`;
