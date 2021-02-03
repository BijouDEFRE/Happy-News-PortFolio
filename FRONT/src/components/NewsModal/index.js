import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const NewsModal = ({ news }) =>
  // const [modalState, setModalState] = useState(false);
  // const manageState = () => {
  //   setModalState(!modalState);
  // };
  // { `section-addnews-form modalBackground modalShowing-${modalState}`; }
  (
    <>
      <section>
        <div className="product-card">
          <div className="badge">Hot</div>
          <div className="product-tumb">
            <img src={news.picture_url} alt="news-image" />
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
      {/* <section>
        <div className={`product-card modalBackground modalShowing-${modalState} `}>
          <div className="badge">Hot</div>
          <div className="product-tumb">
            <img src={news.picture_url} alt="news-image" />
          </div>
          <div className="product-details">
            <span className="product-catagory">{news.activity_name}</span>
            <h4><a href="">{news.article_title}</a></h4>
            <p>{news.description}</p>
            <div className="product-bottom-details">
              <div className="product-price"><small>$96.00</small>${news.price}</div>
              <div className="product-links">
                {/* <button onClick={() => manageState(!modalState)}>
                  creer une news
                </button> */}
      {/* <Link to={`/commercant/profil/${news.user_id}`}>Voir le profil de ce commercant</Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
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
