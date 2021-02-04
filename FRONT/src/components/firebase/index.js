import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzHISYce8s-6kJN2JDf5mBa8xnMhnRwmM",
  authDomain: "happy-news-8896f.firebaseapp.com",
  projectId: "happy-news-8896f",
  storageBucket: "happy-news-8896f.appspot.com",
  messagingSenderId: "526374690078",
  appId: "1:526374690078:web:0a1001f4d24dd18753bd0f",
  measurementId: "G-7HSGVBVG54"
};

firebase.initializeApp(firebaseConfig);
// if (!firebase.apps.length) {
//   firebase.initializeApp({});
// }else {
//   firebase.app(); // if already initialized, use that one
// }

 const storage = firebase.storage();

export { storage, firebase as default};