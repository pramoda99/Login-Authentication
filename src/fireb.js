import firebase from 'firebase'



var firebaseConfig = {
    apiKey: "AIzaSyDUpD-Fbu-So0AmiyxVPSxQNvAk-HnLv2s",
    authDomain: "signin-814b0.firebaseapp.com",
    projectId: "signin-814b0",
    storageBucket: "signin-814b0.appspot.com",
    messagingSenderId: "258017791748",
    appId: "1:258017791748:web:5f9ccb95acc6e305758a51",
    measurementId: "G-LZ9MFGDGS1"
  };

  // Initialize Firebase

const fireb =firebase.initializeApp(firebaseConfig);

export default fireb;
