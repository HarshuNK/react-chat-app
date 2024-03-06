// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyAJFggt8yqC0BfC6zLRTnqzv4iY7P7e138",
    authDomain: "chat-app-5a13b.firebaseapp.com",
    projectId: "chat-app-5a13b",
    storageBucket: "chat-app-5a13b.appspot.com",
    messagingSenderId: "786787651105",
    appId: "1:786787651105:web:523f4642920355c7529d60",
    measurementId: "G-6HN7H7KZ6E"
  };

// Initilize Firebase
export const app = initializeApp(firebaseConfig);  // main app config
export const auth = getAuth()   // authentication
export const storage = getStorage()  // file storage
export const db = getFirestore()   // database