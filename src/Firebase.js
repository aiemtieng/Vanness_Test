// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoW8Te-HVgjcwKrC55fmsU_3oa-IEPIXk",
  authDomain: "vanness-test.firebaseapp.com",
  projectId: "vanness-test",
  storageBucket: "vanness-test.appspot.com",
  messagingSenderId: "927641232041",
  appId: "1:927641232041:web:8853d28177f05460567fb8",
  measurementId: "G-CN7BSZZ89D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
const db = getFirestore(app)
export {db}
export default app;