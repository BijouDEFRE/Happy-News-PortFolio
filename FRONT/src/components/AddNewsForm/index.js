import React, { useState } from 'react';
// import uploadImage from 'src/middlewares/firebase';
// import de Firebase pour les images
import { storage } from 'src/middlewares/firebase';
import PropTypes from 'prop-types';
import { NavLink, useParams  } from 'react-router-dom';
import './style.scss';

const AddNewsForm = ({
  article_title, description,
  price, userId, handleChangeField, handleAddNews, handleIsNews,
}) => {
  const [image, setImage ] = useState('');
  const [progress, setProgress] = useState(0);
  // const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = e => handleChangeField([e.target.name], e.target.value);
  //
  const handleChangeImg = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const uploadImageFirebase = (e) => {
    e.preventDefault();
    // la logique d'upload d'image vers firebase
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          // To get a progress bar on upload img
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log('L\'Url de l\'image est : ', url);
            handleChangeField('picture_url', url);
          });
      },
    );
  };

  // Appelé pour envoyer l'image a Firebase
  /*   const handleUpload = (e) => {
    e.preventDefault(),
    console.log('handleUpload');
  }; */

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddNews();
    // setIsDisabled(!isDisabled);
  };

  const { id } = useParams();

  // Gestion de la modal :
  const [modalState, setModalState] = useState(false);
  const manageState = () => {
    setModalState(!modalState);
  };

  return (
    <>
      { parseInt(localStorage.getItem('id'), 10) === parseInt(id, 10)
      && (
        <button type="button" onClick={() => manageState(!modalState)}>
          creer une news
        </button>
      )}
      <section className={`section-addnews-form modalBackground modalShowing-${modalState}`}>
      {/* <section className="section-addnews-form"> */}
        <div id="wraper">
          <div className="form-container">
            <span className="form-heading">Ajouter une News</span>
            <form
              className="form-body"
              onSubmit={handleSubmit}
            >
              <div className="input-group">
                <i className="news-title" />
                <input
                  name="article_title"
                  type="text"
                  value={article_title}
                  placeholder="Titre..."
                  onChange={(e) => handleChange(e)}
                />
                <span className="bar" />
              </div>
              <div className="input-group">
                <i className="news-description" />
                <input
                  name="description"
                  type="text"
                  value={description}
                  placeholder="Description..."
                  onChange={(e) => handleChange(e)}
                />
                <span className="bar" />
              </div>
              <div className="input-group">
                <i className="news-category" />
                <span className="bar" />
              </div>
              <div className="input-group">
                <i className="news-price" />
                <input
                  name="price"
                  type="number"
                  value={price}
                  placeholder="Prix..."
                  onChange={(e) => handleChange(e)}
                />
                <span className="bar" />
              </div>
              {/* ajout input article is news a false */}
              <div className="input-group">
                <label className="form__label label-register" htmlFor="isNews">cliquer si vous etes commercant</label>
                <input
                  onChange={(event) => {
                    handleIsNews(event.target.checked);
                  }}
                  id="isNews"
                  type="checkbox"
                  className="form__input"
                  name="isNews"
                />
              </div>
              {/* fin de l'ajout */}
              <div className="input-group">
                <i className="picture-downlaod" />
                <input
                  name="url"
                  type="file"
                  onChange={handleChangeImg}
                />
                <button type="button" onClick={uploadImageFirebase}>v</button>
                <span className="bar" />
              </div>
              <div className="input-group">
                <button
                  type="button"
                  className="news-valid-form-but"
                  // disabled={isDisabled}
                  onClick={handleSubmit}
                >
                  <i className="picture-valid">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-telegram" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                    </svg>
                  </i>
                </button>
                <NavLink to={`/commercant/profil/${userId}`}>
                  <button type="button" className="news-valid-form-but" onClick={() => manageState(!modalState)}>
                    <i className="picture-valid">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </i>
                  </button>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

AddNewsForm.propTypes = {
  handleIsNews: PropTypes.func.isRequired,
  userId: PropTypes.string,
  handleChangeField: PropTypes.func.isRequired,
  handleAddNews: PropTypes.func.isRequired,
  article_title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

AddNewsForm.defaultProps = {
  userId: '',
};

export default AddNewsForm;
