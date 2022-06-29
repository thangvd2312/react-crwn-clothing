import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
const SignIn = () => {
  useEffect(() => {
    async function getResultSignGGRedirect() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
        console.log(userDocRef);
      }
    }
    getResultSignGGRedirect();
  });
  const loginGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };
  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={loginGoogleUser}>SignIn with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        SignIn with Google Redirect
      </button>
      <SignUpForm />
    </div>
  );
};
export default SignIn;
