import firebase from "firebase/compat/app";
import "firebase/compat/auth";


// Your firebase configuration and initialization code follows...




const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyDmIQyBBMDZTyZsP3n40YzrTNJmUe4HubM",
  authDomain: "clone-f7f4c.firebaseapp.com",
  projectId: "clone-f7f4c",
  storageBucket: "clone-f7f4c.appspot.com",
  messagingSenderId: "794390667575",
  appId: "1:794390667575:web:928d69f079949549a83ab2",
  measurementId: "G-XH5FL0JLDG"

});



const auth = firebase.auth();

export {auth};
