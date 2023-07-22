import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAFNiWfQYWN3MM-laUbV67Zl1gwIfOpfYA",
    authDomain: "tutorial-firebase-image.firebaseapp.com",
    projectId: "tutorial-firebase-image",
    storageBucket: "tutorial-firebase-image.appspot.com",
    messagingSenderId: "864459721448",
    appId: "1:864459721448:web:8b792e95a296c6d21f575d"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  export {firebase}