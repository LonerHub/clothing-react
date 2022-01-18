import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAc2ULFhEMbv0dSPV-cI2b25AWfa0KgLRM",
  authDomain: "clothingstore-db-fc7c0.firebaseapp.com",
  projectId: "clothingstore-db-fc7c0",
  storageBucket: "clothingstore-db-fc7c0.appspot.com",
  messagingSenderId: "277420512136",
  appId: "1:277420512136:web:c1af2cc3af3b7f1ba2203d",
  measurementId: "G-61TTQGFGN9"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error in creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;