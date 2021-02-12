import React from 'react';
import './style.scss';

const ContactForm = () => (
  <form className="contact">
    <h1 className="contact-title">Contactez-nous</h1>

    <div className="contact-form">
      <label className="contact-label-form" htmlFor="InputLastName">Nom</label>
      <input type="text" className="contact-form-input" id="InputlastName" name="InputFirstName" placeholder="Nom" />
    </div>

    <div className="register-form">
      <label className="contact-label-form" htmlFor="InputFirstName">Prénom</label>
      <input type="text" className="contact-form-input" name="InputFirstName" id="InputFirstName" placeholder="Prénom" />
    </div>
    <div className="contact-form">
      <label className="contact-label-form" htmlFor="ImputEmail">Email</label>
      <input type="email" className="contact-form-input" name="ImputEmail" id="ImputEmail" placeholder="Entrer votre email" />
    </div>git branch
    <div className="contact-form">
      <label className="contact-label-form" htmlFor="ImputText">Votre message</label>
      <textarea type="text-area" className="contact-form-input" name="ImputEmail" id="ImputEmail" placeholder="Entrer votre message" />
    </div>
  </form>
);

export default ContactForm;
