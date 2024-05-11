import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6MZUUXYJT2eG3lKwk386nSOXg4vOctNk",
  authDomain: "projetofirebase-f5ab1.firebaseapp.com",
  projectId: "projetofirebase-f5ab1",
  storageBucket: "projetofirebase-f5ab1.appspot.com",
  messagingSenderId: "857335660599",
  appId: "1:857335660599:web:5d19e0192348e27d9b3fb2",
  measurementId: "G-12B6E7WGDR",
};

initializeApp(firebaseConfig);

export const auth = getAuth();
