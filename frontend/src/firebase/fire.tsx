import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  updateDoc,
  getDoc,
  deleteField,
} from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getDownloadURL, getStorage, ref, uploadBytes, deleteObject } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJ4AWU0oNcGNiqvHh9GVl67kXBLx9vT_E",
  authDomain: "xcite-edu-landing.firebaseapp.com",
  projectId: "xcite-edu-landing",
  storageBucket: "xcite-edu-landing.appspot.com",
  messagingSenderId: "549436531231",
  appId: "1:549436531231:web:c8950aac2c068038b52b2a",
  measurementId: "G-WZY234T3KC"};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();
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

export async function uploadToFirestore(col: string, data: any) {
  const ref = doc(db, "admin", 'team');
  const response = await updateDoc(ref, { [data.name]: data });
}

export async function getFromFirestore(col: string, func: Function) {
  const ref = doc(db, 'admin', col);
  const response = await getDoc(ref);
  if (response.exists()) {
    func(response.data());
  }
}

export async function deleteFromFirestore(col: string, fieldName: string) {
  const ref = doc(db, 'admin', col);

  const response = await updateDoc(ref, {
    [fieldName]: deleteField(),
  });
}

export async function uploadImageToFirebase(file: any, func: Function) {
  console.log(file);

  const storageRef = ref(storage, `team/${file.name}`);
  const res = await uploadBytes(storageRef, file);
  const url=await getDownloadURL(res.ref)
  const path=res.ref.fullPath
  func({url, path})
  console.log(url, path);
  
}

export async function deleteImageFromFirebase(imagePath:string) {
  const deleteRef=ref(storage, imagePath)
  const response=deleteObject(deleteRef)

}
