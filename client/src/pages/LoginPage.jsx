import { useState } from "react";

import assets from "../assets/assets";

const LoginPage = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);
  const handleSubmitHandler = (e) => {
    e.preventDefault();
    if (currState === "Sign Up" && !isDataSubmitted) {
      setIsDataSubmitted(true);
      // Handle sign-up logic here
      console.log("Sign Up Data:", { fullName, email, password, bio });
      return;
    } else {
      // Handle login logic here
      console.log("Logging in with:", { email, password });
    }
  };
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">
      {/* Left Side Image */}

      <img src={assets.logo_big} alt="Logo" className="w-[min(30vw, 200px)]" />
      {/* Right Side Form */}
      <form
        onSubmit={handleSubmitHandler}
        className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg"
      >
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {currState}
          {
            isDataSubmitted && <img onClick={() => setIsDataSubmitted(false)} src={assets.arrow_icon} alt="" className="w-5 cursor-pointer" />
          }
         
        </h2>
        {currState === "Sign Up" && !isDataSubmitted && (
         
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
             className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Full name"
              required
              />
            
        )}
        {!isDataSubmitted && (
          <div className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Password"
              required
            />
          </div>
        )}
        {currState === "Sign Up" && isDataSubmitted && (
          <textarea
            placeholder="Provide a short bio..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={4}
          ></textarea>
        )}
        <button type="submit" className="py-3 bg-gradient-to-r from-purple-400 to-violet-800 text-white font-light rounded-md cursor-pointer hover:opacity-80">
          {currState === "Sign Up" ? "Create Account" : "Login Now"}
        </button>
        <div className="flex items-center gap-2 text-sm to-gray-500">
          <input type="checkbox" id="chkPrivacy"/>
          <label htmlFor="chkPrivacy" className="select-none">Agree to the terms of use & privacy policy</label>
        </div>
        <div className="flex flex-col gap-2">
          {currState === "Sign Up" ? (
            <p className="text-sm text-gray-600">Already have an account? <span onClick={() => {setCurrState("Login");setIsDataSubmitted(false)}} className="font-medium text-violet-600 cursor-pointer">Login</span></p>
          ) : (
            <p className="text-sm text-gray-600">Create an account? <span onClick={() => setCurrState("Sign Up")} className="font-medium text-violet-600 cursor-pointer">Click here</span></p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
