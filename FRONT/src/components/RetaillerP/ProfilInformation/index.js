import React from 'react';
import Avatar from 'src/components/Header/Avatar';
import InformationForm from 'src/containers/InformationForm';
import { AddNewsForm } from '../../AddNewsForm';
import Bouton from '../AddNewsButton';
import './style.scss';

const ProfilInformation = () => (
  <div className="information-container">
    <div className="avatar-profil">
      <Avatar />
    </div>
    <InformationForm />
    {/* <Bouton /> */}
  </div>
);

export default ProfilInformation;
