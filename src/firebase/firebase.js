import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAiBmYFyDO8_5mNHzOtiKGvFNJGW7DIZzI",
  authDomain: "crown-db-7f826.firebaseapp.com",
  databaseURL: "https://crown-db-7f826.firebaseio.com",
  projectId: "crown-db-7f826",
  storageBucket: "crown-db-7f826.appspot.com",
  messagingSenderId: "588161783734",
  appId: "1:588161783734:web:52a1f5fe63c81d0eb71317",
  measurementId: "G-9Z53EV7L0J",
};
export const createUserProfileDoc = async (userAuth , additionalData) =>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  
  if(!snapShot.exists){
    const {displayName , email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(err){
      console.log("error creating new user",err.message)
    }
  };
  return userRef;

};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
export default firebase;
