import React from 'react';
import Maps from '../../../containers/map';
import Customer from './Customer/index';
import Retailer from './Retailer/index';
// == Import du CSS
import './style.scss';

function Page() {
  return (
    <div className="mainContainer">
      <span className="map__information">Vos producteurs locaux ont une bonne nouvelle à vous annoncer</span>
      <Maps />
      <Customer />
      <Retailer />
    </div>
  );
}

export default Page;
