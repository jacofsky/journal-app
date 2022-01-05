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

initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider()

export {
    db,
    googleAuthProvider
}