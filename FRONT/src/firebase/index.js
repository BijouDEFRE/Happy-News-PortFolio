import firebase from 'firebase/app';
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg-d9ipSoU0oskGtw8D4ghHfQF4JR23YY",
  authDomain: "fir-happy-news.firebaseapp.com",
  projectId: "fir-happy-news",
  storageBucket: "fir-happy-news.appspot.com",
  messagingSenderId: "1057813750632",
  appId: "1:1057813750632:web:c1fbefc09f7f6955682cdd",
  measurementId: "G-73RXE3TKRN"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default} ;