// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDloBn6L-kFlaFrUQ7GY8WQ4eQDag8o0FI",
  authDomain: "tabernacle-of-david.firebaseapp.com",
  projectId: "tabernacle-of-david",
  storageBucket: "tabernacle-of-david.appspot.com",
  messagingSenderId: "309931340491",
  appId: "1:309931340491:web:b8e173824002f5b55b614e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };