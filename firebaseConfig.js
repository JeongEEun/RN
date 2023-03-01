// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhAseUDqO3Bbt7FDwnmsesnCh4fT0NaLY",
  authDomain: "bookapp-e8a28.firebaseapp.com",
  databaseURL: "https://bookapp-e8a28-default-rtdb.firebaseio.com/",
  projectId: "bookapp-e8a28",
  storageBucket: "bookapp-e8a28.appspot.com",
  messagingSenderId: "968176944026",
  appId: "1:968176944026:web:b86e4a5fbfd7e75ad67023",
  measurementId: "G-5B9M8XWNC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
