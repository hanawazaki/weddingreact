import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpBfyyz7jcL4wKFvShG-oe45Ndjf-Ne2Q",
  authDomain: "hairulfauziyyah.firebaseapp.com",
  projectId: "hairulfauziyyah",
  storageBucket: "hairulfauziyyah.firebasestorage.app",
  messagingSenderId: "619647830228",
  appId: "1:619647830228:web:0fb9d17d4adfefaf951341"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };