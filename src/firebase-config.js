import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB0ZmDo4LQq8ACAfxi1JrA7icj4uhhLEs",
  authDomain: "tellastory-blog.firebaseapp.com",
  projectId: "tellastory-blog",
  storageBucket: "tellastory-blog.appspot.com",
  messagingSenderId: "954586281714",
  appId: "1:954586281714:web:aa2d0478630a095b68826b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();