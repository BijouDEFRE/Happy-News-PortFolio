import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import Button from 'src/components/Header/Button';
// Import des composants
import Field from 'src/components/Login/Field';
import NewsModal from 'src/components/NewsModal';
import Spinner from 'src/components/Spinner';
// utils
import getNewsByCityNameAndActivity from 'src/utils/getNewsByCityNameAndActivity';
// Import du CSS
import './style.scss';

const News = ({
  list, loadNews, hasData, activities, loadActivities, hasDataActivities,
  searchValue, changeSearchField, handleSearchSubmit, activitySelected, handleSelectedActivity,
}) => {
  const filteredNews = (
    // getNewsByCityName(list, searchValue) && getNewsByActivity(list, activitySelected));
    getNewsByCityNameAndActivity(list, searchValue, activitySelected));
  // useEffect : appelle une fonction au chargement du composant
  // car 2eme parametre = []
  useEffect(() => {
  // loadNews : une prop qui charge les news (les articles)
  // cette fonction prop sera définie dans le container
    loadNews();
    // loadActivities: une prop qui charge les acitivités (les catégories de news)
    loadActivities();
  }, []);

  /*   useEffect(() => {
    loadNews();
  }, [list.id]); */

  // Ajout d'un useEffect pour le filtre par recherche dans l'input
  // Ou par activité ou les 2
  useEffect(() => {
    getNewsByCityNameAndActivity(list, searchValue, activitySelected);
  }, [list, searchValue, activitySelected]);

  /* useEffect(() => {
    resetActivitySelected('');
  }, []); */

  const { register, handleSubmit, errors } = useForm();
  return (
    <div>
      <section className="searchSection">
        <div className="searchSection__searchBar">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" strokeWidth="3" stroke="#36586B" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </div>
          <div className="searchSection__searchBar__container">
            <form onSubmit={handleSubmit(handleSearchSubmit)}>
              <Field
                name="search"
                value={searchValue}
                onChange={changeSearchField}
                placeholder="Saisissez le nom de votre ville"
                type="search"
                register={register({
                  required: true, message: 'vous devez entrer un nom de ville valide',
                })} // TODO : reste a configurer
              />
              {errors.search && <span> {errors.search.message} </span>}
            </form>
          </div>
        </div>
        <div className="searchSection__searchOnMap">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#36586B" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="11" r="3" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
          </div>
          <div className="searchSection__searchOnMap__buttonContainer">
            <NavLink to="/">
              <Button>Afficher sur la carte</Button>
            </NavLink>
          </div>
        </div>
      </section>
      {/* On prévoit ici la future fonctionnalité de recherche par tag */}
      <div className="tagsContainer">
        {activities.map((tag) => (
          <div key={tag.id} className="tagsContainer__tag">
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
      </div>
      <section className="newsList">
        {!hasData && <Spinner />}
        {filteredNews && filteredNews.map((news) => (
          <div key={news.id} className="newsList__item">
            {hasData && <NewsModal news={news} />}
            {/* Affichage conditionnel avec hasData : si pas de donnée, pas de News */}
          </div>
        ))}
      </section>
    </div>
  );
};

News.propTypes = {
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
