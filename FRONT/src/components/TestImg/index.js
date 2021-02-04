import React, { useState } from 'react';
import firebase from 'firebase/app'
import { storage } from "../firebase";
import './style.scss';

// Definition du state de l'upload
const ReactFirebaseFileUpload = () => {
  const [image, setImage] = useState(null);

  // écouteur d'évènement qui agit au chargement d'une image
  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  };

  // Vérification que l'image est bien sélectionnée
  console.log('l\'image sélectionnée est : ',image);

  // Fonction qui va servir à envoyer l'image sur firebase
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
          });
      }
    );
  };

  return (
    <div className="container">
     Test d'upload sur firebase
     <br/>
     {/** Ici on sélectionne l'image */}
     <input type="file" onChange={handleChange} className="inp"/>
     {/** Ici on envoie l'image */}
     <button onClick={handleUpload} className="btn">Chargement</button> 
    </div>
  );
};

export default ReactFirebaseFileUpload 