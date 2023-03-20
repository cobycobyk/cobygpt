import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRrlNgTluIQPtRQUVWqYDXiOsGRgQ_TVE",
  authDomain: "cobygptclone.firebaseapp.com",
  projectId: "cobygptclone",
  storageBucket: "cobygptclone.appspot.com",
  messagingSenderId: "786938588563",
  appId: "1:786938588563:web:32d33a3a52652837b64c66"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }