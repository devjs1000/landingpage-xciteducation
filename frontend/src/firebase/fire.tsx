import { initializeApp } from "firebase/app";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
  } from "firebase/auth";
  
const firebaseConfig = {
  apiKey: "AIzaSyCDwtPEiYV63WQqMG6Dz0v4z5olQnMsx0U",
  authDomain: "xcitedu-admin.firebaseapp.com",
  projectId: "xcitedu-admin",
  storageBucket: "xcitedu-admin.appspot.com",
  messagingSenderId: "36815920428",
  appId: "1:36815920428:web:504e7af58c58d21406e089"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth();
const usr = auth.currentUser;
let uid = "";

export const createUser = (email: any, password: any, func: Function) => {
  try {
    createUserWithEmailAndPassword(auth, email, password);
  } catch (err: any) {
    func(err.message);
    console.log(err);
  }
};

export const loginUser = (email: any, password: any, func: Function) => {
  try {
    signInWithEmailAndPassword(auth, email, password);
  } catch (err: any) {
    func(err.message);
    console.log(err);
  }
};


export function stateChangeLogin(func: Function) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      uid = user.uid;
      func(user);
    }
  });
}
