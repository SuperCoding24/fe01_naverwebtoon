import styled from "styled-components";

const FooterBottom = () => {
  return (
    <BottomContainer>
      <FooterTitleWrapper>
        <TitleBox className="first">
          <Title>웹툰</Title>
        </TitleBox>
        <TitleBox>
          <Title>웹소설</Title>
        </TitleBox>
        <TitleBox>
          <Title>시리즈</Title>
          <Sub>웹소설 &#183; 만화</Sub>
        </TitleBox>
        <TitleBox className="last">
          <Title>시리즈온</Title>
          <Sub>영화 &#183; 방송</Sub>
        </TitleBox>
        <Title className="notice">웹툰 고객센터</Title>
      </FooterTitleWrapper>
      <FooterSplitWrapper>
        <SplitContent>
          <TextBox className="top-box">
            <Text>네이버웹툰 이용약관</Text>
            <Text>전용상품권 이용약관</Text>
            <Text>개인정보처리방침</Text>
            <Text>청소년보호정책</Text>
            <Text>웹툰 고객센터</Text>
            <Text className="last">광고&#183;사업문의</Text>
          </TextBox>
          <TextBox>
            <Text className="bottom-text">@ NAVER WEBTOON Limited.</Text>
          </TextBox>
        </SplitContent>
        <SplitContent className="second">
          <TextBox className="top-box">
            <Text>이용약관</Text>
            <Text>개인정보처리방침</Text>
            <Text>책임의 한계와 법적고지</Text>
            <Text>고객센터</Text>
            <Text>결제도용신고</Text>
            <Text>저작권침해신고</Text>
          </TextBox>
          <TextBox>
            <Text className="bottom-text">@ NAVER CORP.</Text>
          </TextBox>
        </SplitContent>
      </FooterSplitWrapper>
      <FooterBottomWrapper>
        <TextBox>
          <Text>네이버웹툰(유) 대표이사 김준구</Text>
          <Text>사업자 등록번호 669-86-01888</Text>
          <Text>통신판매업 신고번호 2020-성남분당B-0719(사업자정보확인)</Text>
        </TextBox>
        <TextBox>
          <Text>
            주소 경기도 성남시 분당구 분당내곡로 131 판교테크원 타워1, 11-12층
          </Text>
          <Text>고객센터 1588-3820</Text>
          <Text>이메일 ccnaver@naver.com</Text>
          <Text>호스팅 서비스 제공 NAVER Cloud</Text>
        </TextBox>
        <Text className="last-text">
          모든 콘텐츠의 저작권은 저작권자 또는 제공처에 있으며, 이를 무단으로
          이용하는 경우 관련 법령에 따라 법적 책임을 질 수 있습니다.
        </Text>
      </FooterBottomWrapper>
    </BottomContainer>
  );
};

export default FooterBottom;

const BottomContainer = styled.div`
  width: 100%;
  height: 210px;
  margin-top: 40px;
`;

const FooterTitleWrapper = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid #ebebeb;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-right: 1px solid #ebebeb;

  &.first {
    padding-left: 0;
  }
  &.last {
    border: none;
  }
`;

const Title = styled.div`
  font-weight: bold;
  cursor: pointer;

  &.notice {
    margin-left: auto;
  }
`;

const Sub = styled.div`
  margin-left: 4px;
  font-size: 13px;
  font-weight: bold;
  color: #7f7f7f;
  cursor: pointer;
`;

const FooterSplitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const SplitContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3px;
  border-right: 1px solid #ebebeb;

  &.second {
    margin-left: 10px;
    border: none;
  }
`;

const TextBox = styled.div`
  display: flex;
  margin-bottom: 6px;
  &.top-box {
    cursor: pointer;
  }
`;

const Text = styled.div`
  padding: 0 5px;
  border-right: 1px solid #ebebeb;
  font-size: 13px;
  font-weight: bold;
  color: #7f7f7f;

  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    border-right: none;
  }
  &.bottom-text {
    font-weight: 500;
  }
  &.last {
    margin-right: 40px;
  }
  &.last-text {
    padding-left: 0;
    margin-top: 30px;
  }
`;

const FooterBottomWrapper = styled.div`
  margin-top: 20px;
`;
