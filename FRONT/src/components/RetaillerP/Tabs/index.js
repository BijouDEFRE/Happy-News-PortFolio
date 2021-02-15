/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsModal from 'src/components/NewsModal';
import './style.scss';
import TabTitle from './TabTitle';

const Tabs = ({ user, news }) => {
  // toggleState props creation, togglestate value is 1
  const [toggleState, setToggleState] = useState(1);
  // function to cahnge the prop's value
  const toggleTab = (index) => {
    setToggleState(index);
  };
  // to get the parameter in URL
  const { id } = useParams();

  // filter depends on isNews props and userid
  const newsUserIdIsTrue = news.filter((news) => ((news.is_news === true) && (news.user_id === parseInt(id))));
  const newsUserIdIsFalse = news.filter((news) => ((news.is_news === false) && (news.user_id === parseInt(id))));

  return (
    <div className="container">
      <div className="bloc-tabs">
        {/* when you click, you call toggleTab function with is value
         if toggleState value = 1, you render this div */}
        <button
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
        >
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
      {/* when you click, you call toggleTab function with is value
      if toggleState value = 1, you render this div */}
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
Tabs.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    article_title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture_url: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    activity_name: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
  })).isRequired,
  user: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};
export default Tabs;
