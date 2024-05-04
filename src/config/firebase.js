// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6v2XUPU1KCoo1C4HCk2UNTHDlG8l60hw",
  authDomain: "it-sysarch32-store-calon-9ca5a.firebaseapp.com",
  projectId: "it-sysarch32-store-calon-9ca5a",
  storageBucket: "it-sysarch32-store-calon-9ca5a.appspot.com",
  messagingSenderId: "97639672484",
  appId: "1:97639672484:web:5cea03c9e699c1e8e5d431",
  measurementId: "G-YGB1GLDYCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
