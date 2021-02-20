import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA-4ljgoVj-h1iuw2LCILLMOWv2Il4l0jY",
  authDomain: "crwn-db-a671c.firebaseapp.com",
  projectId: "crwn-db-a671c",
  storageBucket: "crwn-db-a671c.appspot.com",
  messagingSenderId: "527384265664",
  appId: "1:527384265664:web:85565577bc18a3a33bbe25",
  measurementId: "G-Y69YJ4X2WJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
