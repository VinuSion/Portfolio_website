// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmYWIp9TmFcWaedSKoI1DBGN4mxh_yxrc",
  authDomain: "portfolio-website-vinusion.firebaseapp.com",
  projectId: "portfolio-website-vinusion",
  storageBucket: "portfolio-website-vinusion.appspot.com",
  messagingSenderId: "290351661727",
  appId: "1:290351661727:web:f92c19af0e5a4ba20b98aa",
  measurementId: "G-417FSEW0RV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);