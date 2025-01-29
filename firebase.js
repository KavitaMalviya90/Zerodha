// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config from Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyDIMe2Fot6D33HGHQh7aXj_x3ItgpB4rLE",
  authDomain: "kiteweb-735a9.firebaseapp.com",
  projectId: "kiteweb-735a9",
  storageBucket: "kiteweb-735a9.appspot.com",
  messagingSenderId: "257605266216",
  appId: "1:257605266216:web:f7f8aebd7eee77389dbe1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);