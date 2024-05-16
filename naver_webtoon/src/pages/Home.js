// UI
import Layout from "../UI/Layout";
// components
import DaysWebtoonList from "../components/webtoonList/DaysWebtoonList";
import MonthNewWebtoonUI from "../components/monthnewwebtoon/MonthNewWebtoonUI";
import WeekWebtoon from "../components/webtoonList/WeekWebtoon";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <Layout>
      <WeekWebtoon />
      <MonthNewWebtoonUI />
      <DaysWebtoonList />
      <Footer />
    </Layout>
  );
};

export default Home;
