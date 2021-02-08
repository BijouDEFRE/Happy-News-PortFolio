import React from 'react';
import EmaAvatar from 'src/assets/Images/Emanuella.svg';
import ArtAvatar from 'src/assets/Images/Arthur.svg';
import FredAvatar from 'src/assets/Images/Fredo.svg';
import YannAvatar from 'src/assets/Images/Yann.svg';
import PacAvatar from 'src/assets/Images/Paco.svg';
import './style.scss';

const About = () => (
  <section className="aboutUs">
    <div className="aboutUs__presentationSection">
      <h2 className="aboutUs__presentationSection__title">Titre de la section présentation</h2>
      <p className="aboutUs__presentationSection__text">Texte de la présentation</p>
    </div>
    <div className="aboutUs__teamSection">
      <div className="aboutUs__teamSection__titleSection">
        <h2>La team</h2>
      </div>
      <div className="aboutUs__teamSection__character">
        <img src={ EmaAvatar } alt="emanuella avatar" className="aboutUs__teamSection__character__avatar"/>
        <h4 className="aboutUs__teamSection__title">Emanuella</h4>
        <p className="aboutUs__teamSection__text">Bonjour, je suis Emanuella</p>
        <div className="aboutUs__teamSection__social">
          <i className="aboutUs__teamSection__icon__face">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </i>
          <i className="aboutUs__teamSection__icon__insta">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </i>
          <i className="aboutUs__teamSection__icon__linked">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
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
        <img src={ ArtAvatar } alt="arthur avatar" className="aboutUs__teamSection__character__avatar"/>
        <h4 className="aboutUs__teamSection__title">Arthur</h4>
        <p className="aboutUs__teamSection__text">Bonjour, je suis Arthur</p>
        <div className="aboutUs__teamSection__social">
          <i className="aboutUs__teamSection__icon__face">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </i>
          <i className="aboutUs__teamSection__icon__insta">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </i>
          <i className="aboutUs__teamSection__icon__linked">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
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
        <img src={ FredAvatar } alt="fredo" className="aboutUs__teamSection__character__avatar"/>
        <h4 className="aboutUs__teamSection__title">Frédo</h4>
        <p className="aboutUs__teamSection__text">Bonjour, je suis Frédo</p>
        <div className="aboutUs__teamSection__social">
          <i className="aboutUs__teamSection__icon__face">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </i>
          <i className="aboutUs__teamSection__icon__insta">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </i>
          <i className="aboutUs__teamSection__icon__linked">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
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
        <img src={ YannAvatar } alt="yann" className="aboutUs__teamSection__character__avatar"/>
        <h4 className="aboutUs__teamSection__title">Yann</h4>
        <p className="aboutUs__teamSection__text">Bonjour, je suis Yann</p>
        <div className="aboutUs__teamSection__social">
          <i className="aboutUs__teamSection__icon__face">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </i>
          <i className="aboutUs__teamSection__icon__insta">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </i>
          <i className="aboutUs__teamSection__icon__linked">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
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
        <img src={ PacAvatar } alt="paco" className="aboutUs__teamSection__character__avatar"/>
        <h4 className="aboutUs__teamSection__title">Paco</h4>
        <p className="aboutUs__teamSection__text">Bonjour, je suis Paco</p>
        <div className="aboutUs__teamSection__social">
          <i className="aboutUs__teamSection__icon__face">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </i>
          <i className="aboutUs__teamSection__icon__insta">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </i>
          <i className="aboutUs__teamSection__icon__linked">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
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
      <h2 className="aboutUs__evolutionSection__title">Titre de la section évolutions</h2>
      <div className="aboutUs__evolutionSection__text">
        <ul>
          <li>Optimiser le contact commerçant (formulaire de contact ou chat)</li>
          <li>Mise en place de la durée de vie d’une news au moment de la création</li>
          <li>Favoris pour trouver l’intérêt de créer un compte client</li>
          <li>Envoi automatique de NewsLetter</li>
          <li>Monétisation du site (La publication de news payant / La possibilité d’acheter directement en ligne)</li>
          <li>Une partie admin pour gérer les réclamations des utilisateurs</li>
          <li>Mise en place d’un système de livraison</li>
          <li>Historique des ventes et d’achats pour les utilisateurs</li>
        </ul>
      </div>
    </div>
    
  </section>

  // <div className="about">

  //   <h2 className="about_title"> QUI SOMMES-NOUS ? </h2>
  //   <p className="about_text">Quelle entreprise se trouve derrière ce nom étrange de happy News ! ? Asseyez-vous et laissez-vous conter notre histoire qui a commencé en 2021. Il est possible aussi de vous résumer Happy News en chiffres ou de vous présenter ses valeurs en lettres si vous êtes pressés. Mais avant tout, nous avons quelque chose à vous révéler : Happy News ! est une formidable aventure humaine. </p>

  //   <h2 className="about_title"> QUE FAISONS-NOUS ? </h2>
  //   <p className="about_text">Quel beau métier que celui de Happy News ! : donner à tous les moyens de mieux se nourrir et soutenir les agriculteurs et commercants qui cultivent un monde meilleur. Dans notre réseau, des femmes et des hommes passionnés, inventent de nouvelles façons de commercer. La tâche est complexe, les déclinaisons plurielles mais, de Nantes à Strasbourg les ambitions restent les mêmes. </p>

  // </div>
);

export default About;
