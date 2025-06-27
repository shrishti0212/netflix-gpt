// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwyAhzJstOoVShwImaaMU6D7UkFz_CbBE",
  authDomain: "netflixgpt-b04d7.firebaseapp.com",
  projectId: "netflixgpt-b04d7",
  storageBucket: "netflixgpt-b04d7.firebasestorage.app",
  messagingSenderId: "567645472571",
  appId: "1:567645472571:web:d30a4fdccb37150257191e",
  measurementId: "G-7FYXKRL2E7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();