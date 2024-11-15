import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import {NETFLIX_LOGO, SUPPORTED_LANGUAGES} from "../utils/constants";
import {toggleGptSearchView} from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {})
    .catch((error) => {
      navigate("/error");
    });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="px-6 pt-3 pb-6 md:py-3 flex flex-col md:flex-row md:justify-between md:items-center bg-black md:bg-black md:bg-opacity-50 text-sm md:text-base">
            <div className="w-40">
                <img className="h-full w-full" src={NETFLIX_LOGO} alt="Netflix logo"/>
            </div>
            {user && (<div className="flex mx-4 pt-4 md:p-0 md:mx-0 md:items-end justify-between md:justify-normal">
              {showGptSearch && (
                <select className="p-1 md:mx-1 bg-gray-900 text-white cursor-pointer" onChange={handleLanguageChange}>
                  {SUPPORTED_LANGUAGES.map( lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                </select>
              )}
              <button className="p-1 md:mx-10 text-black font-semibold bg-white rounded border-2 border-red-700 md:border-0" onClick={handleGptSearchClick}>
                {showGptSearch ? "Go to HomePage" : "GPT Search"}
              </button>
              <img className="hidden md:inline" src={user.photoURL} alt="user icon"/>
              <button className="p-1 mx-1 text-white font-semibold bg-red-700 rounded hidden md:inline" onClick={handleSignOut}>Sign out</button>
            </div>)}
    </div>
  )
}

export default Header