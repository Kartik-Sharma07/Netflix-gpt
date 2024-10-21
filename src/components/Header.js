import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  };

  return (
    <div className="w-full px-6 py-3 flex justify-between items-center">
            <div className="w-40">
                <img className="h-full w-full" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix logo"/>
            </div>
            {user && (<div className="flex items-end">
              <img src={user.photoURL} alt="user icon"/>
              <button className="p-1 mx-1 text-white font-semibold bg-red-700 rounded" onClick={handleSignOut}>Sign out</button>
            </div>)}
    </div>
  )
}

export default Header