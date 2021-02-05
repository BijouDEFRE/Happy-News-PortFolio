import React, { useState } from 'react';
// import uploadImage from 'src/middlewares/firebase';
// import de Firebase pour les images
import { storage } from "../firebase";
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.scss';

export const AddNewsForm = ({ article_title, description, picture_url, price, userId, handleChangeField, activities, handleAddNews }) => {
 
  const [image, setImage ] = useState("");
  //const [url, setUrl] = useState(''); // [picture_url, setPicture_url]
  const [progress, setProgress] = useState(0);
  //const [isDisabled, setIsDisabled] = useState(true)

//setUrl(url) --- setPicture_url(picture_url)

  const handleChange = e => handleChangeField([e.target.name], e.target.value);
  
  const handleChangeImg = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  //console.log('l\'image sélectionnée est : ',image);

  const uploadImageFirebase = e => {
    e.preventDefault()
    // la logique d'upload d'image vers firebase
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100 // To get a progress bar on upload img
        );
        setProgress(progress)
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log('L\'Url de l\'image est : ', url); // console.log(picture_url)
            //setUrl(url) 
            handleChangeField('picture_url', url)
            //setIsDisabled(false)
            // setPicture_url(picture_url)
          });
      }
    );
  }

  // Appelé pour envoyer l'image a Firebase
  const handleUpload = (e) => {
    e.preventDefault()
    console.log('handleUpload')
  }; 

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddNews();
  };

  // console.log(handleAddNews);
/*   const handleSubmit = (event) => {
    event.preventDefault();
    // uploadImageFirebase()
    console.log('imageUrl', url)
    
    // e.target.reset()
        
    // lorsque je submit
    // j'upload l'image
    //j'attends le retour de la requete firebase (url)
    //handleAddNews();
    //const data = new FormData()
    //data.append('url', url)
    //props.????(data)
  }; */

  return (
    <section className="section-addnews-form">
      <div id="wraper">
        <div className="form-container">
          <span className="form-heading">Ajouter une News</span>
          <form 
            className="form-body" 
            onSubmit={handleSubmit} // {handleSubmit, handleUpload}
            >
            <div className="input-group">
              <i className="news-title" />
              <input
                name="article_title"
                type="text"
                value={article_title}
                placeholder="Titre..." 
                onChange={e => handleChange(e)}
                //required
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
              {/* <select
                onChange={(e) => handleChange(e)}
                name="activity_id"
                placeholder="Catégorie..."
                // value=""
              >
                {activities.map((tag) => (
                <option className="input-group" placeholder="Catégorie..." key={tag.id} value={tag.id} selected="charcuterie">{tag.activity_name}</option>
                ))}
              </select> */}
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
                name="url"
                type="file"
                // value={url}
                // accept="image" 
                onChange={handleChangeImg}
                //multiple
              />
              <button type="button" onClick={uploadImageFirebase}>v</button>
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <button className="news-valid-form-but"
              //disabled={isDisabled} 
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
