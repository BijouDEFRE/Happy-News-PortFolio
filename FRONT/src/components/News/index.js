// == Import npm
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

// Import components
import Button from 'src/components/Header/Button';
import Field from 'src/components/Login/Field';
import NewsModal from 'src/components/NewsModal';
import Spinner from 'src/components/Spinner';

// Import utils
import getNewsByCityNameAndActivity from 'src/utils/getNewsByCityNameAndActivity';

// Import du CSS
import './style.scss';

const News = ({
  list, loadNews, hasData, activities, loadActivities, hasDataActivities,
  searchValue, changeSearchField, handleSearchSubmit, activitySelected, handleSelectedActivity,
  resetActivitySelected,
}) => {
  // I declare a variable that only keeps news with the prop
  // isNews to true (so the News is effective at this time for the retailer)
  const listIsNewsTrue = list.filter((item) => ((item.is_news === true)));
  // filteredNews is a variable that stores the result of my utils function
  // getNewsByCityNameAndActivity
  const filteredNews = (
    // getNewsByCityName(list, searchValue) && getNewsByActivity(list, activitySelected));
    getNewsByCityNameAndActivity(listIsNewsTrue, searchValue, activitySelected));
  // useEffect: calls a function when the component is loaded
  // because 2eme parameters = []
  useEffect(() => {
  // loadNews: a prop that loads news (articles)
  // this prop function will be defined in the container
    loadNews();
    // loadActivities: a prop that loads acitivities (news categories)
    loadActivities();
  }, []);

  // Adding a useEffect for the search filter in the input
  // Or by activity or both
  useEffect(() => {
    getNewsByCityNameAndActivity(list, searchValue, activitySelected);
  }, [list, searchValue, activitySelected]);

  const { register, handleSubmit, errors } = useForm();

  return (
    <div className="newsContainer">
      <section className="newsContainer__searchSection">
        <div className="newsContainer__searchSection__searchBar">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" strokeWidth="3" stroke="#36586B" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </div>
          <div className="newsContainer__searchSection__searchBar__container">
            <form onSubmit={handleSubmit(handleSearchSubmit)}>
              <Field
                name="search"
                value={searchValue}
                onChange={changeSearchField}
                placeholder="Saisissez le nom de la ville"
                type="search"
                register={register({
                  required: true, message: 'vous devez entrer un nom de ville valide',
                })} // TODO : reste a configurer
              />
              {errors.search && <span> {errors.search.message} </span>}
            </form>
          </div>
        </div>
        <div className="newsContainer__searchSection__searchOnMap">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#36586B" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="11" r="3" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
          </div>
          <div className="newsContainer__searchSection__searchOnMap__buttonContainer">
            <NavLink to="/">
              <Button>Afficher sur la carte</Button>
            </NavLink>
          </div>
        </div>
      </section>
      {/* Here, we generate buttons that we will use to sort the articles by categories
      = (activity) */}
      <div className="newsContainer__tagsContainer">
        {activities.map((tag) => (
          <div key={tag.id} className="newsContainer__tagsContainer__tag">
            {hasDataActivities && (
            <Button
              event={(event) => {
                handleSelectedActivity(event.target.textContent);
              }}
            >{tag.activity_name}
            </Button>
            )}
          </div>
        ))}
        {/* A button to reset the search parameter by activity */}
        <div className="container-buttonResetActivitySelected">
          <Button className="button" event={() => resetActivitySelected()}>Toutes catégories</Button>
        </div>
      </div>
      {/* below, the display of news (our articles) */}
      <section className="newsContainer__newsList">
        {!hasData && <Spinner />}
        {filteredNews && filteredNews.map((news) => (
          <div key={news.id} className="newsContainer__newsList__item">
            {hasData && <NewsModal news={news} />}
            {/* Conditional display with hasData: if no data, no News */}
          </div>
        ))}
      </section>
    </div>
  );
};

News.propTypes = {
  resetActivitySelected: PropTypes.func.isRequired,
  handleSelectedActivity: PropTypes.func.isRequired,
  activitySelected: PropTypes.string,
  handleSearchSubmit: PropTypes.func.isRequired,
  changeSearchField: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
  loadNews: PropTypes.func.isRequired,
  loadActivities: PropTypes.func.isRequired,
  hasData: PropTypes.bool.isRequired,
  hasDataActivities: PropTypes.bool.isRequired,
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      activity_name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      article_title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      picture_url: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      is_news: PropTypes.bool.isRequired,
      user_id: PropTypes.number.isRequired,
      activity_id: PropTypes.number.isRequired,
      activity_name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

News.defaultProps = {
  searchValue: '',
  activitySelected: '',
};

export default News;
