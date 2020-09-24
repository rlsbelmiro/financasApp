import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyAvDjv4FHw-mMms8aK-3t_VrGM-QFA74uM",
    authDomain: "cursorn-1583e.firebaseapp.com",
    databaseURL: "https://cursorn-1583e.firebaseio.com",
    projectId: "cursorn-1583e",
    storageBucket: "cursorn-1583e.appspot.com",
    messagingSenderId: "776047999076",
    appId: "1:776047999076:web:16dc7dcea126b20ba00771",
    measurementId: "G-NW0ESLXMBJ"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
