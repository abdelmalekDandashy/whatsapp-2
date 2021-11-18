// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqi7IiribKYQyrAT5iZ1E-Vhbq_JGyEPU",
  authDomain: "whatsapp-e01a8.firebaseapp.com",
  projectId: "whatsapp-e01a8",
  storageBucket: "whatsapp-e01a8.appspot.com",
  messagingSenderId: "327574473442",
  appId: "1:327574473442:web:09495882b2976db8a12cbb",
};

// Initialize Firebase.
// console.log(firebase.apps.length);
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = getFirestore(app);
// console.log(db);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
