import styled from "styled-components";
// assets
import paintBrush from "../../assets/paint-brush.svg";
import user from "../../assets/user.svg";
import megaphone from "../../assets/megaphone.svg";

const FooterMiddle = () => {
  return (
    <MiddleContainer>
      <ContentWrapper>
        <TextBox>
          <Text>연재 경력작가</Text>
          <Text className="sub">웹툰 차기작 제안</Text>
        </TextBox>
        <Image src={paintBrush} alt="붓" />
      </ContentWrapper>
      <ContentWrapper>
        <TextBox>
          <Text>웹툰 웹소설</Text>
          <Text className="sub">온라인 광고 판권 사업</Text>
        </TextBox>
        <Image src={user} alt="붓" />
      </ContentWrapper>
      <ContentWrapper>
        <TextBox>
          <Text>웹툰 채용공고</Text>
          <Text className="sub">CAREERS</Text>
        </TextBox>
        <Image src={megaphone} alt="붓" />
      </ContentWrapper>
    </MiddleContainer>
  );
};

export default FooterMiddle;

const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 140px;
  margin-top: 50px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 32.5%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid #e1e1e2;
  background-color: #fafafc;
  cursor: pointer;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 50px;
  fill: #14ec67;
`;

const Text = styled.div`
  margin-bottom: 10px;
  font-size: 23px;
  font-weight: 600;
  color: ${props => (props.theme === "light" ? "white" : "black")};
  &.sub {
    margin-bottom: 0;
    color: #00dc64;
  }
`;
