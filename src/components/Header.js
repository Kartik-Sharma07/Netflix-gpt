import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import {NETFLIX_LOGO} from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    
    //Unsubscribe when component unmounts
    return () => unsubscribe();
  
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {})
    .catch((error) => {
      navigate("/error");
    });
  };

  return (
    <div className="mx-6 my-3 flex justify-between items-center">
            <div className="w-40">
                <img className="h-full w-full" src={NETFLIX_LOGO} alt="Netflix logo"/>
            </div>
            {user && (<div className="flex items-end">
              <img src={user.photoURL} alt="user icon"/>
              <button className="p-1 mx-1 text-white font-semibold bg-red-700 rounded" onClick={handleSignOut}>Sign out</button>
            </div>)}
    </div>
  )
}

export default Header