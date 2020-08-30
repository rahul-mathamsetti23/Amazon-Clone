import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDYtiQsmf4yh9fhLLkbqQ_o8iOLXIcuAyA",
  authDomain: "clone-95fea.firebaseapp.com",
  databaseURL: "https://clone-95fea.firebaseio.com",
  projectId: "clone-95fea",
  storageBucket: "clone-95fea.appspot.com",
  messagingSenderId: "362693468895",
  appId: "1:362693468895:web:b5e1c92082239ea9577f6a",
  measurementId: "G-GKXMKGWSW2",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
