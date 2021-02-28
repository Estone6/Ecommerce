import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtwmJrZ21rRBBU_hpPj93iWF98MwZ_9o0",
  authDomain: "ecommerce-c02fa.firebaseapp.com",
  projectId: "ecommerce-c02fa",
  storageBucket: "ecommerce-c02fa.appspot.com",
  messagingSenderId: "196425320639",
  appId: "1:196425320639:web:f75629edccabbb183e5e0a",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
