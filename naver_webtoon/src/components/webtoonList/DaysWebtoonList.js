import styled from "styled-components";

const DaysWebtoonList = () => {
  const daysOfWeek = ["월", "화", "수", "목", "금", "토", "일"];

  return (
    <ListContainer>
      <Title>요일별 전체 웹툰</Title>
      <ListWrapper>
        {daysOfWeek.map((day, index) => (
          <ListItems key={index}>
            <Days>{day}요웹툰</Days>
            <ItemBox>
              <Image></Image>
              <WebtoonTitle>웹툰 제목</WebtoonTitle>
            </ItemBox>
          </ListItems>
        ))}
      </ListWrapper>
    </ListContainer>
  );
};

export default DaysWebtoonList;

const ListContainer = styled.div``;

const Title = styled.div`
  margin-top: 500px;
  font-size: 20px;
  font-weight: bolder;
`;

const ListWrapper = styled.div`
  width: 1150px;
  /* height: fit-content; */
  height: 100vh;
  display: flex;
  margin-top: 20px;
  border: 1px solid #ebebeb;
`;

const ListItems = styled.div`
  width: 15%;
  height: 100%;
  border-right: 1px solid #ebebeb;
  &:last-child {
    border: none;
  }
`;

const Days = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 0;
  font-size: 15px;
  font-weight: bold;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 25px 0;
`;

const Image = styled.div`
  width: 95%;
  height: 200px;
  margin-bottom: 13px;
  border-radius: 4px;
  background-color: aliceblue;
`;

const WebtoonTitle = styled.div`
  margin-right: auto;
  margin-left: 5px;
  font-weight: 500;
`;
