import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDQoze4iNukHfDByMnlkB7jnQdQgAMGvJw",
    authDomain: "goalcoach-69720.firebaseapp.com",
    databaseURL: "https://goalcoach-69720.firebaseio.com",
    projectId: "goalcoach-69720",
    storageBucket: "",
    messagingSenderId: "1010108409189"
  };

export const firebaseApp = firebase.initializeApp(config);