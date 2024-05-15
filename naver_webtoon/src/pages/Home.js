// UI
import Layout from "../UI/Layout";
// components
import DaysWebtoonList from "../components/webtoonList/DaysWebtoonList";
import WeekWebtoon from "../components/webtoonList/WeekWebtoon";

const Home = () => {
  return (
    <Layout>
      <WeekWebtoon />
      <DaysWebtoonList />
    </Layout>
  );
};

export default Home;
