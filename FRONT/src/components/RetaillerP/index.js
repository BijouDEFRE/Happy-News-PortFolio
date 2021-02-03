import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfilInformation from 'src/components/RetaillerP/ProfilInformation';
import Tabs from 'src/containers/tab';
import AddNewsFormulaire from '../AddNewsForm';
import './style.scss';
import TitleProfil from './TitleProfil';

const RetailerP = ({
  loadUserDetails, user, loadNews,
}) => {
  const { id } = useParams();
  useEffect(() => {
    loadUserDetails(id);
    loadNews();
  }, []);

  // const [modalState, setModalState] = useState(false);
  // // const manageState = () => {
  // //   setModalState(!modalState);
  // // };
  // const manageState = () => {
  //   setModalState(!modalState);
  // };
  return (
    <div className="profil-container">

      {/* <Button */}
      {/* <button onClick={() => setModalState(!modalState)}>
        creer une news
      </button> */}
      {/* > creer une news */}
      {/* </Button> */}

      <AddNewsFormulaire />
      <TitleProfil> bienvenue sur votre profil {user.first_name} </TitleProfil>
      <ProfilInformation />
      <Tabs />

    </div>
  );
};

export default RetailerP;
