import { createContext, useEffect, useState } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth
} from "../utils/firebase/firebase.utils";
// ass the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unSubcribe = onAuthStateChangedListener((user) => {
      console.log(user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unSubcribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
