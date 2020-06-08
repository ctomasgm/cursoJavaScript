import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig =  {
    apiKey: "AIzaSyBba6Vw6qe1Kcu2t7Svi5Q7w4AwAvWnOpg",
    authDomain: "todosparadigmas.firebaseapp.com",
    databaseURL: "https://todosparadigmas.firebaseio.com",
    projectId: "todosparadigmas",
    storageBucket: "todosparadigmas.appspot.com",
    messagingSenderId: "865984661790",
    appId: "1:865984661790:web:425f6c3de55c84d4bca10f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export {firebase};