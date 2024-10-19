import { useState } from "react"
import Header from "./Header"

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  }
  return (
    <div className="flex flex-col">
        <div className="absolute top-0 -z-1">
            <img className="h-screen w-screen" src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg" alt="login-background-image"/>
        </div>
        <div className="absolute top-0 -z-1 h-screen w-screen bg-black bg-opacity-50">
        </div>
        <Header/>
        <form className="self-center p-12 bg-black bg-opacity-70 py-192 px-272 w-96">
            <h2 className= "mb-8 text-3xl font-bold text-white">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
            {(!isSignInForm) && (<input type="text" placeholder="Name" className="w-full py-4 px-2 mb-4 border font-semibold text-white placeholder-gray-400 border-gray-400 bg-white bg-opacity-10 rounded"/>)}
            <input type="text" placeholder="Email Address" className="w-full py-3 px-2 mb-4 border font-semibold text-white placeholder-gray-400 border-gray-400 bg-white bg-opacity-10 rounded"/>
            <input type="password" placeholder="Password" className="w-full py-3 px-2 mb-4 border font-semibold text-white placeholder-gray-400 border-gray-400 bg-white bg-opacity-10 rounded"/>
            <button className="w-full p-2 mb-6 text-white font-semibold bg-red-700 rounded">Sign in</button>
            <div className="text-white">{isSignInForm ? "New to Netflix? " : "Already registered "}<span className="cursor-pointer hover:underline" onClick={toggleSignInForm}>{isSignInForm ? "Sign up now." : "Sign In Now"}</span></div>
        </form>
    </div>
  )
}

export default Login