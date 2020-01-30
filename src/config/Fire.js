import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyCnCtrTnPRv-nstvXDYFxroLiWrg5xRWJA",
    authDomain: "simple-crud-7bae3.firebaseapp.com",
    databaseURL: "https://simple-crud-7bae3.firebaseio.com",
    projectId: "simple-crud-7bae3",
    storageBucket: "simple-crud-7bae3.appspot.com",
    messagingSenderId: "12627919773",
    appId: "1:12627919773:web:b741cfbfd39a77a4996574",
    measurementId: "G-SPZMWLV3GV"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(config);
  export default fire;