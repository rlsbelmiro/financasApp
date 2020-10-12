import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyBaEBpZM-eCHegZn7A9CXnDt6fIXmpvqXc",
    authDomain: "financasapp-faf21.firebaseapp.com",
    databaseURL: "https://financasapp-faf21.firebaseio.com",
    projectId: "financasapp-faf21",
    storageBucket: "financasapp-faf21.appspot.com",
    messagingSenderId: "335599006374",
    appId: "1:335599006374:web:6d0cce959ee8256117ba67",
    measurementId: "G-QTN7905046"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
