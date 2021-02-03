import React, { useState } from 'react';
import './style.scss';

export const AddNewsForm = ({
  title, activity_id, price, picture_url, handleChangeField, handleAddNews, addNews,
}) => {
  const handleChange = (e) => handleChangeField([e.target.name], e.target.value);

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const fileUrl = reader.readAsDataURL(file);
    console.log(fileUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNews();
  };

  const [modalState, setModalState] = useState(false);
  const manageState = () => {
    setModalState(!modalState);
  };
  return (
    <>
      <button onClick={() => manageState(!modalState)}>
        creer une news
      </button>
      <section className={`section-addnews-form modalBackground modalShowing-${modalState}`}>
        <div id="wraper">
          <div className="form-container">
            <span className="form-heading">Ajouter une News</span>
            <form
              method="post"
              action=""
              className="form-body"
              onSubmit={(e) => handleSubmit(e)}
              encType="multipart/form-data"
            >
              <div className="input-group">
                <i className="news-title" />
                <input
                  name="article_title"
                  type="text"
                  value={title}
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
                  value={activity_id}
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
                >
                  <option value="boulangerie">boulangerie</option>
                  <option value="boucherie">boucherie</option>
                  <option value="charcuterie">charcuterie</option>
                  <option value="coiffeur">coiffeur</option>
                  <option value="fleuriste">fleuriste</option>
                  <option value="fromagerie">fromagerie</option>
                  <option value="garagiste">garagiste</option>
                  <option value="papeterie">papeterie</option>
                  <option value="primeur">primeur</option>
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
                  value={picture_url}
                  accept="image"
                  onChange={(e) => handleChangeImage(e)}
                  multiple
                />
                <span className="bar" />
              </div>
              <div className="input-group">
                <button className="news-valid-form-but">
                  <i className="picture-valid">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-telegram" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                    </svg>
                  </i>
                </button>
                <button type="submit" className="news-valid-form-but">
                  <i className="picture-valid">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

// AddNewsForm.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
//   file: PropTypes.array.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
// };

export default AddNewsForm;
