import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      navigate("/home");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left Side Image */}
      <div className="md:w-1/2 w-full h-1/3 md:h-full">
        <img
          src="ipl.jpg"
          alt="IPL Players"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Form */}
      <div className="md:w-1/2 w-full bg-gray-900 text-white flex items-center justify-center p-4 md:p-8 h-2/3 md:h-full">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">IPL Manager</h2>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div className="flex justify-end text-sm">
              <a href="#" className="text-gray-400 hover:text-white">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors duration-300 font-semibold"
            >
              Login
            </button>

            <button
              type="button"
              className="w-full py-2 rounded-full bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300 font-semibold"
            >
              Login with Google
            </button>

            <div className="text-center text-sm">
              New User?{" "}
              <Link to="/signup" className="text-red-400 hover:text-red-600">
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
