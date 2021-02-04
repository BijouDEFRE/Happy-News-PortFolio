import React, { useState } from 'react';
import uploadImage from 'src/middlewares/firebase';
import PropTypes from 'prop-types';
import { NavLink, useParams } from 'react-router-dom';
import './style.scss';

export const AddNewsForm = ({ article_title, description, picture_url,price, userId, handleChangeField, activities, handleAddNews }) => {
 
  const [image, setImage ] = useState(null);
  const [pictureUrl, setPictureUrl ] = useState(null);

  const handleChange = e => handleChangeField([e.target.name], e.target.value);
  
  const handleChangeImg = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  console.log(image);

  
  const handleUpload = async () => {
    const url = await uploadImage(image);
    setPictureUrl(url);
    console.log(url);
  };
  console.log(pictureUrl);



  {/** ------------- Récupère l'image et la transforme en blob --------
     const handleChangeImage = e => {
    const reader = new FileReader() // Je crée un nouveau reader
    const file = e.target.files[0] // Je récupère mon image 
    reader.onloadend =() =>{ // Je la converti en blob afin de pouvoir l'envoyer au back.
      // console.log('reader.result', reader.result)
      handleChangeField('picture_url', reader.result)
    }
    console.log(reader.readAsDataURL(file))
  }
   */}

 
  console.log(handleAddNews);
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddNews();
    // e.target.reset()
  };

  return (
    <section className="section-addnews-form">
      <div id="wraper">
        <div className="form-container">
          <span className="form-heading">Ajouter une News</span>
          <form method="post" 
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
                onChange={e => handleChange(e)}
                required
                />
              <span className="bar"></span>
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
              <select
                onChange={(e) => handleChange(e)}
                name="activity_id"
                placeholder="Catégorie..."
                // value=""
              >
                {activities.map((tag) => (
                <option className="input-group" placeholder="Catégorie..." key={tag.id} value={tag.id} selected="charcuterie">{tag.activity_name}</option>
                ))}
              </select>
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
            <div className="input-group">
              <i className="picture-downlaod" />
              <input
                name="picture_url"
                type="file"
                value={pictureUrl}
                accept="image" 
                onChange={handleChangeImg}
                //multiple
              />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <button className="news-valid-form-but" onClick={handleUpload}>
                <i className="picture-valid">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-telegram" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                  </svg>
                </i>
              </button>
              <NavLink to={`/commercant/profil/${userId}`}>
                <button className="news-valid-form-but">
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

  );
};

// ({ article_title, description, picture_url,price, activity_id, userId, handleChangeField }

AddNewsForm.propTypes = {
  handleAddNews: PropTypes.func.isRequired,
  article_title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // activity_id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  picture_url: PropTypes.string.isRequired,
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      activity_name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// export default AddNewsForm;
