// UI
import Layout from "../UI/Layout";
// components
import DaysWebtoonList from "../components/webtoonList/DaysWebtoonList";
import MonthNewWebtoonUI from "../components/monthnewwebtoon/MonthNewWebtoonUI";
import WeekWebtoon from "../components/webtoonList/WeekWebtoon";

const Home = () => {
  return (
    <Layout>
      <WeekWebtoon />
      <MonthNewWebtoonUI />
      <DaysWebtoonList />
    </Layout>
  );
};

export default Home;
