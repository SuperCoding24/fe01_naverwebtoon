import { Helmet } from "react-helmet-async";
// UI
import Layout from "../UI/Layout";
// components
import MonthNewWebtoonUI from "../components/monthnewwebtoon/MonthNewWebtoonUI";
import DaysWebtoonList from "../components/webtoonList/DaysWebtoonList";
import Header from "../components/webtoonList/WeekWebtoon";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>요일 전체 : 네이버 웹툰</title>
      </Helmet>

      <Header />
      <MonthNewWebtoonUI />
      <DaysWebtoonList />
      <Footer />
    </Layout>
  );
};

export default Home;
