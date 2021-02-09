import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import Button from 'src/components/Header/Button';
import PopUp from 'src/containers/popup';
import { loadNews } from 'src/redux/actions';
import './style.scss';

const NewsModal = ({
  news,
}) => {
  const [popUp, setPopUp] = useState(false);
  const changePopup = () => {
    setPopUp(!popUp);
  };

  const [modalState, setModalState] = useState(false);
  const manageState = () => {
    setModalState(!modalState);
  };
  const { id } = useParams();
  // console.log(id);
  const location = useLocation();
  // console.log(location.pathname);

  useEffect(() => {
    // loadNews : une prop qui charge les news (les articles)
    // cette fonction prop sera définie dans le container
    loadNews();
    // console.log('je suis dans le useEffect de NewsModal');
  }, [popUp]);

  return (
    <>
      <section>
        <div className="product-card">
          <div className="badge">
            {
              news.is_news === true ? 'News' : 'Article en vitrine'
            }
          </div>
          <div className="product-tumb">
            <img src={news.picture_url} alt="news" onClick={() => manageState(!modalState)} />
          </div>
          <div className="product-details">
            <span className="product-catagory">{news.activity_name}</span>
            <h4 className="product-title">{news.article_title}</h4>
            <p>{news.description}</p>
            <div className="product-bottom-details">
              { news.is_news === true
              && <div className="product-price">{news.price} €</div>}
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
              <div className="product-links">
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
      </section>

      <section>
        <div className={`modalBackground modalShowing-${modalState} product-modal`}>
          <div className="container-modal">
            <div className="badge-modal">
              {
                news.is_news === true ? 'News' : 'Article en vitrine'
              }
            </div>
            <div className="product-tumb-modal">
              <img src={news.picture_url} alt="news-modal" className="modal-picture" />
            </div>
            <div className="product-details-modal">
              <span className="product-catagory-modal">{news.activity_name}</span>
              <h4 className="product-title-modal">{news.article_title}</h4>
              <p>{news.description}</p>
              <div className="product-bottom-details-modal">
                <div className="product-price-modal">{news.price} €</div>
                <div className="product-links-modal">
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
                  <button type="button" className="button" onClick={() => manageState(!modalState)}>
                    Fermer  la fenêtre
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
