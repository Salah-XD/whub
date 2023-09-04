const firebaseConfig = {
  apiKey: "AIzaSyCuhnvllHAJcUMu99agxdWM-IEP32DbyXY",
  authDomain: "whub-391610.firebaseapp.com",
  databaseURL: "https://whub-391610-default-rtdb.firebaseio.com",
  projectId: "whub-391610",
  storageBucket: "whub-391610.appspot.com",
  messagingSenderId: "897348387103",
  appId: "1:897348387103:web:06cfa6e832a0201651f02a",
  measurementId: "G-EGP4MGE19M",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/8.6.7/firebase-auth.js";
