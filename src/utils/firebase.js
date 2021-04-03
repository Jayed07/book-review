import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAzM1zOeby8RIsFy91o7hIVMWnkFTf1FSU",
    authDomain: "react-book-review.firebaseapp.com",
    projectId: "react-book-review",
    storageBucket: "react-book-review.appspot.com",
    messagingSenderId: "581185564043",
    appId: "1:581185564043:web:133811dc7d2b35a83f138e"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();