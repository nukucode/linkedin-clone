import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4xv3_WJS2wyrHX9o07WJ2Spmm4BjPOso",
  authDomain: "linkedin-clone-13d61.firebaseapp.com",
  projectId: "linkedin-clone-13d61",
  storageBucket: "linkedin-clone-13d61.appspot.com",
  messagingSenderId: "975504829692",
  appId: "1:975504829692:web:acd97df02e993c42813b79",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
