import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBwU0fEztIMzgYRuUqXk3q5a4x208iwfb4",
    authDomain: "airbnb-59b2c.firebaseapp.com",
    projectId: "airbnb-59b2c",
    storageBucket: "airbnb-59b2c.appspot.com",
    messagingSenderId: "64313370872",
    appId: "1:64313370872:web:7cabf067d9dfcb7aa1730d",
    measurementId: "G-G4X9QQP9VX"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };