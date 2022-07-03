import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBjg3RjNB6d0Sy75CAux_S4PjSZbMM6YzM",
    authDomain: "sda-final-project-79e7c.firebaseapp.com",
    databaseURL: "https://sda-final-project-79e7c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sda-final-project-79e7c",
    storageBucket: "sda-final-project-79e7c.appspot.com",
    messagingSenderId: "367073502877",
    appId: "1:367073502877:web:dc0b05fb84599403f6d674",
    measurementId: "G-ZF647P88G5"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }