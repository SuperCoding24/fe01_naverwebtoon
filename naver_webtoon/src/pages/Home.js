// UI
import Layout from "../UI/Layout";

// components
import MonthNewWebtoonUI from "../components/MonthNewWebtoon/MonthNewWebtoonUI";
import DaysWebtoonList from "../components/webtoonList/DaysWebtoonList";
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
