import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_ENDPOINT}/api/login`,
        {
          email,
          password,
        }
      );
      alert("Login successful");
      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  const handleForgotPassword = async () => {
    const emailPrompt = prompt("Enter your email to receive reset link:");
    if (!emailPrompt) return;

    try {
      await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_ENDPOINT}/api/forgot-password`,
        {
          email: emailPrompt,
        }
      );
      alert("Reset link sent to your email");
    } catch (err) {
      alert(err.response?.data?.message || "Error sending reset email");
    }
  };

  // Google login
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse;

      // Send the ID token to the backend for verification
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_ENDPOINT}/api/google/login`,
        {
          credential, // Send the ID token to verify
        }
      );

      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        alert("Google signin successful");
        navigate("/home");
      } else {
        alert("Signup failed: Token not returned");
      }
    } catch (error) {
      alert("Google login failed");
      console.error("Google login error:", error);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row overflow-hidden">
      <div className="md:w-1/2 w-full h-1/3 md:h-full">
        <img
          src="ipl.jpg"
          alt="IPL Players"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-1/2 w-full bg-gray-900 text-white flex items-center justify-center p-4 md:p-8 h-2/3 md:h-full">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">IPL Manager</h2>

          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded border border-gray-700 text-white"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded border border-gray-700 text-white"
              required
            />

            <div className="flex justify-end text-sm">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-gray-400 hover:text-white"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-full bg-red-600 hover:bg-red-700 font-semibold"
            >
              Login
            </button>

            {/* Google Login Button */}
            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={() => alert("Google login failed")}
                shape="pill"
                theme="filled_blue"
                useOneTap
                use_fedcm_for_prompt={false}
              />
            </div>

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
