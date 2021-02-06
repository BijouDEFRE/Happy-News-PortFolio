/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import NewsModal from 'src/components/NewsModal';
import Button from 'src/components/Header/Button';
import './style.scss';
import TabTitle from './TabTitle';

const Tabs = ({ user, news, changeContent, content, handleChangeProfilContent }) => {
  const handleChange = (event) => {
    event.preventDefault();
    handleChangeProfilContent();
  };
  const changeField = (event) => {
    changeContent(event.target.value);
  };
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const { id } = useParams();

  const newsIsNewsTrue = news.filter((news) => (news.is_news === true));
  // console.log(newsIsNewsTrue);

  const newsIsNewsFalse = news.filter((news) => (news.is_news === false));
  // console.log(newsIsNewsFalse);

  const newsUserId = news.filter((news) => (news.user_id === parseInt(id)));
  // console.log(newsUserId);

  const newsUserIdIsTrue = news.filter((news) => ((news.is_news === true) && (news.user_id === parseInt(id))));
  // console.log(newsUserIdIsTrue);

  const newsUserIdIsFalse = news.filter((news) => ((news.is_news === false) && (news.user_id === parseInt(id))));
  // console.log(newsUserIdIsFalse);

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
          {/* update content */}
          <form id="content-form" onSubmit={handleChange}>
            <label htmlFor="content"></label>
            <textarea
              form="content-form"
              id="content"
              name="content"
              placeholder="Décrivez nous votre activité, votre passion et laissez un petit mot pour vos futures clients !"
              rows="18"
              cols="153"
              className="content-tabs__textarea"
              // value={user.content}
              // value={user.content}
              value={content}
              // onChange={(event) => changeContent(event.target.value)}
              onChange={changeField}
            />
            <Button type="submit">Valider mes changements</Button>
          </form>
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
  handleChangeProfilContent: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  changeContent: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  news: PropTypes.shape({
    id: PropTypes.number.isRequired,
    article_title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture_url: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    activity_name: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    is_news: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Tabs;
