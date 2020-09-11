import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBrMwCJl8euk1FNfw9pH6SFOGmPgC-hBWk",
  authDomain: "crwn-db-d17db.firebaseapp.com",
  databaseURL: "https://crwn-db-d17db.firebaseio.com",
  projectId: "crwn-db-d17db",
  storageBucket: "crwn-db-d17db.appspot.com",
  messagingSenderId: "551798336405",
  appId: "1:551798336405:web:d2b88a0a4048407ef2e49c",
  measurementId: "G-EK75J75381",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
