import React from 'react';
import ArtAvatar from 'src/assets/Images/Arthur.svg';
import EmaAvatar from 'src/assets/Images/Emanuella.svg';
import FredAvatar from 'src/assets/Images/Fredo.svg';
import PacAvatar from 'src/assets/Images/Paco.svg';
import Discount from 'src/assets/Images/undraw_discount_d4bd.svg';
import YannAvatar from 'src/assets/Images/Yann.svg';
import './style.scss';

const About = () => (
  <section className="aboutUs">
    <div className="aboutUs__presentationSection">
      <h2 className="aboutUs__presentationSection__title">Le projet</h2>
      <p className="aboutUs__presentationSection__text">Happy News est une application qui a pour but de renouer les liens entre les commerçants de proximité et les clients. </p>
      <p className="aboutUs__presentationSection__text">Ces clients profiteront de promotions  mise en ligne par les commerçants.  </p>
      <img className="aboutUs__presentationSection__img" src={Discount} alt="" />
    </div>
    <div className="aboutUs__teamSection">
      <div className="aboutUs__teamSection__titleSection">
        <h2>La team</h2>
      </div>
      <div className="aboutUs__teamSection__character">
        <img src={EmaAvatar} alt="emanuella avatar" className="aboutUs__teamSection__character__avatar" />
        <h4 className="aboutUs__teamSection__character__title">Emanuela</h4>
        <p className="aboutUs__teamSection__character__text">Scrum Master</p>
        <div className="aboutUs__teamSection__character__social">
          <i className="aboutUs__teamSection__icon__face">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </i>
          <i className="aboutUs__teamSection__icon__insta">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </i>
          <i className="aboutUs__teamSection__icon__linked">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8.01" />
              <line x1="12" y1="16" x2="12" y2="11" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </i>
        </div>
      </div>
      <div className="aboutUs__teamSection__character">
        <img src={ArtAvatar} alt="arthur avatar" className="aboutUs__teamSection__character__avatar" />
        <h4 className="aboutUs__teamSection__character__title">Arthur</h4>
        <p className="aboutUs__teamSection__character__text">Lead dev front</p>
        <div className="aboutUs__teamSection__character__social">
          <i className="aboutUs__teamSection__icon__face">
            <svg xmlns="http://www.w3.org/3000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </i>
          <i className="aboutUs__teamSection__icon__insta">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </i>
          <i className="aboutUs__teamSection__icon__linked">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8.01" />
              <line x1="12" y1="16" x2="12" y2="11" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </i>
        </div>
      </div>
      <div className="aboutUs__teamSection__character">
        <img src={FredAvatar} alt="fredo" className="aboutUs__teamSection__character__avatar" />
        <h4 className="aboutUs__teamSection__character__title">Frédo</h4>
        <p className="aboutUs__teamSection__character__text">Lead Back</p>
        <div className="aboutUs__teamSection__character__social">
          <i className="aboutUs__teamSection__icon__face">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </i>
          <i className="aboutUs__teamSection__icon__insta">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </i>
          <i className="aboutUs__teamSection__icon__linked">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8.01" />
              <line x1="12" y1="16" x2="12" y2="11" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </i>
        </div>
      </div>
      <div className="aboutUs__teamSection__character">
        <img src={YannAvatar} alt="yann" className="aboutUs__teamSection__character__avatar" />
        <h4 className="aboutUs__teamSection__character__title">Yann</h4>
        <p className="aboutUs__teamSection__character__text">Git Master</p>
        <div className="aboutUs__teamSection__character__social">
          <i className="aboutUs__teamSection__icon__face">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </i>
          <i className="aboutUs__teamSection__icon__insta">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </i>
          <i className="aboutUs__teamSection__icon__linked">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8.01" />
              <line x1="12" y1="16" x2="12" y2="11" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </i>
        </div>
      </div>
      <div className="aboutUs__teamSection__character">
        <img src={PacAvatar} alt="paco" className="aboutUs__teamSection__character__avatar" />
        <h4 className="aboutUs__teamSection__character__title">Paco</h4>
        <p className="aboutUs__teamSection__character__text">Product owner</p>
        <div className="aboutUs__teamSection__character__social">
          <i className="aboutUs__teamSection__icon__face">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </i>
          <i className="aboutUs__teamSection__icon__insta">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </i>
          <i className="aboutUs__teamSection__icon__linked">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8.01" />
              <line x1="12" y1="16" x2="12" y2="11" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </i>
        </div>
      </div>
    </div>
    <div className="aboutUs__evolutionSection">
      <h2 className="aboutUs__evolutionSection__title">Evolutions prévues</h2>
      <div className="aboutUs__evolutionSection__text">
        <ul>
          <li className="aboutUs__evolutionSection__text__item">- Optimiser le contact commerçant (formulaire de contact ou chat)</li>
          <li className="aboutUs__evolutionSection__text__item">- Mise en place de la durée de vie d’une news au moment de la création</li>
          <li className="aboutUs__evolutionSection__text__item">- Favoris pour trouver l’intérêt de créer un compte client</li>
          <li className="aboutUs__evolutionSection__text__item">- Envoi automatique de NewsLetter</li>
          <li className="aboutUs__evolutionSection__text__item">- Monétisation du site (La publication de news payant / La possibilité d’acheter directement en ligne)</li>
          <li className="aboutUs__evolutionSection__text__item">- Une partie admin pour gérer les réclamations des utilisateurs</li>
          <li className="aboutUs__evolutionSection__text__item">- Mise en place d’un système de livraison</li>
          <li className="aboutUs__evolutionSection__text__item">- Historique des ventes et d’achats pour les utilisateurs</li>
        </ul>
      </div>
    </div>

  </section>
);

export default About;
