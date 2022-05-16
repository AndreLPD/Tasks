// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app'
import 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGNXQaEgRCQipqQECQoKZcXJq-IM3vmKw",
  authDomain: "task-f3325.firebaseapp.com",
  projectId: "task-f3325",
  storageBucket: "task-f3325.appspot.com",
  messagingSenderId: "1010033882518",
  appId: "1:1010033882518:web:e6d5aea0688ce9c67119b7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore;
export default database;