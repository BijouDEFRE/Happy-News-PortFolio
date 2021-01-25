import React, { useState } from 'react';

import Send from '../../assets/Images/send.png';
import { connect } from 'react-redux';
import { addNews } from '../../redux/actions';

import './style.scss';

const AddNewsForm = ({ newsData,addNewsToList }) => {
  const initialState = {
    title: '',
    description: '',
    category: '',
    price: '',
    file: [],
    author: ''
  }

  const [newHappyNews, setNewHappyNews] = useState(initialState);
  console.log(newHappyNews.title);

  const handleSubmit = e => {
    e.preventDefault();
     
    addNewsToList(newHappyNews);

    // Vider le input
    setNewHappyNews(initialState)
  }


  return (
    <section className="section-addnews-form">
      <div id="wraper">
        <div className="form-container">
          <span className="form-heading">Ajouter une News</span>
          <form action="" className="form-body" onSubmit={ handleSubmit }>
            <div className="input-group">
              <i className="news-title"></i>
              <input 
                type="text"
                value={ newHappyNews.title }
                placeholder="Titre..." 
                required
                onChange={ e => setNewHappyNews({...newHappyNews, title: e.target.value}) }
                />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="news-description"></i>
              <input 
                type="text"
                value={ newHappyNews.description }
                placeholder="Description..." 
                required
                onChange={ e => setNewHappyNews({...newHappyNews, description: e.target.value}) }
                />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="news-category"></i>
              <input 
                type="text"
                value={ newHappyNews.category }
                placeholder="Catégorie..." 
                required
                onChange={ e => setNewHappyNews({...newHappyNews, category: e.target.value}) }
                />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="news-price"></i>
              <input 
                type="number"
                value={ newHappyNews.price }
                placeholder="Prix..." 
                required
                onChange={ e => setNewHappyNews({...newHappyNews, price: e.target.value}) }
                />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="picture-downlaod"></i>
              <input 
                type="file"
                value={ newHappyNews.file } 
                accept="image" 
                required
                onChange={ e => setNewHappyNews({...newHappyNews, file: e.target.value}) }
                />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <button className="news-valid-form-but">
                <i className="picture-valid">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-telegram" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                  </svg>
                </i>
              </button>
              <button className="news-valid-form-but">
                <i className="picture-valid">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </i>
              </button>
              {/**
               * <div className="switch-login">
                <a href="#">Déjà un compte? <span>Login</span></a>
              </div>
               */}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    // retourne undefined
    newsData: state.newsList
  }
}

console.log()

const mapDispatchToProps = dispatch => {
  return {
    addNewsToList: param => dispatch(addNews(param))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewsForm);