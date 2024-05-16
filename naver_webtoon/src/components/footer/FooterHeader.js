import styled from "styled-components";
import arrowSvg from "../../assets/arrow.svg";

const FooterHeader = () => {
  return (
    <HeaderContainer>
      <TagWrapper>
        <Title>웹툰 바로가기</Title>
        <TagBox>
          <Tag>#로맨스</Tag>
          <Tag>#판타지</Tag>
          <Tag>#액션</Tag>
          <Tag>#일상</Tag>
          <Tag>#스릴러</Tag>
          <Tag>#개그</Tag>
          <Tag>#무협/사극</Tag>
          <Tag>#드라마</Tag>
          <Tag>#감성</Tag>
          <Tag>#스포츠</Tag>
        </TagBox>
        <TagBox>
          <Tag>#드라마&영화 원작웹툰</Tag>
          <Tag>#먼치킨</Tag>
          <Tag>#학원로맨스</Tag>
          <Tag>#로판</Tag>
          <Tag>#게임판타지</Tag>
          <Tag>#두뇌싸움</Tag>
          <Tag>#피카레스크</Tag>
          <Tag>#아이돌연애</Tag>
        </TagBox>
        <TagBox>
          <Tag>#인플루언서</Tag>
          <Tag>#머니게임</Tag>
          <Tag>#역하렘</Tag>
          <Tag>#동물</Tag>
          <Tag>#사내연애</Tag>
          <Tag>#러블리</Tag>
          <Tag>#역사물</Tag>
          <Tag>#힘숨찐</Tag>
          <Tag>#밀리터리</Tag>
          <Tag>#스포츠성장</Tag>
        </TagBox>
      </TagWrapper>
      <NoticeWrapper>
        <Title className="noticeTitle">
          공지사항
          <ToSee>
            더보기
            <img src={arrowSvg} alt="화살표 이미지" fill="current" />
          </ToSee>
        </Title>
        <NoticeContentWrapper>
          <ContentBox>
            <MiddleDot>&#183;</MiddleDot>
            <ContentTitle>
              2024 지상최대공모전 웹툰 부분 1기 상세 공지
            </ContentTitle>
          </ContentBox>
          <ContentBox>
            <MiddleDot>&#183;</MiddleDot>
            <ContentTitle className="default">
              네이버 웹툰(유) 서비스 이용약관 개정 안내
            </ContentTitle>
          </ContentBox>
          <ContentBox>
            <MiddleDot>&#183;</MiddleDot>
            <ContentTitle className="default">
              [OPEN] 네이버웹툰 작가 홈 서비스
            </ContentTitle>
          </ContentBox>
          <ContentBox>
            <MiddleDot>&#183;</MiddleDot>
            <ContentTitle>각색/작가를 위한 투고 사이트 리뉴얼</ContentTitle>
          </ContentBox>
          <ContentBox>
            <MiddleDot>&#183;</MiddleDot>
            <ContentTitle>
              2024 이현세 만화 창작캠프 지옥캠프 참가 모집
            </ContentTitle>
          </ContentBox>
        </NoticeContentWrapper>
      </NoticeWrapper>
    </HeaderContainer>
  );
};

export default FooterHeader;

const HeaderContainer = styled.div`
  width: 100%;
  height: 176px;
  display: flex;
`;

const TagWrapper = styled.div`
  width: 75%;
`;

const Title = styled.div`
  padding-bottom: 15px;
  font-size: 20px;
  font-weight: bolder;
  &.noticeTitle {
    display: flex;
    justify-content: space-between;
    border-bottom: ${props => props.theme.borderColor};
  }
`;

const TagBox = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Tag = styled.div`
  width: fit-content;
  padding: 9px 10px;
  margin-right: 5px;
  font-weight: bold;
  border-radius: 3px;
  color: #666666;
  background-color: #f6f6f6;
  cursor: pointer;
  &:hover {
    background-color: #dcdcdc;
  }
`;

const NoticeWrapper = styled.div`
  width: 25%;
`;

const ToSee = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${props => props.theme.fontGrayColor};
  cursor: pointer;
`;

const NoticeContentWrapper = styled.div`
  margin-top: 20px;
`;

const ContentBox = styled.div`
  display: flex;
  text-align: center;
  margin-bottom: 6px;
`;

const MiddleDot = styled.span`
  margin-right: 3px;
  color: #b4b4b4;
`;

const ContentTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
  &.default {
    font-weight: 500;
  }
  cursor: pointer;
`;
