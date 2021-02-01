import React, { Component } from 'react';
import AddNewsForm from 'src/components/AddNewsForm';
import './style.scss';

export default class Bouton extends Component {
  render() {
    return (
      <div>
        <button className="bouton">Ajouter une News</button>
        <AddNewsForm />
      </div>
    )
  }
}



