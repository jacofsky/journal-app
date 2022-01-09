import 'firebase/firestore'
import 'firebase/auth'

import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {GoogleAuthProvider} from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyAyMXzNxyJpRc_KnVcdCwCoxu5_lUBxbnM",
    authDomain: "react-journal-app-373fb.firebaseapp.com",
    projectId: "react-journal-app-373fb",
    storageBucket: "react-journal-app-373fb.appspot.com",
    messagingSenderId: "330561181821",
    appId: "1:330561181821:web:50388cae9619cea34b3914"
};

const firebaseConfigTesting = {
    apiKey: "AIzaSyAD8iy0rrfnM4vKJO68F1Lt0Q8LcCiOHAs",
    authDomain: "testing-c35d4.firebaseapp.com",
    projectId: "testing-c35d4",
    storageBucket: "testing-c35d4.appspot.com",
    messagingSenderId: "33657724398",
    appId: "1:33657724398:web:a5e691ac98d93407ecc2ff"
  };

if ( process.env.NODE_ENV === 'test' ) {
 
    initializeApp(firebaseConfigTesting);
 
  } else {
 
    initializeApp(firebaseConfig);
 
  }
const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider()

export {
    db,
    googleAuthProvider
}