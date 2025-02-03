import React, { useState } from "react"; // Import useState
import Header from "./Header";

function Login() {
  const[isLogin,setIsLogin] = useState(false);
  const[fullName,setFullName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  const loginHandler = () => {
    setIsLogin(!isLogin);
  }
<h1>hello</h1>
  const getInputData = (e) => {
    e.preventDefault();
    console.log(fullName,email,password);
    setFullName("");
    setEmail("");
    setPassword("");
  }
    
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png"
          alt="Banner"
        />
      </div>
      <form onSubmit={getInputData} className="absolute bg-black p-12 z-10 flex my-36 flex-col items-center max-w-md w-96 opacity-90 left-1/2 -translate-x-1/2 rounded-lg rounded-sm">
        <h1 className="text-3xl text-white font-bold p-2">{isLogin ? "Login" : "Signup"}</h1>
        <div className="flex flex-col items-center space-y-6">
        {
          !isLogin  &&  <input value={fullName} onChange={(e)=>setFullName(e.target.value)} type="text" placeholder="Enter your full name" className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white w-full"
          />
        }
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="Email"
            placeholder="Email"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white w-full"
          />
          <input value={password} onChange={(e)=>setPassword(e.target.value)}  type="Password"
            placeholder="Password"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white w-full"
          />

          <button className="bg-red-600 mt-6 p-3 text-white rounded-sm font-bold">{isLogin? "Login" : "Signup"}</button>
          <p className="text-white"> {isLogin ? "New to Netflix?" : "Already Have Account?"}<span onClick={loginHandler} className="ml-1 text-blue-600 font-medium cursor-pointer">{isLogin? "Signup" : "Login"}</span></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
