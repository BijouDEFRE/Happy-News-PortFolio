import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import PopUp from 'src/containers/popup';
import './style.scss';

const NewsModal = ({
  news,
}) => {
  const [popUp, setPopUp] = useState(false);
  const changePopup = () => {
    setPopUp(!popUp);
  };
  return (
    <section>
      <div className="product-card">
        <div className="badge">Hot  </div>

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
              { parseInt(localStorage.getItem('id')) === news.user_id
                && (
                  <>
                    <MdDeleteForever onClick={() => {
                      changePopup(); console.log(popUp);
                    }}
                    />
                    {popUp === true
                    && <PopUp news={news} changePopup={changePopup} />}
                  </>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
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
  }).isRequired,
};

export default NewsModal;
