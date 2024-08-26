import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzi-Mis8sVSNjSS3JZyyGElnPI7yoAMzM",
  authDomain: "clone-e4efa.firebaseapp.com",
  projectId: "clone-e4efa",
  storageBucket: "clone-e4efa.appspot.com",
  messagingSenderId: "310242235596",
  appId: "1:310242235596:web:ef730270f4b45fd2fade69",
  measurementId: "G-5F5PG6QWGR"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth(app);

export {db,auth};
