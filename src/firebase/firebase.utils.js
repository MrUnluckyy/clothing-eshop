import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA2nVpE5DAu52oH_gkiOiUp5wmBWOBXmCA",
    authDomain: "crwn-db-6d6ca.firebaseapp.com",
    projectId: "crwn-db-6d6ca",
    storageBucket: "crwn-db-6d6ca.appspot.com",
    messagingSenderId: "81313640502",
    appId: "1:81313640502:web:776684b4cef84ce69a2897",
    measurementId: "G-XSYZMN0V4N"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;