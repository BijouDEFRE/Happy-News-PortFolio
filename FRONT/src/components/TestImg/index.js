import React, { useState } from 'react'

const ReactFirebaseFileUpload = () => {
  const [image, setImage] = useState(null);

  const handleChange = e => {
    if (e.target.files[0]) {

    }
  };

  const handleUpload = () => {};

  return (
    <div>
     Test d'upload sur firebase
     <br/>
     <input type="file" onChange={handleChange}/>
     <button onClick={handleUpload}>Chargement</button> 
    </div>
  );
};

export default ReactFirebaseFileUpload 