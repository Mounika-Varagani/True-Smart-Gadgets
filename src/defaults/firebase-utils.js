import firebase from 'firebase//app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDeetGfeKkOzABYmabJ-QIPr-3-bSHuAJs",
  authDomain: "true-smart-gadgets.firebaseapp.com",
  projectId: "true-smart-gadgets",
  storageBucket: "true-smart-gadgets.appspot.com",
  messagingSenderId: "700066277021",
  appId: "1:700066277021:web:45306f738f849a95325674"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signOut = () => auth.signOut();


export default firebase;
