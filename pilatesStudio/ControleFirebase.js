// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSZoP5iiOQVnW7vaPcE6H_Kc5uFQ3xc_c",
  authDomain: "medita-ama-rp.firebaseapp.com",
  projectId: "medita-ama-rp",
  storageBucket: "medita-ama-rp.firebasestorage.app",
  messagingSenderId: "463493551767",
  appId: "1:463493551767:web:e6f07b2fc0d904cf56fbd2",
  measurementId: "G-D7ME680ECV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);