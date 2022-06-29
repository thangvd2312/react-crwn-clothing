import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB3M-bnZb-XASkmE9-KCh1YOS3WgasNaUY",
  authDomain: "thangvv-crwn-clothing-db.firebaseapp.com",
  projectId: "thangvv-crwn-clothing-db",
  storageBucket: "thangvv-crwn-clothing-db.appspot.com",
  messagingSenderId: "935995016742",
  appId: "1:935995016742:web:f99976dfe67f9076de48e7"
};
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);
export const db = getFirestore(firebaseApp);
export const createUserDocumentFromAuth = async (userAuth) => {
  const { uid } = userAuth;
  const userDocRef = doc(db, "users", uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log("error createing the user ", error.message);
    }
  }
};
