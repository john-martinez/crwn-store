import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBgixncfdz11EAqMDC2ymAD8hVIDUEKyVQ",
  authDomain: "crwn-db-5b8a9.firebaseapp.com",
  databaseURL: "https://crwn-db-5b8a9.firebaseio.com",
  projectId: "crwn-db-5b8a9",
  storageBucket: "crwn-db-5b8a9.appspot.com",
  messagingSenderId: "791815708537",
  appId: "1:791815708537:web:8aba719fd734d0e08ad9a8",
  measurementId: "G-DBSGWGN3CV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);