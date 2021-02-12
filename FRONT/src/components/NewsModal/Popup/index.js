import PropTypes from 'prop-types';
import React from 'react';
import Button from 'src/components/Header/Button';
import './style.scss';

const PopUp = ({ changePopup, handleDelete, news }) => {
  // when we wanna delete the card, we call changePop up to close the pop up and in the same time delete the card
  const handleDeleteCard = (event) => {
    handleDelete(event.target.value);
    changePopup();
  };

  return (
    <div className="popup">
      <div className="popup__inner">
        <p className="popup__message">Êtes vous sûr de vouloir supprimer cette news?</p>
        <Button
          type="button"
          event={() => changePopup()}
        > Fermer
        </Button>
        <button
          type="button"
          className="popup__bouton__delete"
          name={news.article_title}
          value={news.id}
          onClick={handleDeleteCard}
        >
          Confirmer la suppresion
        </button>
      </div>
    </div>
  );
};
PopUp.propTypes = {
  changePopup: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
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

export default PopUp;
