import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5wwia7sJdGIjvvISlSRj1CsNsYSPrgVs",
  authDomain: "happy-news-e4308.firebaseapp.com",
  projectId: "happy-news-e4308",
  storageBucket: "happy-news-e4308.appspot.com",
  messagingSenderId: "625972186254",
  appId: "1:625972186254:web:888633f756e4f05fcdcddf",
  measurementId: "G-FNMQHY7Y0N"
};

firebase.initializeApp(firebaseConfig);
// if (!firebase.apps.length) {
//   firebase.initializeApp({});
// }else {
//   firebase.app(); // if already initialized, use that one
// }

 const storage = firebase.storage();

export { storage, firebase as default};