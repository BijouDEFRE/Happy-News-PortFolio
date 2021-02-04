import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SNDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
let linkImage = null;

function uploadImage(image) {
  console.log('toto');
  const uploadTask = storage.ref(`images/${image.name}`).put(image);

  uploadTask.on(
    'state_changed',
    snapshot => {},
    (error) => {
      console.error('ERROR =>', error);
    },
    () => {
      storage
        .ref('images')
        .child(image.name)
        .getDownloadURL()
        .then((url) => {
          console.log('FIREBASE URL=>', url);
          linkImage = url;
        });
    },
  );

  return linkImage;
}

export default uploadImage;