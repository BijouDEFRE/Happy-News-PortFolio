// == Import npm
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
// a trash icon for the delete item button
import { NavLink, useLocation, useParams } from 'react-router-dom';
// Import components
import Button from 'src/components/Header/Button';
import PopUp from 'src/containers/popup';
// Import action
import { loadNews } from 'src/redux/actions';
// Import du CSS
import './style.scss';

const NewsModal = ({
  news,
}) => {
  // state for the pop up
  const [popUp, setPopUp] = useState(false);
  const changePopup = () => {
    setPopUp(!popUp);
  };
  // state for the modal
  const [modalState, setModalState] = useState(false);
  const manageState = () => {
    setModalState(!modalState);
  };
  // to catch the parameter in URL
  const { id } = useParams();
  // to catch the all URL
  const location = useLocation();

  useEffect(() => {
  // loadNews: a prop that loads news (articles)
  // this prop function will be defined in the container
    loadNews();
  }, [popUp]);

  return (
    <>
      <div className="product-card">
        <div className="badge">
          {/* conditionnal display on card */}
          {
              news.is_news === true ? 'News' : 'Article en vitrine'
            }
        </div>
        <div className="product-card__tumb">
          <img src={news.picture_url} alt="news" onClick={() => manageState(!modalState)} />
        </div>
        <div className="product-card__details">
          <span className="product-card__category">{news.activity_name}</span>
          <h4 className="product-card__title">{news.article_title}</h4>
          <p>{news.description}</p>
          <div className="product-card__bottom-details">
            {/*  conditionnal display of the bin, it depends on isNews and the userId */}
            { news.is_news === true
              && <div className="product-card__price">{news.price} €</div>}
            {/* we compare the localstorageId and the userId, if we've find the same id, we display the bin */}
            { parseInt(localStorage.getItem('id'), 10) === news.user_id
                  && (
                    <>
                      <div className="delete-button">
                        <MdDeleteForever
                          onClick={() => {
                            changePopup(); console.log(popUp);
                          }}
                        />
                      </div>
                      {popUp === true
                      && <PopUp news={news} changePopup={changePopup} />}
                    </>
                  )}
            <div className="product-card__links">
              {/* get URL to do a condition for the rendering, the goal is to display
              the link if we're not on the customer's profil */}
              {
                  location.pathname !== `/commercant/profil/${id}`
                  && (
                    <>
                      <NavLink to={`/commercant/profil/${news.user_id}`}>
                        <Button>Voir le profil du commerçant</Button>
                      </NavLink>
                    </>
                  )
                }
            </div>
          </div>
        </div>
      </div>
      {/* Modal CODE, the same JSX, but changing classname */}
      <div className={`modalBackground modalShowing-${modalState} product-modal`}>
        <div className="product-modal__container">
          <div className="product-modal__container__badge">
            {
                news.is_news === true ? 'News' : 'Article en vitrine'
              }
          </div>
          <div className="product-modal__container__tumb">
            <img src={news.picture_url} alt="product-modal__news" className="product-modal__container__tumb__picture" />
          </div>
          <div className="product-modal__container__details">
            <span className="product-modal__container__details__category">{news.activity_name}</span>
            <h4 className="product-modal__container__details__title">{news.article_title}</h4>
            <p>{news.description}</p>
            <div className="product-modal__container__details__bottom-details">
              <div className="product-modal__container__details__bottom-details__price">{news.price} €</div>
              <div className="product-modal__container__details__bottom-details__links">
                {
                    location.pathname !== `/commercant/profil/${id}`
                    && (
                      <>
                        <NavLink to={`/commercant/profil/${news.user_id}`}>
                          <Button>Voir le profil du commerçant</Button>
                        </NavLink>
                      </>
                    )
                  }
                {/* button to close the modal and change the state */}
                <button type="button" className="button" onClick={() => manageState(!modalState)}>
                  Fermer  la fenêtre
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

NewsModal.propTypes = {
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

export default NewsModal;
