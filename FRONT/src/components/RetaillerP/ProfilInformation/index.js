import React from 'react';
import Avatar from 'src/components/Header/Avatar';
import InformationForm from 'src/containers/InformationForm';
import retailProfilPic from '../../../assets/Images/profile.png';
import './style.scss';

const ProfilInformation = () => (
  <div className="container-information">
    <div>
      <img className="container-information__picture" alt="profil-pic" src={retailProfilPic} />
    </div>
    <InformationForm />
    <div className="avatar-profil">
      <Avatar />
    </div>
  </div>
);

export default ProfilInformation;
