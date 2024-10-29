import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {USER_AVATAR} from "../utils/constants"

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value, name?.current?.value);
    setErrorMessage(message);

    if(message) return;

    if(!isSignInForm){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value, photoURL: USER_AVATAR
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
          });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    } else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(`Invalid credentials`);
          });
    }
  }

  return (
    <div className="flex flex-col">
        <div className="absolute top-0 -z-1">
            <img className="h-screen w-screen" src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg" alt="login-background-image"/>
        </div>
        <div className="absolute top-0 -z-1 h-screen w-screen bg-black bg-opacity-50">
        </div>
        <Header/>
        <form onSubmit={(e) => e.preventDefault()} className="self-center p-12 bg-black bg-opacity-70 py-192 px-272 w-96">
            <h2 className= "mb-8 text-3xl font-bold text-white">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
            {(!isSignInForm) && (<input type="text" placeholder="Full Name" ref={name} className="w-full py-4 px-2 mb-4 border font-semibold text-white placeholder-gray-400 border-gray-400 bg-white bg-opacity-10 rounded"/>)}
            <input type="text" placeholder="Email Address" ref={email} className="w-full py-3 px-2 mb-4 border font-semibold text-white placeholder-gray-400 border-gray-400 bg-white bg-opacity-10 rounded"/>
            <input type="password" placeholder="Password" ref={password} className="w-full py-3 px-2 mb-4 border font-semibold text-white placeholder-gray-400 border-gray-400 bg-white bg-opacity-10 rounded"/>
            {(errorMessage) ? <div className="text-red-700 mb-4">{errorMessage}</div> : ""}
            <button className="w-full p-2 mb-6 text-white font-semibold bg-red-700 rounded" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <div className="text-white">{isSignInForm ? "New to Netflix? " : "Already registered? "}<span className="cursor-pointer hover:underline" onClick={toggleSignInForm}>{isSignInForm ? "Sign up now." : "Sign In Now"}</span></div>
        </form>
    </div>
  )
}

export default Login