import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD1lbaCT0Skg2S5m2TRluMpMx1XGeg7dfI",
    authDomain: "wanime-x.firebaseapp.com",
    projectId: "wanime-x",
    storageBucket: "wanime-x.appspot.com",
    messagingSenderId: "229344555627",
    appId: "1:229344555627:web:de2b577ef787e16000772e"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

// init firebase auth
const auth = getAuth()

export { db, auth }