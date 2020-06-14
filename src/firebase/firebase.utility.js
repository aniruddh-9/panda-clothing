import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAQodPB4uz9AytXJoPjj1Hcpwiomn0-LoM",
    authDomain: "panda-clothing.firebaseapp.com",
    databaseURL: "https://panda-clothing.firebaseio.com",
    projectId: "panda-clothing",
    storageBucket: "panda-clothing.appspot.com",
    messagingSenderId: "394888768628",
    appId: "1:394888768628:web:b036484f41c2c7779a7521",
    measurementId: "G-T9FFMBTL09"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt :'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;