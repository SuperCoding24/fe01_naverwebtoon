//UI
import Layout from "../UI/Layout";

//component
import WebtoonSearchList from "../components/webtoonSearch/WebtoonSearchList";
import WebtoonCategoryHeader from "../components/webtoonHeader/WebtoonCategoryHeader";
import WebtoonHeader from "../components/webtoonHeader/WebtoonHeader";
import Footer from "../components/footer/Footer";

const Search = () => {
  return (
    <Layout>
      <WebtoonHeader />
      <WebtoonCategoryHeader />
      <WebtoonSearchList />
      <Footer />
    </Layout>
  );
};

export default Search;
