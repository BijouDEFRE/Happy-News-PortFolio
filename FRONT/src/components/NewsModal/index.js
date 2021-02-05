import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const NewsModal = ({ news }) => {
  const [modalState, setModalState] = useState(false);
  const manageState = () => {
    setModalState(!modalState);
  };
  // { `section-addnews-form modalBackground modalShowing-${modalState}`; }
  return (
    <>
      <section>
        <div className="product-card">
          <div className="badge">Hot</div>
          <div className="product-tumb">
            <img src={news.picture_url} alt="news-image" onClick={() => manageState(!modalState)} />
          </div>
          <div className="product-details">
            <span className="product-catagory">{news.activity_name}</span>
            <h4>{news.article_title}</h4>
            <p>{news.description}</p>
            <div className="product-bottom-details">
              <div className="product-price"><small>$96.00</small>${news.price}</div>
              <div className="product-links">
                {/* <button onClick={() => manageState(!modalState)}>
                  creer une news
                </button> */}
                <NavLink to={`/commercant/profil/${news.user_id}`}>Voir le profil de ce commercant</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={`modalBackground modalShowing-${modalState} product-modal`}>
          <div className="container-modal">
            <div className="badge-modal">Hot</div>
            <div className="product-tumb-modal">
              <img src={news.picture_url} alt="news-image-modal" className="modal-picture" />
            </div>
            <div className="product-details-modal">
              <span className="product-catagory-modal">{news.activity_name}</span>
              <h4><a href="">{news.article_title}</a></h4>
              <p>{news.description}</p>
              <div className="product-bottom-details-modal">
                <div className="product-price-modal"><small>$96.00</small>${news.price}</div>
                <div className="product-links-modal">
                  <button onClick={() => manageState(!modalState)}>
                    fermer la modale
                  </button>
                  <NavLink to={`/commercant/profil/${news.user_id}`}>Voir le profil de ce commercant</NavLink>
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
    article_title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture_url: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    activity_name: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsModal;
