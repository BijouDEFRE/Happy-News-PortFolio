// Import Firebase
import * as firebase from 'firebase/app'; 
// pour pouvoir stocker nos images
import 'firebase/storage';
// pour pouvoir avoir une bdd avec Firebase
// import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDcuJLnoaO1s-kHhe0ErFpcD84Rl0gJosE",
  authDomain: "happy-news-5d501.firebaseapp.com",
  projectId: "happy-news-5d501",
  storageBucket: "happy-news-5d501.appspot.com",
  messagingSenderId: "767366119309",
  appId: "1:767366119309:web:b0c20106a74174888f87c4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialisation du stock avec Firebase
const projectStorage = firebase.storage();

// Initialisation de la bdd avec Firebase
// const projectFirestore = firebase.firestore();

export { projectStorage }; // Ajouter projectFirestore si besoin
