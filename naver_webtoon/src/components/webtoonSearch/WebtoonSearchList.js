import React from "react";
import "./WebtoonSearchList.css";

const webtoonSearchList = () => {
  return (
    <div className="container">
      <h2 className="SearchResult__title_area">
        <strong className="SearchResult__search_text">'금의행'</strong> 에 대한
        검색결과입니다.
      </h2>
      <div role="tablist" className="SearchResultTab__tab_control">
        <button
          role="tab"
          className="SearchResultTab__button_tab"
          aria-selected="true"
        >
          전체
        </button>
        <button
          role="tab"
          className="SearchResultTab__button_tab"
          aria-selected="false"
        >
          웹툰
        </button>
        <button
          role="tab"
          className="SearchResultTab__button_tab"
          aria-selected="false"
        >
          베스트도전
        </button>
        <button
          role="tab"
          className="SearchResultTab__button_tab"
          aria-selected="false"
        >
          도전만화
        </button>
        <button
          role="tab"
          className="SearchResultTab__button_tab"
          aria-selected="false"
        >
          단행본
        </button>
        <button
          role="tab"
          className="SearchResultTab__button_tab"
          aria-selected="false"
        >
          만화
        </button>
        <button
          role="tab"
          className="SearchResultTab__button_tab"
          aria-selected="false"
        >
          장르소설
        </button>
      </div>
      <div className="content_wrap">
        <div className="content">
          <div className="ComponentHead__title_area">
            <h2 className="ComponentHead__title">웹툰</h2>
            <span className="ComponentHead__count">총 2</span>
          </div>
          <div className="SearchResult">
            <ul className="SearchResultList_search_result_list">
              <li className="SearchResultList__item">
                <div className="Poster__link">
                  <img src="" alt="시한부 기사가 되었다" />
                </div>
                <div className="SearchResultList__info_area">
                  <div className="WebtoonTitle">
                    <span>시한부 기사가 되었다.</span>
                  </div>
                  <div className="WebtoonMeta">
                    <span className="WebtoonMeta__author">
                      김두루미{" "}
                      <span className="ContentMetaInfo__dot">&#xb7;</span> 글 /
                    </span>
                    <span className="WebtoonMeta__illustrator">
                      김문경{" "}
                      <span className="ContentMetaInfo__dot">&#xb7;</span> 그림
                      |
                    </span>
                    <span className="WebtoonMeta__episode"> 73화 완결</span> |
                    <span className="WebtoonMeta__update"> 최종 업데이트</span>
                  </div>
                  <p className="SearchResultList__summary">
                    시한부의 삶을 살아가는 루이스 크로이드. 살기 위해서는 다른
                    생명을 죽여야 한다. 똥 밭에서 굴러도 이승이 낫다고 했던가.
                    또 한 번의 기회. 살아남기 위해서라면 무슨 짓이라도 할
                    것이다.
                  </p>
                  <div className="SearchResultList__tag_area">
                    <div className="TagGroup__tag_group">
                      <span className="TagGroup__tag">#판타지</span>
                      <span className="TagGroup__tag">#헌터물</span>
                      <span className="TagGroup__tag">#다크판타지</span>
                      <span className="TagGroup__tag">#소설원작</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="aside">
          <div className="ComponentAside__title_area">
            <h2 className="ComponentAside_title">실시간 인기 웹툰</h2>
            <div role="tablist" className="ComponentAside__tab_control">
              <button
                role="tab"
                aria-selected="true"
                className="ComponentAside__button_tab"
                style={{ color: "rgb(0, 220, 100)" }}
              >
                전체 &#xb7;
              </button>

              <button
                role="tab"
                aria-selected="false"
                className="ComponentAside__button_tab"
              >
                여성 &#xb7;
              </button>

              <button
                role="tab"
                aria-selected="false"
                className="ComponentAside__button_tab"
              >
                남성
              </button>
            </div>
          </div>
          <ul className="AsideList__content_list">
            <li className="AsideList__item">
              <div className="Poster__link" href="">
                <div className="Poster__area">
                  <img src="" alt="1위" />
                </div>
              </div>
              <div className="AsideList__ranking_area">
                <strong className="AsideList__ranking">1</strong>
              </div>
              <div className="AsideList__info_area">
                <div className="AsideList__ranking_title">김부장</div>
                <div className="AsideList__ranking_info">
                  박만사, 남자의 이야기 / 정종택
                </div>
              </div>
            </li>
          </ul>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default webtoonSearchList;
