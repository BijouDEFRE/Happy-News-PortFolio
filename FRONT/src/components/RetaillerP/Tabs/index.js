/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsModal from 'src/components/NewsModal';
import './style.scss';
import TabTitle from './TabTitle';

const Tabs = ({ user, news }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const { id } = useParams();

  // const newsIsNewsTrue = news.filter((news) => (news.is_news === true));
  // const newsIsNewsFalse = news.filter((news) => (news.is_news === false));
  // const newsUserId = news.filter((news) => (news.user_id === parseInt(id)));
  const newsUserIdIsTrue = news.filter((news) => ((news.is_news === true) && (news.user_id === parseInt(id))));
  const newsUserIdIsFalse = news.filter((news) => ((news.is_news === false) && (news.user_id === parseInt(id))));

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>
          <TabTitle> Mon activité</TabTitle>
        </button>
        <button
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}
        >
          <TabTitle> Mes happy News</TabTitle>
        </button>
        <button
          className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(3)}
        >
          <TabTitle>Ma vitrine</TabTitle>
        </button>
      </div>
      <div className="content-tabs">
        <div className={toggleState === 1 ? 'content  active-content' : 'content'}>
          <p className="content-tabs-p">
            {user.content}
          </p>
        </div>
        <div className={toggleState === 2 ? 'content  active-content' : 'content'}>
          {/* // news.map((item) => <li> {item.id}</li>) */}
          {
                newsUserIdIsTrue.map((news) => (
                  <div key={news.id} className="newsList__item">
                    <NewsModal news={news} />
                  </div>
                ))
              }
        </div>
        <div className={toggleState === 3 ? 'content  active-content' : 'content'}>
          {
                newsUserIdIsFalse.map((news) => (
                  <div key={news.id} className="newsList__item">
                    <NewsModal news={news} />
                  </div>
                ))
              }
        </div>
      </div>
    </div>
  );
};
export default Tabs;
