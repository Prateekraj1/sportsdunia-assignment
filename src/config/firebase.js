import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDjDX1jfk9tAQ0_ntUTVXS60pTmCHLu0xI",
  authDomain: "sportsdunia-assignment-2f8d7.firebaseapp.com",
  projectId: "sportsdunia-assignment-2f8d7",
  storageBucket: "sportsdunia-assignment-2f8d7.firebasestorage.app",
  messagingSenderId: "170437865218",
  appId: "1:170437865218:web:444298a8b0ab148f425c1b",
  measurementId: "G-TV1PXYNMZ3",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, analytics, auth };
