import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";
const SignIn = () => {
  const loginGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log("user", user);
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={loginGoogleUser}>SignIn with Google Popup</button>
    </div>
  );
};
export default SignIn;
